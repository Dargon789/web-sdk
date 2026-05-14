import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Card, ChevronRightIcon, GradientAvatar, Spinner, Text } from '@0xsequence/design-system';
import { useIndexerClient } from '@0xsequence/hooks';
import { truncateAtMiddle } from '@0xsequence/web-sdk-core';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useConnection } from 'wagmi';
import { FeeOptionSelector } from './FeeOptionSelector.js';
import { SendItemInfo } from './SendItemInfo.js';
const useFeeOptionBalances = (feeOptions, chainId) => {
    const { address: accountAddress } = useConnection();
    const indexerClient = useIndexerClient(chainId);
    return useQuery({
        queryKey: ['feeOptionBalances', chainId, accountAddress, feeOptions?.options?.length],
        queryFn: async () => {
            if (!feeOptions?.options || !accountAddress || !indexerClient) {
                return [];
            }
            const nativeTokenBalance = await indexerClient.getEtherBalance({
                accountAddress
            });
            const tokenBalances = await indexerClient.getTokenBalances({
                accountAddress
            });
            return feeOptions.options.map(option => {
                if (option.token.contractAddress === null) {
                    return {
                        tokenName: option.token.name,
                        decimals: option.token.decimals || 0,
                        balance: nativeTokenBalance.balance.balanceWei
                    };
                }
                else {
                    return {
                        tokenName: option.token.name,
                        decimals: option.token.decimals || 0,
                        balance: tokenBalances.balances.find(b => b.contractAddress.toLowerCase() === option.token.contractAddress?.toLowerCase())
                            ?.balance || '0'
                    };
                }
            });
        },
        enabled: Boolean(feeOptions?.options && accountAddress && indexerClient),
        refetchInterval: 10000,
        staleTime: 10000
    });
};
export const TransactionConfirmation = ({ name, symbol, imageUrl, amount, toAddress, showSquareImage, fiatValue, chainId, balance, decimals, feeOptions, onSelectFeeOption, isLoading, disabled, onConfirm, onCancel }) => {
    const [selectedFeeOptionAddress, setSelectedFeeOptionAddress] = useState();
    const { data: feeOptionBalances = [] } = useFeeOptionBalances(feeOptions, chainId);
    const handleFeeOptionSelect = (address) => {
        setSelectedFeeOptionAddress(address);
        onSelectFeeOption?.(address);
    };
    // If feeOptions exist and have options, a selection is required
    // If feeOptions don't exist or have no options, no selection is required
    const isFeeSelectionRequired = Boolean(feeOptions?.options?.length);
    const isConfirmDisabled = (isFeeSelectionRequired && !selectedFeeOptionAddress) || disabled;
    return (_jsx("div", { className: "flex w-full h-full items-center justify-center bg-background-primary", children: _jsxs("div", { className: "flex gap-2 flex-col bg-background-primary w-full", children: [_jsxs("div", { className: "flex bg-background-secondary rounded-xl p-4 pb-3 gap-2 flex-col", children: [_jsx(SendItemInfo, { imageUrl: imageUrl, showSquareImage: showSquareImage, name: name, symbol: symbol, chainId: chainId, balance: balance, decimals: decimals }), _jsxs("div", { className: "flex mt-2 gap-1 flex-col", children: [_jsx(Text, { variant: "small", color: "muted", children: "Amount" }), _jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsxs(Text, { variant: "normal", color: "primary", children: [amount, " ", symbol] }), fiatValue && (_jsxs(Text, { variant: "small", color: "muted", children: ["~$", fiatValue] }))] })] }), _jsxs("div", { className: "flex mt-2 gap-1 flex-col", children: [_jsx(Text, { variant: "small", color: "muted", children: "To" }), _jsx(Card, { className: "flex w-full flex-row items-center", style: { height: '52px' }, children: _jsxs("div", { className: "flex flex-row justify-center items-center gap-2", children: [_jsx(GradientAvatar, { size: "sm", address: toAddress }), _jsx(Text, { color: "primary", variant: "normal", children: `0x${truncateAtMiddle(toAddress.substring(2), 10)}` })] }) })] }), isFeeSelectionRequired && feeOptions?.options && (_jsx(FeeOptionSelector, { txnFeeOptions: feeOptions.options, feeOptionBalances: feeOptionBalances, selectedFeeOptionAddress: selectedFeeOptionAddress, setSelectedFeeOptionAddress: handleFeeOptionSelect }))] }), _jsx("div", { className: "flex mt-3 gap-2", children: isLoading ? (_jsx("div", { className: "flex w-full items-center justify-center", style: { height: '52px' }, children: _jsx(Spinner, {}) })) : (_jsxs(_Fragment, { children: [_jsx(Button, { className: "w-full", variant: "ghost", size: "lg", onClick: onCancel, children: "Cancel" }), _jsxs(Button, { className: "w-full", variant: "primary", size: "lg", onClick: () => {
                                    onConfirm();
                                }, disabled: isConfirmDisabled, children: ["Confirm", _jsx(ChevronRightIcon, {})] })] })) })] }) }));
};
//# sourceMappingURL=TransactionConfirmation.js.map