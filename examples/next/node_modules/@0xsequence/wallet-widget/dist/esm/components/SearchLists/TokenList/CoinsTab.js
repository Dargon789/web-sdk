import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton, Spinner } from '@0xsequence/design-system';
import { InfiniteScroll } from '../../InfiniteScroll.js';
import { NoResults } from '../../NoResults.js';
import { CoinRow } from './CoinRow.js';
export const CoinsTab = ({ displayedCoinBalances, fetchMoreCoinBalances, hasMoreCoinBalances, isFetchingMoreCoinBalances, isFetchingInitialBalances, onTokenClick, includeUserAddress = false }) => {
    const hasBalances = displayedCoinBalances && displayedCoinBalances.length > 0;
    return (_jsxs("div", { children: [_jsx("div", { className: "flex flex-col items-center gap-2", style: { marginBottom: '-8px' }, children: isFetchingInitialBalances
                    ? Array.from({ length: 7 }).map((_, i) => _jsx(Skeleton, { className: "w-full", style: { height: '68px' } }, i))
                    : hasBalances && (_jsx(InfiniteScroll, { onLoad: fetchMoreCoinBalances, hasMore: hasMoreCoinBalances, children: displayedCoinBalances.map((balance, index) => (_jsx(CoinRow, { balance: balance, onTokenClick: onTokenClick, includeUserAddress: includeUserAddress }, index))) })) }), !isFetchingInitialBalances && !hasBalances && !isFetchingMoreCoinBalances && _jsx(NoResults, { hasInstructions: true }), isFetchingMoreCoinBalances && _jsx(Spinner, { className: "flex self-center mt-3" })] }));
};
//# sourceMappingURL=CoinsTab.js.map