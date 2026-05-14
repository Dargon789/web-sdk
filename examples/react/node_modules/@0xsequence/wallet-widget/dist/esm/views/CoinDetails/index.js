import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { AddIcon, Button, SendIcon, Text, TokenImage } from '@0xsequence/design-system';
import { useGetCoinPrices, useGetExchangeRate, useGetSingleTokenBalance, useGetTransactionHistory } from '@0xsequence/hooks';
import { compareAddress, formatDisplay, getNativeTokenInfoByChainId } from '@0xsequence/web-sdk-core';
import { useEffect } from 'react';
import { formatUnits, zeroAddress } from 'viem';
import { useConfig } from 'wagmi';
import { InfiniteScroll } from '../../components/InfiniteScroll.js';
import { NetworkBadge } from '../../components/NetworkBadge.js';
import { TransactionHistoryList } from '../../components/TransactionHistoryList/index.js';
import { useNavigation, useSettings } from '../../hooks/index.js';
import { computeBalanceFiat, flattenPaginatedTransactionHistory } from '../../utils/index.js';
import { CoinDetailsSkeleton } from './Skeleton.js';
export const CoinDetails = ({ contractAddress, chainId, accountAddress = '' }) => {
    const { chains } = useConfig();
    const { setNavigation } = useNavigation();
    const { fiatCurrency } = useSettings();
    const { setActiveWallet } = useWallets();
    useEffect(() => {
        setActiveWallet(accountAddress);
    }, [accountAddress]);
    const isReadOnly = !chains.map(chain => chain.id).includes(chainId);
    const { data: dataTransactionHistory, isLoading: isLoadingTransactionHistory, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetTransactionHistory({
        chainId,
        accountAddresses: [accountAddress],
        contractAddresses: [contractAddress]
    });
    const transactionHistory = flattenPaginatedTransactionHistory(dataTransactionHistory);
    const { data: tokenBalance, isLoading: isLoadingCoinBalance } = useGetSingleTokenBalance({
        chainId,
        contractAddress,
        accountAddress: accountAddress || ''
    });
    const { data: dataCoinPrices, isLoading: isLoadingCoinPrices } = useGetCoinPrices([
        {
            chainId,
            contractAddress
        }
    ]);
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = useGetExchangeRate(fiatCurrency.symbol);
    const isLoading = isLoadingCoinBalance || isLoadingCoinPrices || isLoadingConversionRate;
    if (isLoading) {
        return _jsx(CoinDetailsSkeleton, { chainId: chainId, isReadOnly: isReadOnly });
    }
    const isNativeToken = compareAddress(contractAddress, zeroAddress);
    const logo = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).logoURI : tokenBalance?.contractInfo?.logoURI;
    const symbol = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).symbol : tokenBalance?.contractInfo?.symbol;
    const name = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).name : tokenBalance?.contractInfo?.name;
    const decimals = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).decimals : tokenBalance?.contractInfo?.decimals;
    const formattedBalance = formatUnits(BigInt(tokenBalance?.balance || '0'), decimals || 18);
    const balanceDisplayed = formatDisplay(formattedBalance);
    const coinBalanceFiat = tokenBalance
        ? computeBalanceFiat({
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
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col gap-10 pb-5 px-4 pt-0", children: [_jsxs("div", { className: "flex mb-10 gap-2 items-center justify-center flex-col", children: [_jsx(TokenImage, { src: logo, size: "xl" }), _jsx(Text, { variant: "large", color: "primary", fontWeight: "bold", children: name }), _jsx(NetworkBadge, { chainId: chainId })] }), _jsxs("div", { children: [_jsx(Text, { variant: "normal", fontWeight: "medium", color: "muted", children: "Balance" }), _jsxs("div", { className: "flex flex-row items-end justify-between", children: [_jsx(Text, { variant: "xlarge", fontWeight: "bold", color: "primary", children: `${balanceDisplayed} ${symbol}` }), _jsx(Text, { variant: "normal", fontWeight: "medium", color: "muted", children: `${fiatCurrency.sign}${coinBalanceFiat}` })] })] }), !isReadOnly && (_jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { className: "w-full text-primary bg-background-secondary", onClick: onClickSend, children: [_jsx(SendIcon, {}), "Send"] }), _jsxs(Button, { className: "w-full text-primary bg-background-secondary", onClick: onClickAdd, children: [_jsx(AddIcon, {}), "Add"] })] })), _jsx("div", { children: _jsx(InfiniteScroll, { onLoad: () => fetchNextPage(), hasMore: hasNextPage, children: _jsx(TransactionHistoryList, { transactions: transactionHistory, isLoading: isLoadingTransactionHistory, isFetchingNextPage: isFetchingNextPage }) }) })] }) }));
};
//# sourceMappingURL=index.js.map