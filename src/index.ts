import { recordingStorage } from "./performance/record-storage"
import { version } from "../package.json"
import { config } from "./config/config"
import { recordClientNavigator } from "./performance/record-client-navigator"
import { recordTiming } from "./performance/record-timing"
import { isPerformanceSupported } from "./utils/helper"
import ErrorTrace from "./error-trace"
import ReportData from "./utils/ReportData"
import { AskLevel, PerformanceMonitoringOptions } from "./types/types"
import { initPerformanceObserver } from "./performance/performance-observer"
import { C } from "./constants"

/**
 * @packageDocumentation
 */
export default class PerformanceMonitoring {
  constructor(options: PerformanceMonitoringOptions = {}) {
    const {
      isObserverElementTiming,
      isObserverResourceTiming,
      lookbackTime,
      captureError,
      logDomain,
      errLogRoute,
      errEventRoute,
      logRoute
    } = options

    config.isObserverElementTiming = !!isObserverElementTiming
    config.isObserverResourceTiming = !!isObserverResourceTiming
    config.lookbackTime = lookbackTime || config.lookbackTime
    config.captureError = captureError || config.captureError
    config.logDomain = logDomain
    config.errLogRoute = errLogRoute
    config.errEventRoute = errEventRoute
    config.logRoute = logRoute
    config.reportData = new ReportData({ logDomain })

    C.log(`PerformanceMonitoring Version🍎：${version}`)

    if (captureError && logDomain) {
      ErrorTrace.getInstance()
    }

    if (isPerformanceSupported()) {
      if (logRoute) {
        Promise.all([
          recordTiming(),
          recordClientNavigator(),
          recordingStorage()
        ]).then(res => {
          console.error(res)
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