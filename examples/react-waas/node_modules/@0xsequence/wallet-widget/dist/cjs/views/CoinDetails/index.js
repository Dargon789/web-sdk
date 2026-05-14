"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinDetails = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = require("react");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const InfiniteScroll_js_1 = require("../../components/InfiniteScroll.js");
const NetworkBadge_js_1 = require("../../components/NetworkBadge.js");
const index_js_1 = require("../../components/TransactionHistoryList/index.js");
const index_js_2 = require("../../hooks/index.js");
const index_js_3 = require("../../utils/index.js");
const Skeleton_js_1 = require("./Skeleton.js");
const CoinDetails = ({ contractAddress, chainId, accountAddress = '' }) => {
    const { chains } = (0, wagmi_1.useConfig)();
    const { setNavigation } = (0, index_js_2.useNavigation)();
    const { fiatCurrency } = (0, index_js_2.useSettings)();
    const { setActiveWallet } = (0, connect_1.useWallets)();
    (0, react_1.useEffect)(() => {
        setActiveWallet(accountAddress);
    }, [accountAddress]);
    const isReadOnly = !chains.map(chain => chain.id).includes(chainId);
    const { data: dataTransactionHistory, isLoading: isLoadingTransactionHistory, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, hooks_1.useGetTransactionHistory)({
        chainId,
        accountAddresses: [accountAddress],
        contractAddresses: [contractAddress]
    });
    const transactionHistory = (0, index_js_3.flattenPaginatedTransactionHistory)(dataTransactionHistory);
    const { data: tokenBalance, isLoading: isLoadingCoinBalance } = (0, hooks_1.useGetSingleTokenBalance)({
        chainId,
        contractAddress,
        accountAddress: accountAddress || ''
    });
    const { data: dataCoinPrices, isLoading: isLoadingCoinPrices } = (0, hooks_1.useGetCoinPrices)([
        {
            chainId,
            contractAddress
        }
    ]);
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = (0, hooks_1.useGetExchangeRate)(fiatCurrency.symbol);
    const isLoading = isLoadingCoinBalance || isLoadingCoinPrices || isLoadingConversionRate;
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)(Skeleton_js_1.CoinDetailsSkeleton, { chainId: chainId, isReadOnly: isReadOnly });
    }
    const isNativeToken = (0, web_sdk_core_1.compareAddress)(contractAddress, viem_1.zeroAddress);
    const logo = isNativeToken ? (0, web_sdk_core_1.getNativeTokenInfoByChainId)(chainId, chains).logoURI : tokenBalance?.contractInfo?.logoURI;
    const symbol = isNativeToken ? (0, web_sdk_core_1.getNativeTokenInfoByChainId)(chainId, chains).symbol : tokenBalance?.contractInfo?.symbol;
    const name = isNativeToken ? (0, web_sdk_core_1.getNativeTokenInfoByChainId)(chainId, chains).name : tokenBalance?.contractInfo?.name;
    const decimals = isNativeToken ? (0, web_sdk_core_1.getNativeTokenInfoByChainId)(chainId, chains).decimals : tokenBalance?.contractInfo?.decimals;
    const formattedBalance = (0, viem_1.formatUnits)(BigInt(tokenBalance?.balance || '0'), decimals || 18);
    const balanceDisplayed = (0, web_sdk_core_1.formatDisplay)(formattedBalance);
    const coinBalanceFiat = tokenBalance
        ? (0, index_js_3.computeBalanceFiat)({
            balance: tokenBalance,
            prices: dataCoinPrices || [],
            conversionRate,
            decimals: decimals || 18
        })
        : '0';
    const onClickSend = () => {
        setNavigation({
            location: 'send-coin',
            params: {
                chainId,
                contractAddress
            }
        });
    };
    const onClickAdd = () => {
        setNavigation({
            location: 'swap'
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-10 pb-5 px-4 pt-0", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex mb-10 gap-2 items-center justify-center flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: logo, size: "xl" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "large", color: "primary", fontWeight: "bold", children: name }), (0, jsx_runtime_1.jsx)(NetworkBadge_js_1.NetworkBadge, { chainId: chainId })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "medium", color: "muted", children: "Balance" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-end justify-between", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xlarge", fontWeight: "bold", color: "primary", children: `${balanceDisplayed} ${symbol}` }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "medium", color: "muted", children: `${fiatCurrency.sign}${coinBalanceFiat}` })] })] }), !isReadOnly && ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "w-full text-primary bg-background-secondary", onClick: onClickSend, children: [(0, jsx_runtime_1.jsx)(design_system_1.SendIcon, {}), "Send"] }), (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "w-full text-primary bg-background-secondary", onClick: onClickAdd, children: [(0, jsx_runtime_1.jsx)(design_system_1.AddIcon, {}), "Add"] })] })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(InfiniteScroll_js_1.InfiniteScroll, { onLoad: () => fetchNextPage(), hasMore: hasNextPage, children: (0, jsx_runtime_1.jsx)(index_js_1.TransactionHistoryList, { transactions: transactionHistory, isLoading: isLoadingTransactionHistory, isFetchingNextPage: isFetchingNextPage }) }) })] }) }));
};
exports.CoinDetails = CoinDetails;
//# sourceMappingURL=index.js.map