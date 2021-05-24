import { WP } from "../constants"
import { isPerformanceSupported } from "../utils/helper"
import type { TimingOpt } from "../types/types"
/**
  * Navigation Timing API provides performance metrics for HTML documents.
  * w3c.github.io/navigation-timing/
  * developers.google.com/web/fundamentals/performance/navigation-and-resource-timing
  */
export const recordTiming = async (): Promise<TimingOpt> => {
  let res = {} as TimingOpt
  if (isPerformanceSupported()) {
    // There is an open issue to type correctly getEntriesByType
    // github.com/microsoft/TypeScript/issues/33866
    const n = WP.getEntriesByType("navigation")[0] as any
    if (n) {
      const responseEnd = n.responseEnd
      const responseStart = n.responseStart
      const requestStart = n.requestStart
      res = {
        // fetchStart marks when the browser starts to fetch a resource
        // responseEnd is when the last byte of the response arrives
        fetchTime: responseEnd - n.fetchStart,
        // Service worker time plus response time
        workerTime: responseEnd - n.workerStart,
        // Request plus response time (network only)
        networkTime: responseEnd - requestStart,
        // Response time only (download)
        downloadTime: responseEnd - responseStart,
        // Time to First Byte (TTFB)
        timeToFirstByte: responseStart - requestStart,
        // HTTP header size
        headerSize: n.decodedBodySize - n.transferSize || 0,
        // DNS Lookup Time
        dnsLookupTime: n.domainLookupStart - n.domainLookupEnd,
        // TCP time
        tcpTime: n.connectStart - n.connectEnd || 0,
        // First paint
        firstPaintTime: responseEnd - responseStart || 0,
        // Dom Parse Time
        domParseTime: n.domComplete - n.domInteractive,
        // Dom Render Time
        domRenderTime: n.domContentLoadedEventEnd - n.domContentLoadedEventStart || 0,
        // onload time
        onloadTime: n.loadEventEnd - n.loadEventStart
      }
    }
  }

  return res
}