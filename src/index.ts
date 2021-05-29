import ErrorTrace from "./error-trace"
import ReportData from "./utils/ReportData"
import { recordingStorage } from "./performance/record-storage"
import { version } from "../package.json"
import { config } from "./config/config"
import { recordClientNavigator } from "./performance/record-client-navigator"
import { recordTiming } from "./performance/record-timing"
import { isPerformanceSupported } from "./utils/helper"
import { AskLevel, PerformanceMonitoringOptions } from "./types/types"
import { disconnectPerformanceObserver, initPerformanceObserver } from "./performance/performance-observer"
import { D } from "./constants"
import { log } from "./utils/console"

/**
 * A performance monitoring platform SDK
 * Features include error capture, error recording, performance monitoring
 * 功能包括错误捕获、错误录制、性能监控
 * 一款性能监控平台SDK
 * @packageDocumentation
 */
export default class PerformanceMonitoring {
  constructor(options: PerformanceMonitoringOptions = {}) {
    const {
      isObserverElementTiming,
      isObserverResourceTiming,
      maxTime,
      captureError,
      fetchDomain,
      errLogRoute,
      errEventRoute,
      logRoute,
      analyticsTracker,
      recordOptions,
    } = options

    config.isObserverElementTiming = !!isObserverElementTiming
    config.isObserverResourceTiming = !!isObserverResourceTiming
    config.maxTime = maxTime || config.maxTime
    config.captureError = captureError || config.captureError
    config.fetchDomain = fetchDomain
    config.errLogRoute = errLogRoute
    config.errEventRoute = errEventRoute
    config.logRoute = logRoute
    config.reportData = new ReportData()
    config.analyticsTracker = analyticsTracker || config.analyticsTracker
    config.recordOptions = recordOptions || config.recordOptions

    log(version)

    if (captureError && fetchDomain) {
      ErrorTrace.getInstance()
    }

    if (isPerformanceSupported()) {

      if (D.visibilityState === "hidden") {
        D.addEventListener(
          "visibilitychange",
          disconnectPerformanceObserver
        )
      }

      if (fetchDomain && logRoute) {
        Promise.all([
          recordTiming(),
          recordClientNavigator(),
          recordingStorage()
        ]).then(res => {
          config.reportData?.fetch(
            AskLevel.IDLE,
            JSON.stringify(res),
            logRoute
          )
        })
      }

      initPerformanceObserver()
    }
  }
}