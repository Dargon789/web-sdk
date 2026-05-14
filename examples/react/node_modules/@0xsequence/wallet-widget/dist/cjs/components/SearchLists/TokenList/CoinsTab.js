"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinsTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const InfiniteScroll_js_1 = require("../../InfiniteScroll.js");
const NoResults_js_1 = require("../../NoResults.js");
const CoinRow_js_1 = require("./CoinRow.js");
const CoinsTab = ({ displayedCoinBalances, fetchMoreCoinBalances, hasMoreCoinBalances, isFetchingMoreCoinBalances, isFetchingInitialBalances, onTokenClick, includeUserAddress = false }) => {
    const hasBalances = displayedCoinBalances && displayedCoinBalances.length > 0;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center gap-2", style: { marginBottom: '-8px' }, children: isFetchingInitialBalances
                    ? Array.from({ length: 7 }).map((_, i) => (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "w-full", style: { height: '68px' } }, i))
                    : hasBalances && ((0, jsx_runtime_1.jsx)(InfiniteScroll_js_1.InfiniteScroll, { onLoad: fetchMoreCoinBalances, hasMore: hasMoreCoinBalances, children: displayedCoinBalances.map((balance, index) => ((0, jsx_runtime_1.jsx)(CoinRow_js_1.CoinRow, { balance: balance, onTokenClick: onTokenClick, includeUserAddress: includeUserAddress }, index))) })) }), !isFetchingInitialBalances && !hasBalances && !isFetchingMoreCoinBalances && (0, jsx_runtime_1.jsx)(NoResults_js_1.NoResults, { hasInstructions: true }), isFetchingMoreCoinBalances && (0, jsx_runtime_1.jsx)(design_system_1.Spinner, { className: "flex self-center mt-3" })] }));
};
exports.CoinsTab = CoinsTab;
//# sourceMappingURL=CoinsTab.js.map