import { recordOptions } from "../rrweb/types";

export interface PerformanceMonitoringOptions {
  isObserverResourceTiming?: boolean,
  isObserverElementTiming?: boolean,
  maxTime?: number,
  captureError?: boolean,
  reportData?: ReportDataAchieve | null,
  fetchDomain?: string,
  errLogRoute?: string,
  errEventRoute?: string,
  logRoute?: string,
  analyticsTracker?: (options: AnalyticsTrackerOptions) => void,
  recordOptions?: recordOptions<any>
}

export interface StorageOpt {
  quota?: number | undefined,
  usage?: number | undefined,
  usageDetails: { [key: string]: any }
}

export interface TimingOpt {
  // The time to initiate the network is from AppCache to ResponseEnd
  // 发起网络的时间是从AppCache到ResponseEnd
  fetchTime: number,
  // Response time
  // 响应时间
  workerTime: number,
  // Network request time
  // 网络请求时间
  networkTime: number,
  // Server response time
  // 服务器响应时间
  downloadTime: number,
  // The time when the browser received the first byte of the server
  // 浏览器接收服务端的第一个字节的时间
  timeToFirstByte: number,
  // Request header size
  // 请求头大小
  headerSize: number,
  // dns resolution time
  // dns解析时间
  dnsLookupTime: number,
  // tcp connection time
  // tcp连接时间
  tcpTime: number,
  // Blank screen time
  // 白屏时间
  firstPaintTime: number,
  // dom rendering time
  // dom渲染时间
  domRenderTime: number,
  // onload time
  // onload时间
  onloadTime: number,
  // dom parsing time
  // dom解析时间
  domParseTime: number,
}

export interface NavigatorOpt {
  // 浏览器信息
  // Browser information
  userAgent: string,
  // User's internet speed
  // 用户的网速
  connection: {
    downlink?: number,
    effectiveType?: EffectiveType,
    rtt?: number,
    saveData?: boolean,
    [key: string]: unknown,
    bandwidth?: string
  }
}

export interface ReportDataAchieve {
  fetch: (label: AskLevel, body: string, uri: string) => void
}

export interface PerformanceObservers {
  [eventType: string]: PerformanceObserver | null;
}

export enum AskLevel {
  URGENT = 1,
  IDLE = 2,
}

export type PerformanceObserverEventType =
  | "paint"
  | "longtask"
  | "first-input"
  | "largest-contentful-paint"
  | "resource"
  | "layout-shift"
  | "element"

export type VitalsScore = 'good' | 'needsImprovement' | 'poor' | null;

export interface AnalyticsTrackerOptions {
  metricName: string;
  data: TimingOpt | number | NavigatorOpt;
  eventProperties: object | undefined;
  navigatorInformation: unknown;
  vitalsScore: VitalsScore;
}

export interface NavigatorInformation {
  deviceMemory?: number;
  hardwareConcurrency?: number;
  isLowEndDevice?: boolean;
  isLowEndExperience?: boolean;
  serviceWorkerStatus?: 'controlled' | 'supported' | 'unsupported';
}

export type EffectiveType =
  | '2g'
  | '3g'
  | '4g'
  | '5g'
  | 'slow-2g'
  | 'lte';

export interface PerformanceEntryEncapsulation extends PerformanceEntry {
  identifier: any;
  value?: number | undefined;
  hadRecentInput?: PerformanceEntryEncapsulation | undefined;
  initiatorType?: string;
  decodedBodySize?: number;
  processingStart: DOMHighResTimeStamp;
  target?: Node;
  renderTime?: number
}

export interface ResourceTime {
  beacon: number;
  css: number;
  fetch: number;
  img: number;
  other: number;
  script: number;
  total: number;
  xmlhttprequest: number;
  [key: string]: number
}