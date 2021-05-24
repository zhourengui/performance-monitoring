import { bytes2mb } from "../utils/helper"
import { WN } from "../constants"
import type { StorageOpt } from "../types/types"

/**
  * Record local cache information
*/

export const recordingStorage = async (): Promise<StorageOpt> => {
  const { quota, usage, usageDetails } = await WN.storage.estimate() as StorageOpt
  let res = {
    quota: bytes2mb(quota || 0),
    usage: bytes2mb(usage || 0),
    usageDetails,
  }
  if (res.usageDetails) {
    Object.keys(res.usageDetails || {}).forEach(key => res.usageDetails[key] = bytes2mb(res.usageDetails[key]))
  }
  return res
}