import type { FC } from 'react';
import type { TokenBalanceWithDetails } from '../../../utils/tokens.js';
interface CoinsTabProps {
    displayedCoinBalances: TokenBalanceWithDetails[] | undefined;
    fetchMoreCoinBalances: () => Promise<any>;
    hasMoreCoinBalances: boolean;
    isFetchingMoreCoinBalances: boolean;
    isFetchingInitialBalances: boolean;
    onTokenClick: (token: TokenBalanceWithDetails) => void;
    includeUserAddress?: boolean;
}
export declare const CoinsTab: FC<CoinsTabProps>;
export {};
//# sourceMappingURL=CoinsTab.d.ts.map