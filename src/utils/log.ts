import { config } from "../config/config"
import { roundByTwo } from "./helper"
import { reportPerformance } from "./report-performance"

/**
 * Sends the metric to an external tracking service
 * 将指标发送到外部跟踪服务
 * @param {string} measureName 
 * @param {{[key: string]: any}} metric 
 * @param {object} customProperties 
 */
export const logData = (
  measureName: string,
  metric: { [key: string]: any },
  customProperties?: object
): void => {
  Object.keys(metric).forEach((key) => {
    if (typeof metric[key] === 'number') {
      metric[key] = roundByTwo(metric[key]);
    }
  });
  reportPerformance(metric, measureName, customProperties);
};

/**
 * Dispatches the metric duration into internal logs
 * and the external time tracking service.
 * @param {string} measureName
 * @param {number} duration
 * @param {object} customProperties
 */
export const logMetric = (
  measureName: string,
  duration: number,
  customProperties?: object
) => {
  const duration2decimal = roundByTwo(duration)
  if (duration2decimal <= (config.maxTime as number)) {
    reportPerformance(duration, measureName, customProperties)
  }
}