import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton, Spinner } from '@0xsequence/design-system';
import { InfiniteScroll } from '../../InfiniteScroll.js';
import { NoResults } from '../../NoResults.js';
import { CollectionTile } from './CollectionTile.js';
export const CollectionsTab = ({ displayedCollectibleBalances, fetchMoreCollectibleBalances, hasMoreCollectibleBalances, isFetchingMoreCollectibleBalances, isFetchingInitialBalances, onTokenClick }) => {
    const hasBalances = displayedCollectibleBalances && displayedCollectibleBalances.length > 0;
    return (_jsxs("div", { children: [_jsx("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(3, 1fr)`, width: '100%' }, children: isFetchingInitialBalances
                    ? Array.from({ length: 6 }).map((_, i) => _jsx(Skeleton, { className: "w-full aspect-square rounded-lg" }, i))
                    : hasBalances && (_jsx(InfiniteScroll, { onLoad: fetchMoreCollectibleBalances, hasMore: hasMoreCollectibleBalances, children: displayedCollectibleBalances.map((balance, index) => (_jsx(CollectionTile, { balance: balance, onTokenClick: onTokenClick }, index))) })) }), !isFetchingInitialBalances && !hasBalances && !isFetchingMoreCollectibleBalances && _jsx(NoResults, {}), isFetchingMoreCollectibleBalances && _jsx(Spinner, { className: "flex justify-self-center mt-3" })] }));
};
//# sourceMappingURL=CollectionsTab.js.map