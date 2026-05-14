"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDetails = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const indexer_1 = require("@0xsequence/indexer");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const dayjs_1 = __importDefault(require("dayjs"));
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const CopyButton_js_1 = require("../../components/CopyButton.js");
const NetworkBadge_js_1 = require("../../components/NetworkBadge.js");
const index_js_1 = require("../../hooks/index.js");
const TransactionDetails = ({ transaction }) => {
    const { chains } = (0, wagmi_1.useConfig)();
    const { fiatCurrency } = (0, index_js_1.useSettings)();
    const coins = [];
    const collectibles = [];
    transaction.transfers?.forEach(transfer => {
        if (transfer.contractInfo?.type === 'ERC721' || transfer.contractInfo?.type === 'ERC1155') {
            transfer.tokenIds?.forEach(tokenId => {
                const foundCollectible = collectibles.find(collectible => collectible.chainId === transaction.chainId &&
                    (0, web_sdk_core_1.compareAddress)(collectible.contractAddress, transfer.contractInfo?.address || '') &&
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
            const contractAddress = transfer?.contractInfo?.address || viem_1.zeroAddress;
            const foundCoin = coins.find(coin => coin.chainId === transaction.chainId && (0, web_sdk_core_1.compareAddress)(coin.contractAddress, contractAddress));
            if (!foundCoin) {
                coins.push({
                    chainId: transaction.chainId,
                    contractAddress
                });
            }
        }
    });
    const { data: coinPricesData, isLoading: isLoadingCoinPrices } = (0, hooks_1.useGetCoinPrices)(coins);
    const { data: collectiblePricesData, isLoading: isLoadingCollectiblePrices } = (0, hooks_1.useGetCollectiblePrices)(collectibles);
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = (0, hooks_1.useGetExchangeRate)(fiatCurrency.symbol);
    const arePricesLoading = (coins.length > 0 && isLoadingCoinPrices) ||
        (collectibles.length > 0 && isLoadingCollectiblePrices) ||
        isLoadingConversionRate;
    const nativeTokenInfo = (0, web_sdk_core_1.getNativeTokenInfoByChainId)(transaction.chainId, chains);
    const date = (0, dayjs_1.default)(transaction.timestamp).format('ddd MMM DD YYYY, h:m:s a');
    const onClickBlockExplorer = () => {
        if (typeof window !== 'undefined') {
            window.open(`${nativeTokenInfo.blockExplorerUrl}/tx/${transaction.txnHash}`, '_blank');
        }
    };
    const Transfer = ({ transfer }) => {
        const recipientAddress = transfer.to;
        const recipientAddressFormatted = (0, web_sdk_core_1.truncateAtIndex)(recipientAddress, 8);
        const isNativeToken = (0, web_sdk_core_1.compareAddress)(transfer?.contractInfo?.address || '', viem_1.zeroAddress);
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
        const WalletContent = () => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2 h-12 rounded-xl bg-button-glass p-2", style: { flexBasis: '100%' }, children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { size: "sm", address: recipientAddress }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: "bold", color: "primary", children: recipientAddressFormatted }), (0, jsx_runtime_1.jsx)("div", { className: "px-1", children: (0, jsx_runtime_1.jsx)(CopyButton_js_1.CopyButton, { text: recipientAddress }) })] })] }));
        const TokenContent = ({ balanceDisplayed, fiatValue, fiatPrice }) => {
            const senderAddress = transfer.from;
            const senderAddressFormatted = (0, web_sdk_core_1.truncateAtIndex)(senderAddress, 8);
            return ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col justify-center items-start gap-2 rounded-xl bg-button-glass p-2`, style: { flexBasis: '100%' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-2 w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { size: "sm", address: senderAddress }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: "bold", color: "primary", children: senderAddressFormatted }), (0, jsx_runtime_1.jsx)("div", { className: "px-1", children: (0, jsx_runtime_1.jsx)(CopyButton_js_1.CopyButton, { text: senderAddress }) })] })] }), isCollectible && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: contractLogoURI, symbol: contractSymbol, size: "sm" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: "bold", color: "primary", style: {
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }, children: contractSymbol })] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: tokenLogoURI, symbol: tokenSymbol, size: "sm" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-0.5 flex-col items-start justify-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: isCollectible ? 'normal' : 'bold', color: "primary", style: {
                                            display: '-webkit-box',
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }, children: `${balanceDisplayed} ${tokenSymbol}` }), arePricesLoading ? ((0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '44px', height: '12px' } })) : ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: "bold", color: "muted", children: fiatPrice ? `${fiatCurrency.sign}${fiatValue}` : '' }))] })] })] }));
        };
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: transfer.amounts?.map((amount, index) => {
                const isCollectible = transfer.contractType === 'ERC721' || transfer.contractType === 'ERC1155';
                const tokenId = transfer.tokenIds?.[index] || '0';
                const collectibleDecimals = transfer?.tokenMetadata?.[tokenId]?.decimals || 0;
                const coinDecimals = isNativeToken ? nativeTokenInfo.decimals : transfer?.contractInfo?.decimals || 0;
                const decimals = isCollectible ? collectibleDecimals : coinDecimals;
                const formattedBalance = (0, viem_1.formatUnits)(BigInt(amount), decimals);
                const balanceDisplayed = (0, web_sdk_core_1.formatDisplay)(formattedBalance);
                const fiatPrice = isCollectible
                    ? collectiblePricesData?.find(collectible => (0, web_sdk_core_1.compareAddress)(collectible.token.contractAddress, transfer.contractInfo?.address || '') &&
                        collectible.token.tokenId === transfer.tokenIds?.[index] &&
                        collectible.token.chainId === transaction.chainId)?.price?.value
                    : coinPricesData?.find(coin => (0, web_sdk_core_1.compareAddress)(coin.token.contractAddress, transfer.contractInfo?.address || viem_1.zeroAddress) &&
                        coin.token.chainId === transaction.chainId)?.price?.value;
                const fiatValue = (parseFloat(formattedBalance) * (conversionRate * (fiatPrice || 0))).toFixed(2);
                const isReceiveTransfer = transfer.transferType === indexer_1.TxnTransferType.RECEIVE;
                return ((0, jsx_runtime_1.jsx)("div", { className: "flex w-full flex-row gap-2 justify-between items-center", children: isReceiveTransfer ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(WalletContent, {}), (0, jsx_runtime_1.jsx)(design_system_1.ArrowRightIcon, { className: "text-muted", style: { width: '16px', transform: 'rotate(180deg)' } }), (0, jsx_runtime_1.jsx)(TokenContent, { balanceDisplayed: balanceDisplayed, fiatValue: fiatValue, fiatPrice: fiatPrice || 0 })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TokenContent, { balanceDisplayed: balanceDisplayed, fiatValue: fiatValue, fiatPrice: fiatPrice || 0 }), (0, jsx_runtime_1.jsx)(design_system_1.ArrowRightIcon, { className: "text-muted", style: { width: '16px' } }), (0, jsx_runtime_1.jsx)(WalletContent, {})] })) }, index));
            }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex p-4 pt-3 flex-col items-center justify-center gap-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center items-center gap-1", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "medium", color: "primary", children: "Transaction details" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "mb-1", variant: "small", fontWeight: "medium", color: "muted", children: date }), (0, jsx_runtime_1.jsx)(NetworkBadge_js_1.NetworkBadge, { chainId: transaction.chainId })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center gap-4 w-full p-4 bg-background-secondary rounded-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full gap-1 flex-row items-center justify-start", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "medium", color: "muted", children: "Transfers" }), (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: transaction.chainId, size: "xs" })] }), transaction.transfers?.map((transfer, index) => ((0, jsx_runtime_1.jsx)("div", { className: "flex w-full flex-col justify-center items-center gap-4", children: (0, jsx_runtime_1.jsx)(Transfer, { transfer: transfer }) }, `transfer-${index}`)))] }), (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "w-full rounded-xl", onClick: onClickBlockExplorer, children: [(0, jsx_runtime_1.jsx)(design_system_1.LinkIcon, {}), `View on ${nativeTokenInfo.blockExplorerName}`] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "w-full my-2" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-2 justify-center items-start", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "muted", fontWeight: "medium", children: "Status" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "medium", color: "primary", children: "Complete" })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "w-full my-2" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-2 justify-center items-start", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "muted", fontWeight: "medium", children: "Transaction Hash" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", fontWeight: "medium", style: { overflowWrap: 'anywhere' }, children: transaction.txnHash }), (0, jsx_runtime_1.jsx)(CopyButton_js_1.CopyButton, { className: "mt-2", includeLabel: true, text: transaction.txnHash })] })] })] }));
};
exports.TransactionDetails = TransactionDetails;
//# sourceMappingURL=index.js.map