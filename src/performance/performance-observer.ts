import { PerformanceEntryEncapsulation, PerformanceObserverEventType, PerformanceObservers } from "../types/types"
import { name } from "../../package.json"
import { C } from "../constants"
import { initElementTiming, initFirstPaint, initLargestContentfulPaint } from "./paint"
import { initLongtask } from "./longtask"
import { initFirstInput } from "./first-input"
import { config } from "../config/config"
import { initResouceTiming } from "./resource"
import { initLayoutShift } from "./layout-shift"
import { logMetric } from "../utils/log"
import { tbt, cls, lcp } from "../utils/metrics"

export const performanceObserverInstance: PerformanceObservers = {}

/**
 * PerformanceObserver asynchronous subscription
 * PerformanceObserver异步订阅
 * @param {PerformanceObserverEventType} eventType 监听的事件类型 Types of events monitored
 * @param {(entries: Array<PerformanceEntryEncapsulation>) => void} callback 监听的回调 Listened callback
 */
const asyncSubscripePO = (
  eventType: PerformanceObserverEventType,
  callback: (entries: Array<PerformanceEntryEncapsulation>) => void
): PerformanceObserver | null => {
  try {
    const Observer = new PerformanceObserver(
      (entries) =>
        callback(
          entries.getEntries() as Array<PerformanceEntryEncapsulation>
        )
    )
    Observer.observe({ type: eventType, buffered: true })
    return Observer
  } catch (error) {
    C.warn("PerformanceMonitoring obsever🌲:", `${name}: ${error}`);
  }
  return null
}

/**
 * Cancel the monitoring of PerformanceObserver
 * 取消PerformanceObserver的监听
 * @param {string} eventType 监听的事件类型 Types of events monitored
 */
export const disconnectPO = (eventType: string) => {
  if (performanceObserverInstance[eventType]) {
    performanceObserverInstance[eventType]?.disconnect()
  }
  delete performanceObserverInstance[eventType]
}

/**
 * PerformanceObserver initialization
 * PerformanceObserver初始化
 * paint: fp、fcp、largest-contentful-paint
 * longtask
 * first-input
 */
export const initPerformanceObserver = (): void => {
  performanceObserverInstance["paint"] = asyncSubscripePO(
    "paint",
    initFirstPaint(
      () => performanceObserverInstance["longtask"] = asyncSubscripePO("longtask", initLongtask)
    )
  )

  performanceObserverInstance["first-input"] = asyncSubscripePO(
    "first-input",
    initFirstInput
  )

  performanceObserverInstance["largest-contentful-paint"] = asyncSubscripePO(
    "largest-contentful-paint",
    initLargestContentfulPaint
  )

  // Collect page performance data
  // 收集页面性能数据
  if (config.isObserverResourceTiming) {
    asyncSubscripePO("resource", initResouceTiming)
  }

  performanceObserverInstance["layout-shift"] = asyncSubscripePO(
    "layout-shift",
    initLayoutShift
  )

  if (config.isObserverElementTiming) {
    asyncSubscripePO("element", initElementTiming)
  }
}


export const disconnectPerformanceObserver = (): void => {
  if (performanceObserverInstance["largest-contentful-paint"]) {
    logMetric("lcpFinal", lcp.value)
    disconnectPO("largest-contentful-paint")
  }

  if (performanceObserverInstance["layout-shift"]) {
    // Force any pending records to be dispatched
    // 强制分派所有待处理的记录
    if (typeof performanceObserverInstance["layout-shift"].takeRecords === "function") {
      performanceObserverInstance["layout-shift"].takeRecords()
    }
    logMetric("clsFinal", cls.value)
    disconnectPO("layout-shift")
  }

  if (performanceObserverInstance["longtask"]) {
    logMetric("btFinal", tbt.value)
    disconnectPO("longtask")
  }
}