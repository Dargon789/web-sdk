import { compareAddress, formatDisplay, getNativeTokenInfoByChainId } from '@0xsequence/connect'
import type { TokenBalance } from '@0xsequence/indexer'
import { formatUnits, parseUnits, type Chain } from 'viem'
import { zeroAddress } from 'viem'

import type { TokenBalanceWithDetails } from './tokens.js'

interface NativeTokenInfo {
  chainId: number
  name: string
  symbol: string
  logoURI: string
  decimals: number
  blockExplorerUrl?: string
  blockExplorerName?: string
}

export interface TokenDisplayInfo {
  name: string
  logo?: string
  symbol?: string
  isNativeToken: boolean
  nativeTokenInfo?: NativeTokenInfo
  displayBalance: string
  fiatBalance: string
}

/**
 * Formats token balance and metadata for display.
 */
export const getTokenDisplayInfo = (
  balance: TokenBalanceWithDetails | undefined,
  fiatSign: string,
  chains: readonly [Chain, ...Chain[]]
): TokenDisplayInfo => {
  if (!balance) {
    return { isNativeToken: false, logo: '', name: '', symbol: '', displayBalance: '', fiatBalance: '' }
  }

  const isNativeToken = compareAddress(balance.contractAddress || '', zeroAddress)
  const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId || 1, chains)

  const name = isNativeToken ? nativeTokenInfo.name : balance.contractInfo?.name || 'Unknown'
  const symbol = isNativeToken ? nativeTokenInfo.symbol : balance.contractInfo?.symbol || ''
  const logo = isNativeToken ? nativeTokenInfo.logoURI : balance.contractInfo?.logoURI
  const decimals = (isNativeToken ? nativeTokenInfo.decimals : balance.contractInfo?.decimals) || 18

  const formattedAmount = formatUnits(BigInt(balance.balance || 0), decimals)
  const displayBalanceValue = formatDisplay(formattedAmount)
  const fiatValue = (balance.price?.value || 0) * Number(formattedAmount)

  return {
    isNativeToken,
    nativeTokenInfo,
    logo,
    name,
    symbol,
    displayBalance: `${displayBalanceValue} ${symbol}`.trim(),
    fiatBalance: `${fiatSign}${fiatValue.toFixed(2)}`
  }
}

/**
 * Formats a raw balance into a fiat currency string.
 */
export const formatFiatValue = (
  balance: string | number | bigint,
  price: number,
  decimals: number,
  fiatSign: string
): string => {
  if (!balance || Number(balance) === 0) {
    return ''
  }

  const formattedAmount = formatUnits(BigInt(balance.toString()), decimals || 18)
  const fiatValue = price * Number(formattedAmount)

  return `${fiatSign}${fiatValue.toFixed(2)}`
}

/**
 * Formats a TokenBalance into a human-readable unit string.
 */
export const formatTokenAmount = (
  token: TokenBalance | undefined,
  chains: readonly [Chain, ...Chain[]]
): string => {
  if (!token) {
    return ''
  }

  const isNativeToken = token.contractType === 'NATIVE'
  const decimals = isNativeToken
    ? getNativeTokenInfoByChainId(token.chainId, chains).decimals
    : token.contractInfo?.decimals || 18

  return formatUnits(BigInt(token.balance), decimals)
}

/**
 * Converts a decimal balance to its wei (base unit) representation.
 * Uses parseUnits for better precision over floating point math.
 */
export const toWei = (balance: string | number, decimals: number): bigint => {
  return parseUnits(balance.toString(), decimals)
}
