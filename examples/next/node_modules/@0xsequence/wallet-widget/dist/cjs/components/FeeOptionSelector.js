"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeOptionSelector = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const viem_1 = require("viem");
const Alert_js_1 = require("./Alert.js");
const isBalanceSufficient = (balance, fee, decimals) => {
    const balanceBN = (0, viem_1.parseUnits)(balance, decimals);
    const feeBN = (0, viem_1.parseUnits)(fee, decimals);
    return balanceBN >= feeBN;
};
const FeeOptionSelector = ({ txnFeeOptions, feeOptionBalances, selectedFeeOptionAddress, setSelectedFeeOptionAddress }) => {
    const [feeOptionAlert, setFeeOptionAlert] = (0, react_1.useState)();
    const sortedOptions = [...txnFeeOptions].sort((a, b) => {
        const balanceA = feeOptionBalances.find(balance => balance.tokenName === a.token.name);
        const balanceB = feeOptionBalances.find(balance => balance.tokenName === b.token.name);
        const isSufficientA = balanceA ? isBalanceSufficient(balanceA.balance, a.value, a.token.decimals || 0) : false;
        const isSufficientB = balanceB ? isBalanceSufficient(balanceB.balance, b.value, b.token.decimals || 0) : false;
        return isSufficientA === isSufficientB ? 0 : isSufficientA ? -1 : 1;
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-3 w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", fontWeight: "bold", children: "Select a fee option" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col mt-2 gap-2", children: sortedOptions.map((option, index) => {
                    const isSelected = selectedFeeOptionAddress === (option.token.contractAddress ?? viem_1.zeroAddress);
                    const balance = feeOptionBalances.find(b => b.tokenName === option.token.name);
                    const isSufficient = isBalanceSufficient(balance?.balance || '0', option.value, option.token.decimals || 0);
                    return ((0, jsx_runtime_1.jsx)("div", { className: (0, design_system_1.cn)('px-3 py-2 rounded-xl border-2 border-solid bg-background-raised', isSelected ? 'border-border-focus' : 'border-transparent'), onClick: () => {
                            if (isSufficient) {
                                setSelectedFeeOptionAddress(option.token.contractAddress ?? viem_1.zeroAddress);
                                setFeeOptionAlert(undefined);
                            }
                            else {
                                setFeeOptionAlert({
                                    title: `Insufficient ${option.token.name} balance`,
                                    description: `Please select another fee option or add funds to your wallet.`,
                                    variant: 'warning'
                                });
                            }
                        }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: option.token.logoURL, symbol: option.token.name }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "primary", fontWeight: "bold", children: option.token.name }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "xsmall", color: "secondary", children: ["Fee:", ' ', parseFloat((0, viem_1.formatUnits)(BigInt(option.value), option.token.decimals || 0)).toLocaleString(undefined, {
                                                            maximumFractionDigits: 6
                                                        })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-end", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", color: "secondary", children: "Balance:" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", color: "primary", children: parseFloat((0, viem_1.formatUnits)(BigInt(balance?.balance || '0'), option.token.decimals || 0)).toLocaleString(undefined, { maximumFractionDigits: 6 }) })] })] }) }, index));
                }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex mt-3 items-end justify-center flex-col", children: feeOptionAlert && ((0, jsx_runtime_1.jsx)("div", { className: "mt-3", children: (0, jsx_runtime_1.jsx)(Alert_js_1.Alert, { title: feeOptionAlert.title, description: feeOptionAlert.description, secondaryDescription: feeOptionAlert.secondaryDescription, variant: feeOptionAlert.variant }) })) })] }));
};
exports.FeeOptionSelector = FeeOptionSelector;
//# sourceMappingURL=FeeOptionSelector.js.map