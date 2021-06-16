import { PerformanceEntryEncapsulation } from "../types/types"
import { logMetric } from "../utils/log"
import { tbt, fcp } from "../utils/metrics"

/**
 * LongtaskObserverCallback
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Long_Tasks_API
 * The definition of a long task is a task longer than 50ms
 * 长任务的定义是超过50ms的任务
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns 
 */
export const initLongtask = (entries: Array<PerformanceEntryEncapsulation>) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    const blockingTime = entry.startTime - 50
    if (entry.name !== "self" && entry.startTime < fcp.value) return
    if (blockingTime > 0) {
      tbt.value += entry.startTime
      logMetric("longtask", entry.startTime)
    }
  }
}