import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NetworkImage, Skeleton, Text, TokenImage } from '@0xsequence/design-system';
import { formatDisplay } from '@0xsequence/web-sdk-core';
import React from 'react';
import { formatUnits } from 'viem';
import { useSettings } from '../hooks/index.js';
import { TokenTileImage } from './TokenTileImage.js';
export const SendItemInfoSkeleton = () => {
    return (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex justify-center items-center gap-2", children: [_jsx(Skeleton, { className: "rounded-full", style: { width: 30, height: 30 } }), _jsxs("div", { className: "flex flex-col gap-2 items-start", children: [_jsx(Skeleton, { style: { width: 100, height: 14 } }), _jsx(Skeleton, { style: { width: 75, height: 14 } })] })] }), _jsxs("div", { className: "flex flex-col gap-2 items-end", children: [_jsx(Skeleton, { style: { width: 100, height: 14 } }), _jsx(Skeleton, { style: { width: 50, height: 12 } })] })] }));
};
export const SendItemInfo = ({ imageUrl, name, decimals, balance, symbol, fiatValue, chainId, showSquareImage, balanceSuffix = 'available' }) => {
    const { fiatCurrency } = useSettings();
    const formattedBalance = formatUnits(BigInt(balance), decimals);
    const balanceDisplayed = formatDisplay(formattedBalance);
    return (_jsxs("div", { className: "flex items-end justify-between", children: [_jsxs("div", { className: "flex justify-between items-center gap-2", children: [showSquareImage ? (_jsx("div", { style: { width: '40px' }, children: _jsx(TokenTileImage, { src: imageUrl, symbol: name }) })) : (_jsx(TokenImage, { src: imageUrl, size: "lg" })), _jsxs("div", { className: "flex flex-col items-start", children: [_jsxs("div", { className: "flex flex-row items-center gap-1", children: [_jsx(Text, { variant: "medium", color: "primary", children: name }), _jsx(NetworkImage, { chainId: chainId, size: "xs" })] }), _jsxs(Text, { color: "muted", variant: "normal", children: [' ', `${balanceDisplayed} ${symbol} ${balanceSuffix}`] })] })] }), _jsx("div", { className: "flex flex-col items-end justify-end", children: fiatValue && _jsx(Text, { variant: "normal", color: "primary", children: `${fiatCurrency.sign}${fiatValue}` }) })] }));
};
//# sourceMappingURL=SendItemInfo.js.map