import { AskLevel } from "../types/types"
import { config } from "../config/config"
import { C, W } from "../constants"
import { record, pack } from "rrweb"
import { eventWithTime } from "rrweb/typings/types"
/**
 * Error Trap
 */

export default class ErrorTrace {
  private static instance: ErrorTrace | null = null
  private eventsMatrix: Array<Array<eventWithTime>> = [[]]

  private constructor() {
    record({
      emit: (event, isCheckout) => {
        if (isCheckout) {
          this.eventsMatrix.push([]);
        }
        const lastEvents = this.eventsMatrix[this.eventsMatrix.length - 1];
        lastEvents.push(event);
      },
      recordLog: true,
      checkoutEveryNth: 10,
      packFn: pack,
    })

    setTimeout(() => {
      this.globalErrorTrace()
      this.networkErrorTrace()
      this.promiseErrorTrace()
      this.iframeErrorTrace()
    }, 100)
  }

  public static getInstance(): ErrorTrace {
    if (!this.instance) {
      this.instance = new ErrorTrace()
    }
    return this.instance
  }

  /**
   * Globally catch synchronous or asynchronous errors
   * 捕获异常的能力比try-catch稍微强点，无论是异步还是非异步，onerror都能捕获到运行时错误，返回true就不回报红
   * 当时当<img src="" />这种情况是捕获不到的
   * 使用未使用的变量
   */
  private globalErrorTrace(): void {
    W.onerror = (
      event: Event | string,
      source?: string,
      lineno?: number,
      colno?: number,
      error?: Error
    ) => {
      C.log("❌全局捕获错误", {
        source,
        lineno,
        colno,
        error,
      })

      if (config.errEventRoute) {
        const len = this.eventsMatrix.length;
        const events = this.eventsMatrix[len - 2].concat(this.eventsMatrix[len - 1]);
        config.reportData?.fetch(
          AskLevel.IDLE,
          JSON.stringify({ events }),
          config.errEventRoute
        )
      }

      if (config.errLogRoute) {
        config.reportData?.fetch(
          AskLevel.IDLE,
          JSON.stringify({
            source,
            lineno,
            colno,
            error: JSON.stringify({
              message: error?.message,
              stack: error?.stack,
              name: error?.name,
            }),
          }),
          config.errLogRoute
        )
      }
      return true
    }
  }
  /**
   * Catch network errors
   * 图片加载失败等
   */
  private networkErrorTrace(): void {
    W.addEventListener(
      "error",
      (e: ErrorEvent) => {
        if (e.target !== W) {
          C.log("❌捕获网络错误", e.target)
        }
      },
      true
    )
  }

  /**
   * Catching Promise errors
   */
  private promiseErrorTrace(): void {
    window.addEventListener("unhandledrejection", (e) => {
      e.preventDefault()
      C.log("❌捕获promise错误", e.reason)
      return true
    })
  }

  private iframeErrorTrace(): void {
    const frames = W.frames
    for (let i = 0; i < frames.length; i++) {
      frames[i].addEventListener(
        "error",
        (e) => {
          C.log("❌捕获iframe错误", e)
        },
        true
      )
      frames[i].addEventListener(
        "unhandledrejection",
        (e) => {
          C.log("❌捕获iframe unhandledrejection错误", e)
        },
        true
      )
    }
  }
}
