import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn, Text, TokenImage } from '@0xsequence/design-system';
import { useState } from 'react';
import { formatUnits, parseUnits, zeroAddress } from 'viem';
import { Alert } from './Alert.js';
const isBalanceSufficient = (balance, fee, decimals) => {
    const balanceBN = parseUnits(balance, decimals);
    const feeBN = parseUnits(fee, decimals);
    return balanceBN >= feeBN;
};
export const FeeOptionSelector = ({ txnFeeOptions, feeOptionBalances, selectedFeeOptionAddress, setSelectedFeeOptionAddress }) => {
    const [feeOptionAlert, setFeeOptionAlert] = useState();
    const sortedOptions = [...txnFeeOptions].sort((a, b) => {
        const balanceA = feeOptionBalances.find(balance => balance.tokenName === a.token.name);
        const balanceB = feeOptionBalances.find(balance => balance.tokenName === b.token.name);
        const isSufficientA = balanceA ? isBalanceSufficient(balanceA.balance, a.value, a.token.decimals || 0) : false;
        const isSufficientB = balanceB ? isBalanceSufficient(balanceB.balance, b.value, b.token.decimals || 0) : false;
        return isSufficientA === isSufficientB ? 0 : isSufficientA ? -1 : 1;
    });
    return (_jsxs("div", { className: "mt-3 w-full", children: [_jsx(Text, { variant: "normal", color: "primary", fontWeight: "bold", children: "Select a fee option" }), _jsx("div", { className: "flex flex-col mt-2 gap-2", children: sortedOptions.map((option, index) => {
                    const isSelected = selectedFeeOptionAddress === (option.token.contractAddress ?? zeroAddress);
                    const balance = feeOptionBalances.find(b => b.tokenName === option.token.name);
                    const isSufficient = isBalanceSufficient(balance?.balance || '0', option.value, option.token.decimals || 0);
                    return (_jsx("div", { className: cn('px-3 py-2 rounded-xl border-2 border-solid bg-background-raised', isSelected ? 'border-border-focus' : 'border-transparent'), onClick: () => {
                            if (isSufficient) {
                                setSelectedFeeOptionAddress(option.token.contractAddress ?? zeroAddress);
                                setFeeOptionAlert(undefined);
                            }
                            else {
                                setFeeOptionAlert({
                                    title: `Insufficient ${option.token.name} balance`,
                                    description: `Please select another fee option or add funds to your wallet.`,
                                    variant: 'warning'
                                });
                            }
                        }, children: _jsxs("div", { className: "flex flex-row justify-between items-center", children: [_jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsx(TokenImage, { src: option.token.logoURL, symbol: option.token.name }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Text, { variant: "small", color: "primary", fontWeight: "bold", children: option.token.name }), _jsxs(Text, { variant: "xsmall", color: "secondary", children: ["Fee:", ' ', parseFloat(formatUnits(BigInt(option.value), option.token.decimals || 0)).toLocaleString(undefined, {
                                                            maximumFractionDigits: 6
                                                        })] })] })] }), _jsxs("div", { className: "flex flex-col items-end", children: [_jsx(Text, { variant: "xsmall", color: "secondary", children: "Balance:" }), _jsx(Text, { variant: "xsmall", color: "primary", children: parseFloat(formatUnits(BigInt(balance?.balance || '0'), option.token.decimals || 0)).toLocaleString(undefined, { maximumFractionDigits: 6 }) })] })] }) }, index));
                }) }), _jsx("div", { className: "flex mt-3 items-end justify-center flex-col", children: feeOptionAlert && (_jsx("div", { className: "mt-3", children: _jsx(Alert, { title: feeOptionAlert.title, description: feeOptionAlert.description, secondaryDescription: feeOptionAlert.secondaryDescription, variant: feeOptionAlert.variant }) })) })] }));
};
//# sourceMappingURL=FeeOptionSelector.js.map