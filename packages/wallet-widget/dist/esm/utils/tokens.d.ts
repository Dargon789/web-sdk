import type { Price, TokenPrice } from '@0xsequence/api';
import type { GetTransactionHistoryResponse, TokenBalance } from '@0xsequence/indexer';
import type { InfiniteData } from '@tanstack/react-query';
export interface TokenBalanceWithDetails extends TokenBalance {
    price?: Price;
    _type?: 'coin' | 'collectible' | 'collection';
}
export declare const getPercentageColor: (value: number) => "positive" | "negative" | "muted";
export declare const getPercentagePriceChange: (balance: TokenBalance, prices: TokenPrice[]) => any;
interface ComputeBalanceFiat {
    balance: TokenBalance;
    prices: TokenPrice[];
    decimals: number;
    conversionRate: number;
}
export declare const computeBalanceFiat: ({ balance, prices, decimals, conversionRate }: ComputeBalanceFiat) => string;
interface SortBalancesByTypeReturn {
    nativeTokens: TokenBalance[];
    erc20Tokens: TokenBalance[];
    collectibles: TokenBalance[];
}
export declare const sortBalancesByType: (balances: TokenBalance[]) => SortBalancesByTypeReturn;
export declare const flattenPaginatedTransactionHistory: (transactionHistoryData: InfiniteData<GetTransactionHistoryResponse> | undefined) => Transaction[];
export {};
//# sourceMappingURL=tokens.d.ts.map