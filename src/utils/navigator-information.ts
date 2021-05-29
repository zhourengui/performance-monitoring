import { WN } from "../constants"
import { effectiveType, saveData } from "../performance/record-client-navigator"
import { EffectiveType, NavigatorInformation } from "../types/types"

export const isLowEndDevice = (): boolean => {
  return WN.deviceMemory <= 4 || WN.hardwareConcurrency <= 4
}

export const isLowEndExperience = (
  effectiveType: EffectiveType,
  saveData: boolean
): boolean => {
  if (["slow-2g", "2g", "3g"].includes(effectiveType)) {
    return true
  }

  return isLowEndDevice() || saveData
}

/**
 * 信息来源于 window.navigator:
 * 1. Device Memory 设备内存
 * 2. Hardware Concurency 并发数
 * 3. Status of the service worker:
 *     - controlled: a service worker is controlling the page
 *     - supported: the browser supports service worker
 *     - unsupported: the user's browser does not support service worker
 */
export const getNavigatorInformation = (): NavigatorInformation | undefined => {
  if (WN) {
    return {
      deviceMemory: WN.deviceMemory || 0,
      hardwareConcurrency: WN.hardwareConcurrency || 0,
      serviceWorkerStatus:
        'serviceWorker' in WN
          ? WN.serviceWorker?.controller
            ? "controlled"
            : "supported"
          : "unsupported",
      isLowEndDevice: isLowEndDevice(),
      isLowEndExperience: isLowEndExperience(effectiveType, saveData)
    }
  }
}