import { config } from "../config/config"
import { D } from "../constants"
import { NavigatorOpt, TimingOpt } from "../types/types"
import { pushTask } from "./helper"
import { getNavigatorInformation } from "./navigator-information"
import { getVitalsScore } from "./vitals-score"

/**
 * Sends the User timing measure to analyticsTracker
 * Do not report specific data when the page is hidden
 * @param {string} measureName
 * @param {number} duration
 * @param {object} eventProperties
 */
export const reportPerformance = (
  data: TimingOpt | number | NavigatorOpt | any,
  measureName: string,
  eventProperties?: object
): void => {
  pushTask(() => {
    if (D.visibilityState === "hidden" && !measureName.includes("Final") || !config.analyticsTracker) return
    config.analyticsTracker({
      metricName: measureName,
      data,
      eventProperties,
      navigatorInformation: getNavigatorInformation(),
      vitalsScore: getVitalsScore(measureName, data as number)
    })
  })
}