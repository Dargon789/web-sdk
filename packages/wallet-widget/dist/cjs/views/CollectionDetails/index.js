"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionDetails = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const react_1 = require("react");
const NoResults_js_1 = require("../../components/NoResults.js");
const CollectiblesTab_js_1 = require("../../components/SearchLists/CollectiblesList/CollectiblesTab.js");
const index_js_1 = require("../../hooks/index.js");
const CollectionDetails = ({ contractAddress, chainId }) => {
    const { setNavigation } = (0, index_js_1.useNavigation)();
    const { wallets } = (0, connect_1.useWallets)();
    const { hideUnlistedTokens } = (0, index_js_1.useSettings)();
    const [selectedTab, setSelectedTab] = (0, react_1.useState)('collectibles');
    const { data: collectibles, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, hooks_1.useGetTokenBalancesByContract)({
        chainIds: [chainId],
        filter: {
            accountAddresses: wallets.map(wallet => wallet.address),
            contractAddresses: [contractAddress],
            contractStatus: hideUnlistedTokens ? connect_1.ContractVerificationStatus.VERIFIED : connect_1.ContractVerificationStatus.ALL
        }
    });
    const onClickCollectible = (collectible) => {
        setNavigation({
            location: 'collectible-details',
            params: {
                contractAddress: collectible.contractAddress,
                chainId: collectible.chainId,
                tokenId: collectible.tokenID || '',
                accountAddress: collectible.accountAddress
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.Root, { className: "w-full", value: selectedTab, onValueChange: value => setSelectedTab(value), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full relative", children: [(0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsList, { className: "px-4", children: [(0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "collectibles", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "px-4", variant: "medium", color: selectedTab === 'collectibles' ? 'primary' : 'muted', children: "My Collectibles" }), selectedTab === 'collectibles' && (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] }), (0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "explore", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "px-4", variant: "medium", color: selectedTab === 'explore' ? 'primary' : 'muted', children: "Explore" }), selectedTab === 'explore' && (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "absolute bottom-0 my-0 w-full" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-4 pb-2 gap-4", children: [(0, jsx_runtime_1.jsx)(design_system_1.TabsContent, { value: "collectibles", children: (0, jsx_runtime_1.jsx)(CollectiblesTab_js_1.CollectiblesTab, { displayedCollectibleBalances: collectibles?.pages.flatMap(page => page.balances) || [], fetchMoreCollectibleBalances: fetchNextPage, hasMoreCollectibleBalances: hasNextPage, isFetchingMoreCollectibleBalances: isFetchingNextPage, isFetchingInitialBalances: isLoading, onTokenClick: onClickCollectible }) }), (0, jsx_runtime_1.jsx)(design_system_1.TabsContent, { value: "explore", children: (0, jsx_runtime_1.jsx)(NoResults_js_1.NoResults, { customText: "Coming soon" }) })] })] }) }));
};
exports.CollectionDetails = CollectionDetails;
//# sourceMappingURL=index.js.map