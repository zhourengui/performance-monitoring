import { WP } from "../constants"

/**
 * Determine whether the browser supports getEntriesByType
 * @returns 
 */
export const isPerformanceSupported = (): boolean => {
  return WP && !!WP.getEntriesByType && !!WP.now && !!WP.mark
}

/**
 * bytes to mb
 * @param {number} bytes
 */
export const bytes2mb = (bytes: number) => {
  return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2))
}