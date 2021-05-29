import { AskLevel, ReportDataAchieve } from "../types/types"
import { W, WN } from "../constants"
import { config } from "../config/config"

export interface ReportDataOptions {
  logDomain: string | undefined,
}

/**
 * Log collection
 * 日志收集
 */
export default class ReportData implements ReportDataAchieve {
  /**
   * Log report, error report
   * If the level is urgent, use http request directly, otherwise use navigator.sendBeacon
   * 日志上报、错误上报
   * 如果level很紧急，直接使用http请求，否者使用navigator.sendBeacon
   * @param level
   * @param body 
   * @param uri 
   */
  public fetch(level: AskLevel, body: string, uri: string): void {
    uri = config.fetchDomain + uri

    switch (level) {
      case AskLevel.URGENT: {
        if (!!W.fetch) {
          fetch(uri, { body, method: "POST", keepalive: true })
        } else {
          let xhr: XMLHttpRequest | null = new XMLHttpRequest()
          xhr.open("post", uri, true)
          xhr.setRequestHeader("Content-Type", "application/json")
          xhr.send(body)
          xhr.onload = () => xhr = null // 防止内存泄漏
        }
        return
      }
      default:
        if (!!WN.sendBeacon) {
          navigator.sendBeacon(uri, body)
        } else {
          let image: HTMLImageElement | null = new Image()
          image.src = `${uri}?body=${body}`
          image.onload = () => image = null // 防止内存泄漏
        }
    }
  }
}