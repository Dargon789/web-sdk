import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TokenPrice } from '@0xsequence/api';
import { ArrowRightIcon, Box, Text, Image, TransactionIcon, vars, Skeleton, NetworkImage } from '@0xsequence/design-system';
import { Transaction, TxnTransfer, TxnTransferType } from '@0xsequence/indexer';
import { getNativeTokenInfoByChainId } from '@0xsequence/kit';
import { useCoinPrices, useExchangeRate } from '@0xsequence/kit/hooks';
import dayjs from 'dayjs';
import { ethers } from 'ethers';
import React from 'react';
import { useConfig } from 'wagmi';
import { useSettings, useNavigation } from '../../hooks';
import { formatDisplay, compareAddress } from '../../utils';
export const TransactionHistoryItem = ({ transaction }) => {
    const { chains } = useConfig();
    const { fiatCurrency } = useSettings();
    const { setNavigation } = useNavigation();
    const onClickTransaction = () => {
        setNavigation({
            location: 'transaction-details',
            params: {
                transaction
            }
        });
    };
    const tokenContractAddresses = [];
    transaction.transfers?.forEach(transfer => {
        const tokenContractAddress = transfer.contractAddress;
        if (!tokenContractAddresses.includes(tokenContractAddress)) {
            tokenContractAddresses.push(tokenContractAddress);
        }
    });
    const { data: coinPrices = [], isPending: isPendingCoinPrices } = useCoinPrices(tokenContractAddresses.map(contractAddress => ({
        contractAddress,
        chainId: transaction.chainId
    })));
    const { data: conversionRate = 1, isPending: isPendingConversionRate } = useExchangeRate(fiatCurrency.symbol);
    const isPending = isPendingCoinPrices || isPendingConversionRate;
    const { transfers } = transaction;
    const getTransactionIconByType = (transferType) => {
        switch (transferType) {
            case TxnTransferType.SEND:
                return (_jsx(ArrowRightIcon, { style: {
                        transform: 'rotate(270deg)',
                        width: '16px'
                    } }));
            case TxnTransferType.RECEIVE:
                return (_jsx(ArrowRightIcon, { style: {
                        transform: 'rotate(90deg)',
                        width: '16px'
                    } }));
            case TxnTransferType.UNKNOWN:
            default:
                return _jsx(TransactionIcon, { style: { width: '14px' } });
        }
    };
    const getTansactionLabelByType = (transferType) => {
        switch (transferType) {
            case TxnTransferType.SEND:
                return 'Sent';
            case TxnTransferType.RECEIVE:
                return 'Received';
            case TxnTransferType.UNKNOWN:
            default:
                return 'Transacted';
        }
    };
    const getTransferAmountLabel = (amount, symbol, transferType) => {
        let sign = '';
        if (transferType === TxnTransferType.SEND) {
            sign = '-';
        }
        else if (transferType === TxnTransferType.RECEIVE) {
            sign = '+';
        }
        let textColor = 'text50';
        if (transferType === TxnTransferType.SEND) {
            textColor = vars.colors.negative;
        }
        else if (transferType === TxnTransferType.RECEIVE) {
            textColor = vars.colors.positive;
        }
        return _jsx(Text, { fontWeight: "bold", fontSize: "normal", style: { color: textColor }, children: `${sign}${amount} ${symbol}` });
    };
    const getTransfer = ({ transfer, isFirstItem }) => {
        const { amounts } = transfer;
        const date = dayjs(transaction.timestamp).format('MMM DD, YYYY');
        return (_jsxs(Box, { gap: "2", width: "full", flexDirection: "column", justifyContent: "space-between", children: [_jsxs(Box, { flexDirection: "row", justifyContent: "space-between", children: [_jsxs(Box, { color: "text50", gap: "1", flexDirection: "row", justifyContent: "center", alignItems: "center", children: [getTransactionIconByType(transfer.transferType), _jsx(Text, { fontWeight: "medium", fontSize: "normal", color: "text100", children: getTansactionLabelByType(transfer.transferType) }), _jsx(NetworkImage, { chainId: transaction.chainId, size: "xs" })] }), isFirstItem && (_jsx(Box, { children: _jsx(Text, { fontWeight: "medium", fontSize: "normal", color: "text50", children: date }) }))] }), amounts.map((amount, index) => {
                    const nativeTokenInfo = getNativeTokenInfoByChainId(transaction.chainId, chains);
                    const isNativeToken = compareAddress(transfer.contractAddress, ethers.constants.AddressZero);
                    const isCollectible = transfer.contractInfo?.type === 'ERC721' || transfer.contractInfo?.type === 'ERC1155';
                    let decimals;
                    const tokenId = transfer.tokenIds?.[index];
                    if (isCollectible && tokenId) {
                        decimals = transfer.tokenMetadata?.[tokenId]?.decimals || 0;
                    }
                    else {
                        decimals = isNativeToken ? nativeTokenInfo.decimals : transfer.contractInfo?.decimals;
                    }
                    const amountValue = ethers.utils.formatUnits(amount, decimals);
                    const symbol = isNativeToken ? nativeTokenInfo.symbol : transfer.contractInfo?.symbol || '';
                    const tokenLogoUri = isNativeToken ? nativeTokenInfo.logoURI : transfer.contractInfo?.logoURI;
                    const fiatConversionRate = coinPrices.find((coinPrice) => compareAddress(coinPrice.token.contractAddress, transfer.contractAddress))?.price?.value;
                    return (_jsxs(Box, { flexDirection: "row", justifyContent: "space-between", children: [_jsxs(Box, { flexDirection: "row", gap: "2", justifyContent: "center", alignItems: "center", children: [tokenLogoUri && _jsx(Image, { src: tokenLogoUri, width: "5", alt: "token logo" }), getTransferAmountLabel(formatDisplay(amountValue), symbol, transfer.transferType)] }), isPending && _jsx(Skeleton, { style: { width: '35px', height: '20px' } }), fiatConversionRate && (_jsx(Text, { fontWeight: "medium", fontSize: "normal", color: "text50", children: `${fiatCurrency.sign}${(Number(amountValue) * fiatConversionRate * conversionRate).toFixed(2)}` }))] }, index));
                })] }));
    };
    return (_jsx(Box, { background: "backgroundSecondary", borderRadius: "md", padding: "4", gap: "2", alignItems: "center", justifyContent: "center", flexDirection: "column", userSelect: "none", cursor: "pointer", opacity: { hover: '80' }, onClick: () => onClickTransaction(), children: transfers?.map((transfer, position) => {
            return (_jsx(Box, { width: "full", children: getTransfer({
                    transfer,
                    isFirstItem: position === 0
                }) }, `${transaction.txnHash}-${position}`));
        }) }));
};
//# sourceMappingURL=TransactionHistoryItem.js.map