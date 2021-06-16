import { AskLevel } from "../types/types"
import { config } from "../config/config"
import { W } from "../constants"
import record from "../rrweb/record"
import { pack } from "../rrweb/packer"
import { eventWithTime } from "../rrweb/types"
import { warn } from "../utils/console"

/**
 * Error Trap
 */

export default class ErrorTrace {
  private static instance: ErrorTrace | null = null
  private eventsMatrix: Array<Array<eventWithTime>> = [[]]

  private constructor() {
    this.globalErrorTrace()
    this.networkErrorTrace()
    this.promiseErrorTrace()
    this.iframeErrorTrace()
    record({
      ...config.recordOptions,
      emit: (event, isCheckout) => {
        if (isCheckout) {
          this.eventsMatrix.push([]);
        }
        const lastEvents = this.eventsMatrix[this.eventsMatrix.length - 1];
        lastEvents.push(event);
      },
      recordLog: false,
      checkoutEveryNth: 10,
      packFn: pack,
    })
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

      warn({
        source,
        lineno,
        colno,
        error,
      })

      const len = this.eventsMatrix.length;

      if (config.errEventRoute && len >= 2) {
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
          warn(e.target)
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
      warn(e.reason)
      return true
    })
  }

  private iframeErrorTrace(): void {
    const frames = W.frames
    for (let i = 0; i < frames.length; i++) {
      frames[i].addEventListener(
        "error",
        (e: ErrorEvent) => {
          warn(e)
        },
        true
      )
      frames[i].addEventListener(
        "unhandledrejection",
        (e) => {
          warn(e)
        },
        true
      )
    }
  }
}
