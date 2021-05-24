import { WN } from "../constants"
import type { NavigatorOpt } from "../types/types"

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
  let res = {} as NavigatorOpt
  if ("connection" in WN) {
    res.connection = (WN as any).connection
  }
  // Doppler Velocity
  if ("fetch" in window) {
    let times = []
    const sizes = [0, 0, 0, 50, 100]
    const fetchs = sizes.map(i => (() => new Promise(async resolve => {
      await fetch(`http://106.12.49.47:1234/doppler-velocity?size=${i}`)
      resolve(true)
    })))

    times.push(+ new Date())

    while (fetchs.length) {
      const f = fetchs.shift()
      await f?.()
      times.push(+ new Date())
    }

    res.connection.bandwidth = `${((sizes[4] - sizes[3]) / ((times[5] - times[4]) / 1000)).toFixed(2)} k/s`
  }

  res.userAgent = WN.userAgent

  return res
}