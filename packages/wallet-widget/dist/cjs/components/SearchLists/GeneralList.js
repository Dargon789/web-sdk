"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const ethers_1 = require("ethers");
const fuse_js_1 = __importDefault(require("fuse.js"));
const micro_observables_1 = require("micro-observables");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const index_js_1 = require("../../hooks/index.js");
const useGetAllCollections_js_1 = require("../../hooks/useGetAllCollections.js");
const useNavigationHeader_js_1 = require("../../hooks/useNavigationHeader.js");
const index_js_2 = require("../../utils/index.js");
const FilterMenu_js_1 = require("../Filter/FilterMenu.js");
const index_js_3 = require("../TransactionHistoryList/index.js");
const CollectiblesTab_js_1 = require("./CollectiblesList/CollectiblesTab.js");
const CollectionsTab_js_1 = require("./CollectionsList/CollectionsTab.js");
const CoinsTab_js_1 = require("./TokenList/CoinsTab.js");
const TOKEN_PAGE_SIZE = 10;
const COLLECTIBLE_PAGE_SIZE = 9;
const COLLECTION_PAGE_SIZE = 9;
const GeneralList = ({ variant = 'default' }) => {
    const { setNavigation } = (0, index_js_1.useNavigation)();
    const { chains } = (0, wagmi_1.useConfig)();
    const { fiatCurrency, allNetworks, hideUnlistedTokens, selectedNetworksObservable, selectedWalletsObservable, showCollectionsObservable } = (0, index_js_1.useSettings)();
    const { wallets } = (0, connect_1.useWallets)();
    const { search, selectedTab, setSearch, setSelectedTab } = (0, useNavigationHeader_js_1.useNavigationHeader)();
    const selectedNetworks = (0, micro_observables_1.useObservable)(selectedNetworksObservable);
    const selectedWallets = (0, micro_observables_1.useObservable)(selectedWalletsObservable);
    const showCollections = (0, micro_observables_1.useObservable)(showCollectionsObservable);
    (0, react_1.useEffect)(() => {
        if (variant === 'send') {
            setSelectedTab('tokens');
        }
        return () => {
            setSearch('');
        };
    }, [variant]);
    const activeWallet = wallets.find(wallet => wallet.isActive);
    const { data: tokenBalancesData = [], isLoading: isLoadingTokenBalances } = (0, index_js_1.useGetAllTokensDetails)({
        accountAddresses: variant === 'default' ? selectedWallets.map(wallet => wallet.address) : [activeWallet?.address || ''],
        chainIds: variant === 'default' ? selectedNetworks : allNetworks,
        hideUnlistedTokens
    });
    const { data: collectionsData = [] } = (0, useGetAllCollections_js_1.useGetAllCollections)({
        accountAddresses: variant === 'default' ? selectedWallets.map(wallet => wallet.address) : [activeWallet?.address || ''],
        chainIds: variant === 'default' ? selectedNetworks : allNetworks,
        hideUnlistedTokens
    });
    const collectionsDataWithDetails = collectionsData.map(collection => ({
        ...collection,
        _type: 'collection'
    }));
    const coinBalancesUnordered = tokenBalancesData?.filter(b => b.contractType === 'ERC20' || (0, connect_1.compareAddress)(b.contractAddress, zeroAddress)) || [];
    const { data: coinPrices = [], isLoading: isLoadingCoinPrices } = (0, hooks_1.useGetCoinPrices)(coinBalancesUnordered.map(token => ({
        chainId: token.chainId,
        contractAddress: token.contractAddress
    })));
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = (0, hooks_1.useGetExchangeRate)(fiatCurrency.symbol);
    const coinBalances = coinBalancesUnordered.sort((a, b) => {
        const fiatA = (0, index_js_2.computeBalanceFiat)({
            balance: a,
            prices: coinPrices,
            conversionRate,
            decimals: a.contractInfo?.decimals || 18
        });
        const fiatB = (0, index_js_2.computeBalanceFiat)({
            balance: b,
            prices: coinPrices,
            conversionRate,
            decimals: b.contractInfo?.decimals || 18
        });
        return Number(fiatB) - Number(fiatA);
    });
    const coinBalancesWithPrice = coinBalances.map(balance => {
        const matchingPrice = coinPrices.find(price => {
            const isSameChainAndAddress = price.token.chainId === balance.chainId && price.token.contractAddress === balance.contractAddress;
            const isTokenIdMatch = price.token.tokenId === balance.tokenID || !(balance.contractType === 'ERC721' || balance.contractType === 'ERC1155');
            return isSameChainAndAddress && isTokenIdMatch;
        });
        const priceValue = (matchingPrice?.price?.value || 0) * conversionRate;
        const priceCurrency = fiatCurrency.symbol;
        return {
            ...balance,
            price: { value: priceValue, currency: priceCurrency },
            _type: 'coin'
        };
    });
    const isLoading = isLoadingTokenBalances || isLoadingCoinPrices || isLoadingConversionRate;
    const collectibleBalancesUnordered = tokenBalancesData?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155') || [];
    const collectibleBalances = collectibleBalancesUnordered.sort((a, b) => {
        return Number(b.balance) - Number(a.balance);
    });
    const collectibleBalancesWithPrice = collectibleBalances.map(balance => ({
        ...balance,
        price: {
            value: 0,
            currency: 'USD'
        },
        _type: 'collectible'
    }));
    const fuseOptions = {
        threshold: 0.1,
        ignoreLocation: true,
        keys: [
            // Coin: Name
            {
                name: 'coinName',
                getFn: (item) => {
                    if (item._type === 'coin') {
                        if ((0, connect_1.compareAddress)(item.contractAddress, ethers_1.ethers.ZeroAddress)) {
                            const nativeTokenInfo = (0, connect_1.getNativeTokenInfoByChainId)(item.chainId, chains);
                            return nativeTokenInfo.name;
                        }
                        return item.contractInfo?.name || 'Unknown';
                    }
                }
            },
            // Collectible: Name
            {
                name: 'collectibleName',
                getFn: (item) => {
                    if (item._type === 'collectible') {
                        return item.tokenMetadata?.name || '';
                    }
                }
            },
            // Collectible: Collection Name
            {
                name: 'collectionName',
                getFn: (item) => {
                    if (item._type === 'collectible') {
                        return item.contractInfo?.name || '';
                    }
                    return '';
                }
            },
            // Collection: Name
            {
                name: 'collectionName',
                getFn: (item) => {
                    if (item._type === 'collection') {
                        return item.contractInfo?.name || '';
                    }
                    return '';
                }
            },
            // Transaction: Contract Name
            {
                name: 'contractName',
                getFn: (item) => {
                    if (item._type === 'transaction') {
                        return item.transfers?.map((transfer) => transfer.contractInfo?.name).join(', ') || '';
                    }
                    return '';
                }
            },
            // Transaction: Token Symbol
            {
                name: 'tokenSymbol',
                getFn: (item) => {
                    if (item._type === 'transaction') {
                        const hasNativeToken = item.transfers?.some((transfer) => (0, connect_1.compareAddress)(transfer.contractInfo?.address || '', ethers_1.ethers.ZeroAddress));
                        if (hasNativeToken) {
                            const nativeTokenInfo = (0, connect_1.getNativeTokenInfoByChainId)(item.chainId, chains);
                            return nativeTokenInfo.symbol;
                        }
                        return item.transfers?.map((transfer) => transfer.contractInfo?.symbol).join(', ') || '';
                    }
                    return '';
                }
            },
            // Transaction: Collectible Name
            {
                name: 'collectibleName',
                getFn: (item) => {
                    if (item._type === 'transaction') {
                        return (item.transfers
                            ?.map((transfer) => {
                            return Object.values(transfer.tokenMetadata || {})
                                .map(tokenMetadata => tokenMetadata?.name)
                                .join(', ');
                        })
                            .join(', ') || '');
                    }
                    return '';
                }
            },
            // Transaction: Date
            {
                name: 'date',
                getFn: (item) => {
                    if (item._type === 'transaction') {
                        const date = new Date(item.timestamp);
                        const day = date.getDate();
                        const month = date.toLocaleString('en-US', { month: 'long' });
                        const year = date.getFullYear();
                        return `
              ${day} ${month} ${year}
              ${day} ${year} ${month}
              ${month} ${day} ${year}
              ${month} ${year} ${day}
              ${year} ${day} ${month}
              ${year} ${month} ${day}
            `;
                    }
                    return '';
                }
            }
        ]
    };
    const { data: transactionHistoryData = [], isLoading: isLoadingTransactionHistory } = (0, hooks_1.useGetTransactionHistorySummary)({
        accountAddresses: selectedWallets.map(wallet => wallet.address),
        chainIds: selectedNetworks
    });
    const transactionHistory = transactionHistoryData.map(transaction => ({
        ...transaction,
        _type: 'transaction'
    }));
    // combinedBalances is used for search
    const combinedBalances = [
        ...coinBalancesWithPrice,
        ...collectibleBalancesWithPrice,
        ...collectionsDataWithDetails,
        ...transactionHistory
    ];
    const fuse = (0, react_1.useMemo)(() => {
        return new fuse_js_1.default(combinedBalances, fuseOptions);
    }, [combinedBalances]);
    const searchResults = (0, react_1.useMemo)(() => {
        if (!search.trimStart()) {
            return [];
        }
        return fuse.search(search).map(result => result.item);
    }, [search, fuse]);
    // infinite scroll for tokens
    const { data: infiniteBalancesTokens, fetchNextPage: fetchMoreBalancesTokens, hasNextPage: hasMoreBalancesTokens, isFetching: isFetchingMoreBalancesTokens } = (0, index_js_1.useGetMoreBalances)(coinBalancesWithPrice, TOKEN_PAGE_SIZE, { enabled: search.trim() === '' });
    const { data: infiniteSearchBalancesTokens, fetchNextPage: fetchMoreSearchBalancesTokens, hasNextPage: hasMoreSearchBalancesTokens, isFetching: isFetchingMoreSearchBalancesTokens } = (0, index_js_1.useGetMoreBalances)(searchResults.filter(item => item._type === 'coin'), TOKEN_PAGE_SIZE, {
        enabled: search.trim() !== ''
    });
    // infinite scroll for collectibles
    const { data: infiniteBalancesCollectibles, fetchNextPage: fetchMoreBalancesCollectibles, hasNextPage: hasMoreBalancesCollectibles, isFetching: isFetchingMoreBalancesCollectibles } = (0, index_js_1.useGetMoreBalances)(collectibleBalancesWithPrice, COLLECTIBLE_PAGE_SIZE, { enabled: search.trim() === '' });
    const { data: infiniteSearchBalancesCollectibles, fetchNextPage: fetchMoreSearchBalancesCollectibles, hasNextPage: hasMoreSearchBalancesCollectibles, isFetching: isFetchingMoreSearchBalancesCollectibles } = (0, index_js_1.useGetMoreBalances)(searchResults.filter(item => item._type === 'collectible'), COLLECTIBLE_PAGE_SIZE, {
        enabled: search.trim() !== ''
    });
    // infinite scroll for collections
    const { data: infiniteBalancesCollections, fetchNextPage: fetchMoreBalancesCollections, hasNextPage: hasMoreBalancesCollections, isFetching: isFetchingMoreBalancesCollections } = (0, index_js_1.useGetMoreBalances)(collectionsDataWithDetails, COLLECTION_PAGE_SIZE, { enabled: search.trim() === '' });
    const { data: infiniteSearchBalancesCollections, fetchNextPage: fetchMoreSearchBalancesCollections, hasNextPage: hasMoreSearchBalancesCollections, isFetching: isFetchingMoreSearchBalancesCollections } = (0, index_js_1.useGetMoreBalances)(searchResults.filter(item => item._type === 'collection'), COLLECTION_PAGE_SIZE, {
        enabled: search.trim() !== ''
    });
    const handleTokenClickDefault = (balance) => {
        setNavigation({
            location: 'coin-details',
            params: {
                contractAddress: balance.contractAddress,
                chainId: balance.chainId,
                accountAddress: balance.accountAddress
            }
        });
    };
    const handleTokenClickSend = (token) => {
        setNavigation({
            location: 'send-coin',
            params: {
                chainId: token.chainId,
                contractAddress: token.contractAddress
            }
        });
    };
    const handleCollectibleClickDefault = (balance) => {
        setNavigation({
            location: 'collectible-details',
            params: {
                contractAddress: balance.contractAddress,
                chainId: balance.chainId,
                tokenId: balance.tokenID || '',
                accountAddress: balance.accountAddress
            }
        });
    };
    const handleCollectibleClickSend = (token) => {
        setNavigation({
            location: 'send-collectible',
            params: {
                chainId: token.chainId,
                contractAddress: token.contractAddress,
                tokenId: token.tokenID || ''
            }
        });
    };
    const handleCollectionClick = (collection) => {
        setNavigation({
            location: 'collection-details',
            params: {
                contractAddress: collection.address,
                chainId: collection.chainId
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.Root, { className: "w-full", value: selectedTab, onValueChange: value => setSelectedTab(value), children: [(0, jsx_runtime_1.jsxs)("div", { className: "sticky top-0 z-20 bg-background-primary shadow-sm gap-4", children: [variant === 'default' ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full relative", children: [(0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsList, { className: "px-4", children: [(0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "tokens", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "px-4", variant: "medium", color: selectedTab === 'tokens' ? 'primary' : 'muted', children: "Coins" }), selectedTab === 'tokens' && (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] }), (0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "collectibles", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "px-4", variant: "medium", color: selectedTab === 'collectibles' ? 'primary' : 'muted', children: "Collectibles" }), selectedTab === 'collectibles' && (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] }), (0, jsx_runtime_1.jsxs)(design_system_1.TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "history", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "px-4", variant: "medium", color: selectedTab === 'history' ? 'primary' : 'muted', children: "Transactions" }), selectedTab === 'history' && (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] })] }), (0, jsx_runtime_1.jsx)(design_system_1.Divider, { className: "absolute bottom-0 my-0 w-full" })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: (0, design_system_1.cn)('flex flex-col px-4 gap-4', `${variant === 'send' && 'pt-4'}`), children: [variant === 'send' && ((0, jsx_runtime_1.jsx)(design_system_1.TabsHeader, { tabs: [
                                        { label: 'Coins', value: 'tokens' },
                                        { label: 'Collectibles', value: 'collectibles' }
                                    ], value: selectedTab })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(design_system_1.TextInput, { name: "search", leftIcon: design_system_1.SearchIcon, value: search, onChange: ev => setSearch(ev.target.value), placeholder: "Search your wallet" }) })] })), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col p-4", children: variant === 'default' && (0, jsx_runtime_1.jsx)(FilterMenu_js_1.FilterMenu, { filterMenuType: selectedTab }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-4 pt-0", children: [(0, jsx_runtime_1.jsx)(design_system_1.TabsContent, { value: "tokens", children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CoinsTab_js_1.CoinsTab, { displayedCoinBalances: search ? infiniteSearchBalancesTokens?.pages.flat() : infiniteBalancesTokens?.pages.flat(), fetchMoreCoinBalances: search ? fetchMoreSearchBalancesTokens : fetchMoreBalancesTokens, hasMoreCoinBalances: search ? hasMoreSearchBalancesTokens : hasMoreBalancesTokens, isFetchingMoreCoinBalances: search ? isFetchingMoreSearchBalancesTokens : isFetchingMoreBalancesTokens, isFetchingInitialBalances: isLoading, onTokenClick: variant === 'default' ? handleTokenClickDefault : handleTokenClickSend, includeUserAddress: variant === 'default' }) }) }), (0, jsx_runtime_1.jsx)(design_system_1.TabsContent, { value: "collectibles", children: (0, jsx_runtime_1.jsx)("div", { children: showCollections ? ((0, jsx_runtime_1.jsx)(CollectionsTab_js_1.CollectionsTab, { displayedCollectibleBalances: search ? infiniteSearchBalancesCollections?.pages.flat() : infiniteBalancesCollections?.pages.flat(), fetchMoreCollectibleBalances: search ? fetchMoreSearchBalancesCollections : fetchMoreBalancesCollections, hasMoreCollectibleBalances: search ? hasMoreSearchBalancesCollections : hasMoreBalancesCollections, isFetchingMoreCollectibleBalances: search ? isFetchingMoreSearchBalancesCollections : isFetchingMoreBalancesCollections, isFetchingInitialBalances: isLoading, onTokenClick: handleCollectionClick })) : ((0, jsx_runtime_1.jsx)(CollectiblesTab_js_1.CollectiblesTab, { displayedCollectibleBalances: search ? infiniteSearchBalancesCollectibles?.pages.flat() : infiniteBalancesCollectibles?.pages.flat(), fetchMoreCollectibleBalances: search ? fetchMoreSearchBalancesCollectibles : fetchMoreBalancesCollectibles, hasMoreCollectibleBalances: search ? hasMoreSearchBalancesCollectibles : hasMoreBalancesCollectibles, isFetchingMoreCollectibleBalances: search ? isFetchingMoreSearchBalancesCollectibles : isFetchingMoreBalancesCollectibles, isFetchingInitialBalances: isLoading, onTokenClick: variant === 'default' ? handleCollectibleClickDefault : handleCollectibleClickSend })) }) }), (0, jsx_runtime_1.jsx)(design_system_1.TabsContent, { value: "history", children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(index_js_3.TransactionHistoryList, { transactions: search
                                        ? searchResults.filter(item => item._type === 'transaction')
                                        : transactionHistory, isLoading: isLoadingTransactionHistory, isFetchingNextPage: false }) }) })] })] }) }));
};
exports.GeneralList = GeneralList;
//# sourceMappingURL=GeneralList.js.map