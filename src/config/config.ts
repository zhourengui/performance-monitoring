import type { PerformanceMonitoringOptions } from "../types/types";

export const config: PerformanceMonitoringOptions = {
  isObserverResourceTiming: false,
  isObserverElementTiming: false,
  lookbackTime: 15000,
  captureError: true,
  reportData: null
}