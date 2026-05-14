"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionConfirmation = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_query_1 = require("@tanstack/react-query");
const react_1 = __importStar(require("react"));
const wagmi_1 = require("wagmi");
const FeeOptionSelector_js_1 = require("./FeeOptionSelector.js");
const SendItemInfo_js_1 = require("./SendItemInfo.js");
const useFeeOptionBalances = (feeOptions, chainId) => {
    const { address: accountAddress } = (0, wagmi_1.useConnection)();
    const indexerClient = (0, hooks_1.useIndexerClient)(chainId);
    return (0, react_query_1.useQuery)({
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
const TransactionConfirmation = ({ name, symbol, imageUrl, amount, toAddress, showSquareImage, fiatValue, chainId, balance, decimals, feeOptions, onSelectFeeOption, isLoading, disabled, onConfirm, onCancel }) => {
    const [selectedFeeOptionAddress, setSelectedFeeOptionAddress] = (0, react_1.useState)();
    const { data: feeOptionBalances = [] } = useFeeOptionBalances(feeOptions, chainId);
    const handleFeeOptionSelect = (address) => {
        setSelectedFeeOptionAddress(address);
        onSelectFeeOption?.(address);
    };
    // If feeOptions exist and have options, a selection is required
    // If feeOptions don't exist or have no options, no selection is required
    const isFeeSelectionRequired = Boolean(feeOptions?.options?.length);
    const isConfirmDisabled = (isFeeSelectionRequired && !selectedFeeOptionAddress) || disabled;
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex w-full h-full items-center justify-center bg-background-primary", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 flex-col bg-background-primary w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex bg-background-secondary rounded-xl p-4 pb-3 gap-2 flex-col", children: [(0, jsx_runtime_1.jsx)(SendItemInfo_js_1.SendItemInfo, { imageUrl: imageUrl, showSquareImage: showSquareImage, name: name, symbol: symbol, chainId: chainId, balance: balance, decimals: decimals }), (0, jsx_runtime_1.jsxs)("div", { className: "flex mt-2 gap-1 flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "muted", children: "Amount" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "normal", color: "primary", children: [amount, " ", symbol] }), fiatValue && ((0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "small", color: "muted", children: ["~$", fiatValue] }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex mt-2 gap-1 flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "muted", children: "To" }), (0, jsx_runtime_1.jsx)(design_system_1.Card, { className: "flex w-full flex-row items-center", style: { height: '52px' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-center items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { size: "sm", address: toAddress }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", variant: "normal", children: `0x${(0, web_sdk_core_1.truncateAtMiddle)(toAddress.substring(2), 10)}` })] }) })] }), isFeeSelectionRequired && feeOptions?.options && ((0, jsx_runtime_1.jsx)(FeeOptionSelector_js_1.FeeOptionSelector, { txnFeeOptions: feeOptions.options, feeOptionBalances: feeOptionBalances, selectedFeeOptionAddress: selectedFeeOptionAddress, setSelectedFeeOptionAddress: handleFeeOptionSelect }))] }), (0, jsx_runtime_1.jsx)("div", { className: "flex mt-3 gap-2", children: isLoading ? ((0, jsx_runtime_1.jsx)("div", { className: "flex w-full items-center justify-center", style: { height: '52px' }, children: (0, jsx_runtime_1.jsx)(design_system_1.Spinner, {}) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(design_system_1.Button, { className: "w-full", variant: "ghost", size: "lg", onClick: onCancel, children: "Cancel" }), (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "w-full", variant: "primary", size: "lg", onClick: () => {
                                    onConfirm();
                                }, disabled: isConfirmDisabled, children: ["Confirm", (0, jsx_runtime_1.jsx)(design_system_1.ChevronRightIcon, {})] })] })) })] }) }));
};
exports.TransactionConfirmation = TransactionConfirmation;
//# sourceMappingURL=TransactionConfirmation.js.map