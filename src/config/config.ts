import type { AnalyticsTrackerOptions, PerformanceMonitoringOptions } from "../types/types";
import { log } from "../utils/console";

export const config: PerformanceMonitoringOptions = {
  isObserverResourceTiming: false,
  isObserverElementTiming: false,
  maxTime: 15000,
  captureError: true,
  reportData: undefined,
  analyticsTracker: (options: AnalyticsTrackerOptions) => {
    log(options)
  },
  recordOptions: {},
  fetchDomain: "",
  errLogRoute: "",
  errEventRoute: "",
  logRoute: ""
}