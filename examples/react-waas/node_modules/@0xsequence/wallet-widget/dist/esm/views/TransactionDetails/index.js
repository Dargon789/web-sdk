import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowRightIcon, Button, GradientAvatar, LinkIcon, NetworkImage, Separator, Skeleton, Text, TokenImage } from '@0xsequence/design-system';
import { useGetCoinPrices, useGetCollectiblePrices, useGetExchangeRate } from '@0xsequence/hooks';
import { TxnTransferType } from '@0xsequence/indexer';
import { compareAddress, formatDisplay, getNativeTokenInfoByChainId, truncateAtIndex } from '@0xsequence/web-sdk-core';
import dayjs from 'dayjs';
import { formatUnits, zeroAddress } from 'viem';
import { useConfig } from 'wagmi';
import { CopyButton } from '../../components/CopyButton.js';
import { NetworkBadge } from '../../components/NetworkBadge.js';
import { useSettings } from '../../hooks/index.js';
export const TransactionDetails = ({ transaction }) => {
    const { chains } = useConfig();
    const { fiatCurrency } = useSettings();
    const coins = [];
    const collectibles = [];
    transaction.transfers?.forEach(transfer => {
        if (transfer.contractInfo?.type === 'ERC721' || transfer.contractInfo?.type === 'ERC1155') {
            transfer.tokenIds?.forEach(tokenId => {
                const foundCollectible = collectibles.find(collectible => collectible.chainId === transaction.chainId &&
                    compareAddress(collectible.contractAddress, transfer.contractInfo?.address || '') &&
                    collectible.tokenId === tokenId);
                if (!foundCollectible) {
                    collectibles.push({
                        chainId: transaction.chainId,
                        contractAddress: transfer.contractInfo?.address || '',
                        tokenId
                    });
                }
            });
        }
        else {
            const contractAddress = transfer?.contractInfo?.address || zeroAddress;
            const foundCoin = coins.find(coin => coin.chainId === transaction.chainId && compareAddress(coin.contractAddress, contractAddress));
            if (!foundCoin) {
                coins.push({
                    chainId: transaction.chainId,
                    contractAddress
                });
            }
        }
    });
    const { data: coinPricesData, isLoading: isLoadingCoinPrices } = useGetCoinPrices(coins);
    const { data: collectiblePricesData, isLoading: isLoadingCollectiblePrices } = useGetCollectiblePrices(collectibles);
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = useGetExchangeRate(fiatCurrency.symbol);
    const arePricesLoading = (coins.length > 0 && isLoadingCoinPrices) ||
        (collectibles.length > 0 && isLoadingCollectiblePrices) ||
        isLoadingConversionRate;
    const nativeTokenInfo = getNativeTokenInfoByChainId(transaction.chainId, chains);
    const date = dayjs(transaction.timestamp).format('ddd MMM DD YYYY, h:m:s a');
    const onClickBlockExplorer = () => {
        if (typeof window !== 'undefined') {
            window.open(`${nativeTokenInfo.blockExplorerUrl}/tx/${transaction.txnHash}`, '_blank');
        }
    };
    const Transfer = ({ transfer }) => {
        const recipientAddress = transfer.to;
        const recipientAddressFormatted = truncateAtIndex(recipientAddress, 8);
        const isNativeToken = compareAddress(transfer?.contractInfo?.address || '', zeroAddress);
        const isCollectible = transfer.contractType === 'ERC721' || transfer.contractType === 'ERC1155';
        const tokenId = transfer.tokenIds?.[0];
        const tokenLogoURI = isNativeToken
            ? nativeTokenInfo.logoURI
            : isCollectible
                ? transfer?.tokenMetadata?.[String(tokenId)]?.image
                : transfer?.contractInfo?.logoURI;
        const contractLogoURI = transfer?.contractInfo?.logoURI;
        const tokenSymbol = isNativeToken
            ? nativeTokenInfo.symbol
            : isCollectible
                ? transfer?.tokenMetadata?.[String(tokenId)]?.name || ''
                : transfer?.contractInfo?.symbol || '';
        const contractSymbol = transfer?.contractInfo?.name || '';
        const WalletContent = () => (_jsxs("div", { className: "flex flex-row justify-start items-center gap-2 h-12 rounded-xl bg-button-glass p-2", style: { flexBasis: '100%' }, children: [_jsx(GradientAvatar, { size: "sm", address: recipientAddress }), _jsxs("div", { className: "flex flex-row justify-between items-center w-full", children: [_jsx(Text, { variant: "xsmall", fontWeight: "bold", color: "primary", children: recipientAddressFormatted }), _jsx("div", { className: "px-1", children: _jsx(CopyButton, { text: recipientAddress }) })] })] }));
        const TokenContent = ({ balanceDisplayed, fiatValue, fiatPrice }) => {
            const senderAddress = transfer.from;
            const senderAddressFormatted = truncateAtIndex(senderAddress, 8);
            return (_jsxs("div", { className: `flex flex-col justify-center items-start gap-2 rounded-xl bg-button-glass p-2`, style: { flexBasis: '100%' }, children: [_jsxs("div", { className: "flex flex-row items-center gap-2 w-full", children: [_jsx(GradientAvatar, { size: "sm", address: senderAddress }), _jsxs("div", { className: "flex flex-row justify-between items-center w-full", children: [_jsx(Text, { variant: "xsmall", fontWeight: "bold", color: "primary", children: senderAddressFormatted }), _jsx("div", { className: "px-1", children: _jsx(CopyButton, { text: senderAddress }) })] })] }), isCollectible && (_jsxs("div", { className: "flex flex-row justify-start items-center gap-2", children: [_jsx(TokenImage, { src: contractLogoURI, symbol: contractSymbol, size: "sm" }), _jsx(Text, { variant: "xsmall", fontWeight: "bold", color: "primary", style: {
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }, children: contractSymbol })] })), _jsxs("div", { className: "flex flex-row justify-start items-center gap-2", children: [_jsx(TokenImage, { src: tokenLogoURI, symbol: tokenSymbol, size: "sm" }), _jsxs("div", { className: "flex gap-0.5 flex-col items-start justify-center", children: [_jsx(Text, { variant: "xsmall", fontWeight: isCollectible ? 'normal' : 'bold', color: "primary", style: {
                                            display: '-webkit-box',
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }, children: `${balanceDisplayed} ${tokenSymbol}` }), arePricesLoading ? (_jsx(Skeleton, { style: { width: '44px', height: '12px' } })) : (_jsx(Text, { variant: "xsmall", fontWeight: "bold", color: "muted", children: fiatPrice ? `${fiatCurrency.sign}${fiatValue}` : '' }))] })] })] }));
        };
        return (_jsx(_Fragment, { children: transfer.amounts?.map((amount, index) => {
                const isCollectible = transfer.contractType === 'ERC721' || transfer.contractType === 'ERC1155';
                const tokenId = transfer.tokenIds?.[index] || '0';
                const collectibleDecimals = transfer?.tokenMetadata?.[tokenId]?.decimals || 0;
                const coinDecimals = isNativeToken ? nativeTokenInfo.decimals : transfer?.contractInfo?.decimals || 0;
                const decimals = isCollectible ? collectibleDecimals : coinDecimals;
                const formattedBalance = formatUnits(BigInt(amount), decimals);
                const balanceDisplayed = formatDisplay(formattedBalance);
                const fiatPrice = isCollectible
                    ? collectiblePricesData?.find(collectible => compareAddress(collectible.token.contractAddress, transfer.contractInfo?.address || '') &&
                        collectible.token.tokenId === transfer.tokenIds?.[index] &&
                        collectible.token.chainId === transaction.chainId)?.price?.value
                    : coinPricesData?.find(coin => compareAddress(coin.token.contractAddress, transfer.contractInfo?.address || zeroAddress) &&
                        coin.token.chainId === transaction.chainId)?.price?.value;
                const fiatValue = (parseFloat(formattedBalance) * (conversionRate * (fiatPrice || 0))).toFixed(2);
                const isReceiveTransfer = transfer.transferType === TxnTransferType.RECEIVE;
                return (_jsx("div", { className: "flex w-full flex-row gap-2 justify-between items-center", children: isReceiveTransfer ? (_jsxs(_Fragment, { children: [_jsx(WalletContent, {}), _jsx(ArrowRightIcon, { className: "text-muted", style: { width: '16px', transform: 'rotate(180deg)' } }), _jsx(TokenContent, { balanceDisplayed: balanceDisplayed, fiatValue: fiatValue, fiatPrice: fiatPrice || 0 })] })) : (_jsxs(_Fragment, { children: [_jsx(TokenContent, { balanceDisplayed: balanceDisplayed, fiatValue: fiatValue, fiatPrice: fiatPrice || 0 }), _jsx(ArrowRightIcon, { className: "text-muted", style: { width: '16px' } }), _jsx(WalletContent, {})] })) }, index));
            }) }));
    };
    return (_jsxs("div", { className: "flex p-4 pt-3 flex-col items-center justify-center gap-10", children: [_jsxs("div", { className: "flex flex-col justify-center items-center gap-1", children: [_jsx(Text, { variant: "normal", fontWeight: "medium", color: "primary", children: "Transaction details" }), _jsx(Text, { className: "mb-1", variant: "small", fontWeight: "medium", color: "muted", children: date }), _jsx(NetworkBadge, { chainId: transaction.chainId })] }), _jsxs("div", { className: "flex flex-col items-center justify-center gap-4 w-full p-4 bg-background-secondary rounded-xl", children: [_jsxs("div", { className: "flex w-full gap-1 flex-row items-center justify-start", children: [_jsx(Text, { variant: "normal", fontWeight: "medium", color: "muted", children: "Transfers" }), _jsx(NetworkImage, { chainId: transaction.chainId, size: "xs" })] }), transaction.transfers?.map((transfer, index) => (_jsx("div", { className: "flex w-full flex-col justify-center items-center gap-4", children: _jsx(Transfer, { transfer: transfer }) }, `transfer-${index}`)))] }), _jsxs(Button, { className: "w-full rounded-xl", onClick: onClickBlockExplorer, children: [_jsx(LinkIcon, {}), `View on ${nativeTokenInfo.blockExplorerName}`] }), _jsxs("div", { children: [_jsx(Separator, { className: "w-full my-2" }), _jsxs("div", { className: "flex w-full flex-col gap-2 justify-center items-start", children: [_jsx(Text, { variant: "normal", color: "muted", fontWeight: "medium", children: "Status" }), _jsx(Text, { variant: "normal", fontWeight: "medium", color: "primary", children: "Complete" })] }), _jsx(Separator, { className: "w-full my-2" }), _jsxs("div", { className: "flex w-full flex-col gap-2 justify-center items-start", children: [_jsx(Text, { variant: "normal", color: "muted", fontWeight: "medium", children: "Transaction Hash" }), _jsx(Text, { variant: "normal", color: "primary", fontWeight: "medium", style: { overflowWrap: 'anywhere' }, children: transaction.txnHash }), _jsx(CopyButton, { className: "mt-2", includeLabel: true, text: transaction.txnHash })] })] })] }));
};
//# sourceMappingURL=index.js.map