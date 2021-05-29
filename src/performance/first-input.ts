import { PerformanceEntryEncapsulation } from "../types/types"
import { logData, logMetric } from "../utils/log"
import { bt, cls, lcp, rt } from "../utils/metrics"
import { disconnectPO, performanceObserverInstance } from "./performance-observer"

/**
 * FirstInputObserverCallback
 * Take the last entry
 * @param {Array<PerformanceEntryEncapsulation>} entries
 */
export const initFirstInput = (entries: Array<PerformanceEntryEncapsulation>) => {
  const lastEntry = entries.pop()
  if (lastEntry) {
    // Core Web Vitals FID logic
    // Delayed operation of measurement input events
    // 测量输入事件的延迟操作
    logMetric(
      "fidVitals",
      lastEntry.processingStart - lastEntry.startTime,
      {
        performanceEntry: lastEntry
      }
    )

    // Measure the duration of processing the first input event
    // 测量处理第一个输入事件的持续时间
    logMetric(
      "fid",
      lastEntry.duration,
      {
        performanceEntry: lastEntry
      }
    )
  }

  // Destroy the registered callback for FID to avoid memory leaks caused by too many observers
  // 销毁对FID的注册回调 避免过多的观察者造成内存泄露
  disconnectPO("first-input")

  // lcp log
  logMetric("lcp", lcp.value)

  // Force any pending records to be dispatched
  // 强制分派所有待处理的记录
  if (
    performanceObserverInstance["layout-shift"] &&
    typeof performanceObserverInstance["layout-shift"].takeRecords === "function"
  ) {
    performanceObserverInstance["layout-shift"].takeRecords()
  }

  // cls log
  logMetric("cls", cls.value)

  // bt log
  logMetric("bt", bt.value)

  // TBT with 5 second delay after FID
  setTimeout(() => {
    logMetric("bt5S", bt.value)
  }, 5000)

  // TBT with 10 second delay after FID
  // 10S overall data consumption after FID is activated
  setTimeout(() => {
    logMetric("bt10S", bt.value)
    logData("dataConsumption", rt.value)
  }, 10000)
}