import PerformanceMonitoring from "../src/index"

new PerformanceMonitoring({
  captureError: true,
  fetchDomain: "http://performance-monitoring.zhourengui.top/performance-monitoring",
  errEventRoute: "/err-events",
  errLogRoute: "/err-traceback",
  logRoute: "/performance-log",
  isObserverResourceTiming: true,
  isObserverElementTiming: true
})