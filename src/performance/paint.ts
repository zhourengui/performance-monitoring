import { disconnectPO } from "./performance-observer"

export const initFirstPaint = (entries: Array<PerformanceEntry>) => {
  for (let i = 0; i < entries.length; i ++) {
    const entry = entries[i]
    if (entry.name === "first-paint") {
      // 日志收集
    } else if (entry.name === "first-contentful-paint") {
      // 日志收集
      disconnectPO("paint")
    }
  }
}