import { LocalStorageKey } from '../constants'

const WAGMI_PREFIX = 'wagmi'

// Get a wagmi prefixed and stringified value from storage
export const getStorageItem = (key: LocalStorageKey) => {
  try {
    const json = localStorage.getItem(`${WAGMI_PREFIX}.${key}`)

    if (!json) {
      return undefined
    }

    const value = JSON.parse(json)

    return value || undefined
  } catch (err) {
    return undefined
  }
}

// Set a wagmi prefixed and stringified value to storage
export const setStorageItem = (key: LocalStorageKey, value: any) => {
  try {
    localStorage.setItem(`${WAGMI_PREFIX}.${key}`, JSON.stringify(value))
  } catch (err) {
    // Do nothing
  }
}
