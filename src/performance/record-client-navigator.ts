import { WN } from "../constants"
import type { EffectiveType, NavigatorOpt } from "../types/types"
import { pushTask } from "../utils/helper"

export let effectiveType: EffectiveType = "4g"
export let saveData: boolean = false

/**
   * Get user's browser information, internet speed and other information
   * Calculating network speed formula
   * T1 = DNS + New Connection(TCP) + RTT(One-time transmission)
   * T2 = New Connection(TCP) + RTT(One-time transmission)
   * T3 = RTT(One-time transmission)
   * bandwidth = (100k-50k)/(t5-t4)
   * @return {NavigatorOpt}
   */
export const recordClientNavigator = async (): Promise<NavigatorOpt> => {
  return new Promise(resolve => {
    let res = {} as NavigatorOpt
    if ("connection" in WN) {
      res.connection = {
        downlink: WN.connection.downlink,
        effectiveType: WN.connection.effectiveType,
        rtt: WN.connection.rtt,
        saveData: WN.connection.saveData,
      }
      saveData = res.connection.saveData || saveData
      effectiveType = res.connection.effectiveType || effectiveType
    }
    // Doppler Velocity
    if ("fetch" in window) {
      pushTask(async () => {
        let times = []
        const sizes = [0, 0, 0, 50, 100]
        const fetchs = sizes.map(i => (() => new Promise(async resolve => {
          await fetch(`http://performance-monitoring.zhourengui.top/performance-monitoring/doppler-velocity?size=${i}`)
          resolve(true)
        })))

        times.push(+ new Date())

        while (fetchs.length) {
          const f = fetchs.shift()
          await f?.()
          times.push(+ new Date())
        }
        res.connection.bandwidth = `${((sizes[4] - sizes[3]) / ((times[5] - times[4]) / 1000)).toFixed(2)} k/s`
        resolve(res)
      })
    }

    res.userAgent = WN.userAgent
  })
}