export const truncateAddress = (address: string, minPrefix: number = 20, minSuffix: number = 3): string => {
  if (minPrefix + minSuffix >= 40) {
    return address
  } else {
    return `${address.substring(0, 2 + minPrefix)}…${address.substring(address.length - minSuffix)}`
  }
}

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
