import { PerformanceObserverEventType, PerformanceObservers } from "../types/types"
import { name } from "../../package.json"
import { C } from "../constants"
import { initFirstPaint } from "./paint"

const performanceObserverInstance: PerformanceObservers = {}

/**
 * PerformanceObserver asynchronous subscription
 * PerformanceObserver异步订阅
 * @param {PerformanceObserverEventType} eventType 监听的事件类型 Types of events monitored
 * @param {(entries: Array<any>) => void} callback 监听的回调 Listened callback
 */
const asyncSubscripePO = (
  eventType: PerformanceObserverEventType,
  callback: (entries: Array<any>) => void
): PerformanceObserver | null => {
  try {
    const Observer = new PerformanceObserver((entries) => callback(entries.getEntries()))
    Observer.observe({ type: eventType, buffered: true })
    return Observer
  } catch (error) {
    C.warn(`${name}: ${error}`);
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
 */
export const initPerformanceObserver = (): void => {
  performanceObserverInstance["paint"] = asyncSubscripePO("paint", initFirstPaint)
}