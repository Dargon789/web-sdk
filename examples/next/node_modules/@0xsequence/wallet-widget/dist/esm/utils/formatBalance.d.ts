import type { TokenBalance } from '@0xsequence/indexer';
import { type Chain } from 'viem';
import type { TokenBalanceWithDetails } from './tokens.js';
interface NativeTokenInfo {
    chainId: number;
    name: string;
    symbol: string;
    logoURI: string;
    decimals: number;
    blockExplorerUrl?: string;
    blockExplorerName?: string;
}
interface TokenInfo {
    name: string;
    logo?: string;
    symbol?: string;
    isNativeToken: boolean;
    nativeTokenInfo?: NativeTokenInfo;
    displayBalance: string;
    fiatBalance: string;
}
export declare const formatTokenInfo: (balance: TokenBalanceWithDetails | undefined, fiatSign: string, chains: readonly [Chain, ...Chain[]]) => TokenInfo;
export declare const formatFiatBalance: (balance: number, price: number, decimals: number, fiatSign: string) => string;
export declare const formatTokenUnits: (token: TokenBalance | undefined, chains: readonly [Chain, ...Chain[]]) => string;
export declare const decimalsToWei: (balance: number, decimals: number) => number;
export {};
//# sourceMappingURL=formatBalance.d.ts.map