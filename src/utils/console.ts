import { C } from "../constants"

const prefix = "mini-pm🐢："

export const log = (message: any, ...options: any[]): void => C.log(prefix, message, ...options)

export const warn = (message: any, ...options: any[]) => C.warn(prefix, message, ...options)

export const error = (message: any, ...options: any[]) => C.error(prefix, message, ...options)