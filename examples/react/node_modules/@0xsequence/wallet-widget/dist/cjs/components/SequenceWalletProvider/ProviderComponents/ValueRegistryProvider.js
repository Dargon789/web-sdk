"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRegistryProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const hooks_1 = require("@0xsequence/hooks");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = require("react");
const viem_1 = require("viem");
const index_js_1 = require("../../../contexts/index.js");
const index_js_2 = require("../../../hooks/index.js");
const index_js_3 = require("../../../utils/index.js");
const ValueRegistryProvider = ({ children }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const { allNetworks, hideUnlistedTokens, fiatCurrency } = (0, index_js_2.useSettings)();
    const [valueRegistryMap, setValueRegistryMap] = (0, react_1.useState)([]);
    const [totalValue, setTotalValue] = (0, react_1.useState)('0');
    const { data: tokenBalancesData, isLoading: isTokenBalancesLoading } = (0, index_js_2.useGetAllTokensDetails)({
        accountAddresses: wallets.map(wallet => wallet.address),
        chainIds: allNetworks,
        hideUnlistedTokens
    });
    const coinBalancesUnordered = tokenBalancesData?.filter(b => b.contractType === 'ERC20' || (0, web_sdk_core_1.compareAddress)(b.contractAddress, viem_1.zeroAddress)) || [];
    const { data: coinPrices = [], isLoading: isCoinPricesLoading } = (0, hooks_1.useGetCoinPrices)(coinBalancesUnordered.map(token => ({
        chainId: token.chainId,
        contractAddress: token.contractAddress
    })));
    const { data: conversionRate, isLoading: isConversionRateLoading } = (0, hooks_1.useGetExchangeRate)(fiatCurrency.symbol);
    (0, react_1.useEffect)(() => {
        if (!isTokenBalancesLoading &&
            !isCoinPricesLoading &&
            !isConversionRateLoading &&
            coinBalancesUnordered.length > 0 &&
            coinPrices.length > 0 &&
            conversionRate) {
            const newValueRegistryMap = wallets.map(wallet => {
                const walletBalances = coinBalancesUnordered.filter(b => (0, viem_1.getAddress)(b.accountAddress) === (0, viem_1.getAddress)(wallet.address));
                const walletFiatValue = walletBalances.reduce((acc, coin) => {
                    return (acc +
                        Number((0, index_js_3.computeBalanceFiat)({
                            balance: coin,
                            prices: coinPrices,
                            conversionRate,
                            decimals: coin.contractInfo?.decimals || 18
                        })));
                }, 0);
                return {
                    accountAddress: wallet.address,
                    value: walletFiatValue.toFixed(2)
                };
            });
            if (JSON.stringify(newValueRegistryMap) !== JSON.stringify(valueRegistryMap)) {
                setValueRegistryMap(newValueRegistryMap);
                const totalValue = newValueRegistryMap.reduce((acc, wallet) => acc + Number(wallet.value), 0).toFixed(2);
                setTotalValue(totalValue);
            }
        }
    }, [coinBalancesUnordered, coinPrices, conversionRate]);
    return (0, jsx_runtime_1.jsx)(index_js_1.ValueRegistryContextProvider, { value: { valueRegistryMap, totalValue }, children: children });
};
exports.ValueRegistryProvider = ValueRegistryProvider;
//# sourceMappingURL=ValueRegistryProvider.js.map