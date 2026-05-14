"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const InfiniteScroll_js_1 = require("../../InfiniteScroll.js");
const NoResults_js_1 = require("../../NoResults.js");
const CollectionTile_js_1 = require("./CollectionTile.js");
const CollectionsTab = ({ displayedCollectibleBalances, fetchMoreCollectibleBalances, hasMoreCollectibleBalances, isFetchingMoreCollectibleBalances, isFetchingInitialBalances, onTokenClick }) => {
    const hasBalances = displayedCollectibleBalances && displayedCollectibleBalances.length > 0;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(3, 1fr)`, width: '100%' }, children: isFetchingInitialBalances
                    ? Array.from({ length: 6 }).map((_, i) => (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "w-full aspect-square rounded-lg" }, i))
                    : hasBalances && ((0, jsx_runtime_1.jsx)(InfiniteScroll_js_1.InfiniteScroll, { onLoad: fetchMoreCollectibleBalances, hasMore: hasMoreCollectibleBalances, children: displayedCollectibleBalances.map((balance, index) => ((0, jsx_runtime_1.jsx)(CollectionTile_js_1.CollectionTile, { balance: balance, onTokenClick: onTokenClick }, index))) })) }), !isFetchingInitialBalances && !hasBalances && !isFetchingMoreCollectibleBalances && (0, jsx_runtime_1.jsx)(NoResults_js_1.NoResults, {}), isFetchingMoreCollectibleBalances && (0, jsx_runtime_1.jsx)(design_system_1.Spinner, { className: "flex justify-self-center mt-3" })] }));
};
exports.CollectionsTab = CollectionsTab;
//# sourceMappingURL=CollectionsTab.js.map