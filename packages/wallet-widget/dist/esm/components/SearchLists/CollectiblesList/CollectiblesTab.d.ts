import type { FC } from 'react';
import type { TokenBalanceWithDetails } from '../../../utils/index.js';
interface CollectiblesTabProps {
    displayedCollectibleBalances: TokenBalanceWithDetails[] | undefined;
    fetchMoreCollectibleBalances: () => Promise<any>;
    hasMoreCollectibleBalances: boolean;
    isFetchingMoreCollectibleBalances: boolean;
    isFetchingInitialBalances: boolean;
    onTokenClick: (token: TokenBalanceWithDetails) => void;
}
export declare const CollectiblesTab: FC<CollectiblesTabProps>;
export {};
//# sourceMappingURL=CollectiblesTab.d.ts.map