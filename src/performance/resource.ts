import { PerformanceEntryEncapsulation } from "../types/types"
import { logData } from "../utils/log"
import { rt } from "../utils/metrics"

/**
 * ResouceTimingObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns 
 */
export const initResouceTiming = (entries: Array<PerformanceEntryEncapsulation>) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]

    logData("resourceTiming", entry)

    if (entry.decodedBodySize && entry.initiatorType) {
      const bodySize = entry.decodedBodySize / 1000
      rt.value[entry.initiatorType] += bodySize
      rt.value.total += bodySize
    }
  }
}