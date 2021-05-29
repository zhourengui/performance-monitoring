interface Navigator {
  sendBeacon: any
  connection?: any
  storage: any
  userAgent: string
  deviceMemory: number;
  hardwareConcurrency: number;
  serviceWorker?: {
    controller?: string;
  };
}

export const W = window
export const WP = W.performance
export const WN = W.navigator as any as Navigator
export const C = W.console
export const D = document