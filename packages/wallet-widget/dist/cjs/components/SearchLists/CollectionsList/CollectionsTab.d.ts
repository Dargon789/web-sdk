import type { ContractInfo } from '@0xsequence/indexer';
import type { FC } from 'react';
interface CollectionsTabProps {
    displayedCollectibleBalances: ContractInfo[] | undefined;
    fetchMoreCollectibleBalances: () => Promise<any>;
    hasMoreCollectibleBalances: boolean;
    isFetchingMoreCollectibleBalances: boolean;
    isFetchingInitialBalances: boolean;
    onTokenClick: (token: ContractInfo) => void;
}
export declare const CollectionsTab: FC<CollectionsTabProps>;
export {};
//# sourceMappingURL=CollectionsTab.d.ts.map