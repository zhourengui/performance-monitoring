import { PerformanceEntryEncapsulation } from "../types/types";
import { cls } from "../utils/metrics";

/**
 * https://web.dev/cls/
 * https://requestmetrics.com/web-performance/cumulative-layout-shift
 * 
 * Cumulative Layout Shift (CLS), 
 * sometimes known as jank, 
 * is a measurement of how much elements move due to late-rendered content.
 * You can think of it as a measurement of layout instability. 
 * It has become a common problem for many websites due to third-party scripts and tag management and its one of the new Core Web Vital metrics.
 * 
 * LayoutShiftObserverCallback
 * Detects new layout shift occurrences and updates the
 * Only count layout shifts without recent user input.
 * 检测新的布局偏移情况并更新
 * 仅在没有最近用户输入的情况下计算布局转移。
 * 
 * What is a good CLS score?
 * To provide a good user experience, sites should strive to have a CLS score of 0.1 or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.
 * 为了提供良好的用户体验，网站应努力使CLS得分不超过0.1。为确保您达到大多数用户的这一目标，衡量移动设备和台式机设备的页面加载量的第75个百分位数是一个很好的衡量标准。
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns
 */
export const initLayoutShift = (entries: Array<PerformanceEntryEncapsulation>) => {
  const lastEntry = entries.pop()
  if (lastEntry && !lastEntry.hadRecentInput && lastEntry.value) {
    cls.value += lastEntry.value
  }
}