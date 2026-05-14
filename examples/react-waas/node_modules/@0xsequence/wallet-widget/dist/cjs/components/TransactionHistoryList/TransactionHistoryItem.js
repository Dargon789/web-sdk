"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const indexer_1 = require("@0xsequence/indexer");
const kit_1 = require("@0xsequence/kit");
const hooks_1 = require("@0xsequence/kit/hooks");
const dayjs_1 = __importDefault(require("dayjs"));
const ethers_1 = require("ethers");
const react_1 = __importDefault(require("react"));
const wagmi_1 = require("wagmi");
const hooks_2 = require("../../hooks");
const utils_1 = require("../../utils");
const TransactionHistoryItem = ({ transaction }) => {
    const { chains } = (0, wagmi_1.useConfig)();
    const { fiatCurrency } = (0, hooks_2.useSettings)();
    const { setNavigation } = (0, hooks_2.useNavigation)();
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
    const { data: coinPrices = [], isPending: isPendingCoinPrices } = (0, hooks_1.useCoinPrices)(tokenContractAddresses.map(contractAddress => ({
        contractAddress,
        chainId: transaction.chainId
    })));
    const { data: conversionRate = 1, isPending: isPendingConversionRate } = (0, hooks_1.useExchangeRate)(fiatCurrency.symbol);
    const isPending = isPendingCoinPrices || isPendingConversionRate;
    const { transfers } = transaction;
    const getTransactionIconByType = (transferType) => {
        switch (transferType) {
            case indexer_1.TxnTransferType.SEND:
                return ((0, jsx_runtime_1.jsx)(design_system_1.ArrowRightIcon, { style: {
                        transform: 'rotate(270deg)',
                        width: '16px'
                    } }));
            case indexer_1.TxnTransferType.RECEIVE:
                return ((0, jsx_runtime_1.jsx)(design_system_1.ArrowRightIcon, { style: {
                        transform: 'rotate(90deg)',
                        width: '16px'
                    } }));
            case indexer_1.TxnTransferType.UNKNOWN:
            default:
                return (0, jsx_runtime_1.jsx)(design_system_1.TransactionIcon, { style: { width: '14px' } });
        }
    };
    const getTansactionLabelByType = (transferType) => {
        switch (transferType) {
            case indexer_1.TxnTransferType.SEND:
                return 'Sent';
            case indexer_1.TxnTransferType.RECEIVE:
                return 'Received';
            case indexer_1.TxnTransferType.UNKNOWN:
            default:
                return 'Transacted';
        }
    };
    const getTransferAmountLabel = (amount, symbol, transferType) => {
        let sign = '';
        if (transferType === indexer_1.TxnTransferType.SEND) {
            sign = '-';
        }
        else if (transferType === indexer_1.TxnTransferType.RECEIVE) {
            sign = '+';
        }
        let textColor = 'text50';
        if (transferType === indexer_1.TxnTransferType.SEND) {
            textColor = design_system_1.vars.colors.negative;
        }
        else if (transferType === indexer_1.TxnTransferType.RECEIVE) {
            textColor = design_system_1.vars.colors.positive;
        }
        return (0, jsx_runtime_1.jsx)(design_system_1.Text, { fontWeight: "bold", fontSize: "normal", style: { color: textColor }, children: `${sign}${amount} ${symbol}` });
    };
    const getTransfer = ({ transfer, isFirstItem }) => {
        const { amounts } = transfer;
        const date = (0, dayjs_1.default)(transaction.timestamp).format('MMM DD, YYYY');
        return ((0, jsx_runtime_1.jsxs)(design_system_1.Box, { gap: "2", width: "full", flexDirection: "column", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Box, { flexDirection: "row", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Box, { color: "text50", gap: "1", flexDirection: "row", justifyContent: "center", alignItems: "center", children: [getTransactionIconByType(transfer.transferType), (0, jsx_runtime_1.jsx)(design_system_1.Text, { fontWeight: "medium", fontSize: "normal", color: "text100", children: getTansactionLabelByType(transfer.transferType) }), (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: transaction.chainId, size: "xs" })] }), isFirstItem && ((0, jsx_runtime_1.jsx)(design_system_1.Box, { children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { fontWeight: "medium", fontSize: "normal", color: "text50", children: date }) }))] }), amounts.map((amount, index) => {
                    const nativeTokenInfo = (0, kit_1.getNativeTokenInfoByChainId)(transaction.chainId, chains);
                    const isNativeToken = (0, utils_1.compareAddress)(transfer.contractAddress, ethers_1.ethers.constants.AddressZero);
                    const isCollectible = transfer.contractInfo?.type === 'ERC721' || transfer.contractInfo?.type === 'ERC1155';
                    let decimals;
                    const tokenId = transfer.tokenIds?.[index];
                    if (isCollectible && tokenId) {
                        decimals = transfer.tokenMetadata?.[tokenId]?.decimals || 0;
                    }
                    else {
                        decimals = isNativeToken ? nativeTokenInfo.decimals : transfer.contractInfo?.decimals;
                    }
                    const amountValue = ethers_1.ethers.utils.formatUnits(amount, decimals);
                    const symbol = isNativeToken ? nativeTokenInfo.symbol : transfer.contractInfo?.symbol || '';
                    const tokenLogoUri = isNativeToken ? nativeTokenInfo.logoURI : transfer.contractInfo?.logoURI;
                    const fiatConversionRate = coinPrices.find((coinPrice) => (0, utils_1.compareAddress)(coinPrice.token.contractAddress, transfer.contractAddress))?.price?.value;
                    return ((0, jsx_runtime_1.jsxs)(design_system_1.Box, { flexDirection: "row", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Box, { flexDirection: "row", gap: "2", justifyContent: "center", alignItems: "center", children: [tokenLogoUri && (0, jsx_runtime_1.jsx)(design_system_1.Image, { src: tokenLogoUri, width: "5", alt: "token logo" }), getTransferAmountLabel((0, utils_1.formatDisplay)(amountValue), symbol, transfer.transferType)] }), isPending && (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '35px', height: '20px' } }), fiatConversionRate && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { fontWeight: "medium", fontSize: "normal", color: "text50", children: `${fiatCurrency.sign}${(Number(amountValue) * fiatConversionRate * conversionRate).toFixed(2)}` }))] }, index));
                })] }));
    };
    return ((0, jsx_runtime_1.jsx)(design_system_1.Box, { background: "backgroundSecondary", borderRadius: "md", padding: "4", gap: "2", alignItems: "center", justifyContent: "center", flexDirection: "column", userSelect: "none", cursor: "pointer", opacity: { hover: '80' }, onClick: () => onClickTransaction(), children: transfers?.map((transfer, position) => {
            return ((0, jsx_runtime_1.jsx)(design_system_1.Box, { width: "full", children: getTransfer({
                    transfer,
                    isFirstItem: position === 0
                }) }, `${transaction.txnHash}-${position}`));
        }) }));
};
exports.TransactionHistoryItem = TransactionHistoryItem;
//# sourceMappingURL=TransactionHistoryItem.js.map