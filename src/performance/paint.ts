import { PerformanceEntryEncapsulation } from "../types/types"
import { logMetric } from "../utils/log"
import { fcp, fp, lcp } from "../utils/metrics"
import { disconnectPO } from "./performance-observer"

/**
 * FirstPaintObserverCallback
 * @returns 
 */
export const initFirstPaint = (
  callback: () => void
) => (entries: Array<PerformanceEntryEncapsulation>) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    if (entry.name === "first-paint") {
      fp.value = entry.startTime
      logMetric("fp", entry.startTime)
    } else if (entry.name === "first-contentful-paint") {
      fcp.value = entry.startTime
      logMetric("fcp", entry.startTime)
      callback()
      disconnectPO("paint")
    }
  }
}

/**
 * LargestContentfulPaintObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries 
 */
export const initLargestContentfulPaint = (entries: Array<PerformanceEntryEncapsulation>) => {
  const lastEntry = entries.pop()
  if (lastEntry) {
    lcp.value = lastEntry.renderTime || lastEntry.startTime
  }
}

/**
 * ElementTimingObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries
 */
export const initElementTiming = (entries: Array<PerformanceEntryEncapsulation>) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    if (entry.identifier) {
      logMetric(entry.identifier, entry.startTime, {
        performanceEntry: entry
      })
    }
  }
}