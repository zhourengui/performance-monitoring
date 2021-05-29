import { W, WP } from "../constants"

/**
 * Determine whether the browser supports getEntriesByType
 * @returns 
 */
export const isPerformanceSupported = (): boolean => {
  return WP && !!WP.getEntriesByType && !!WP.now && !!WP.mark
}

/**
 * bytes to kb
 * @param {number} bytes
 */
export const bytes2kb = (bytes: number) => {
  return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2))
}

/**
 * Keep two decimal places
 * @param {number} num
 * @returns 
 */
export const roundByTwo = (num: number) => {
  return parseFloat(num.toFixed(2))
}

/**
 * PushTask to requestIdleCallback
 * Efficient use of each frame for data collection
 * @param {() => void} callback
 */
export const pushTask = (callback: () => void) => {
  if ("requestIdleCallback" in W) {
    (W as any).requestIdleCallback(callback, { timeout: 3000 })
  } else {
    callback()
  }
}