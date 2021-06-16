import { ResourceTime } from "../types/types";

// first-pait
export const fp = {
  value: 0
}

// first-contentful-paint
export const fcp = {
  value: 0
}

// block-time
export const tbt = {
  value: 0
}

// largest-contentful-paint
export const lcp = {
  value: 0
}

// resource-time
export const rt: { value: ResourceTime } = {
  value: {
    beacon: 0,
    css: 0,
    fetch: 0,
    img: 0,
    other: 0,
    script: 0,
    total: 0,
    xmlhttprequest: 0,
  },
};

// cumulative-layout-shift
export const cls = {
  value: 0
}