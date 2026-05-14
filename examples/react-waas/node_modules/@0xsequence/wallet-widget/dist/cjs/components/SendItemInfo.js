"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendItemInfo = exports.SendItemInfoSkeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = __importDefault(require("react"));
const viem_1 = require("viem");
const index_js_1 = require("../hooks/index.js");
const TokenTileImage_js_1 = require("./TokenTileImage.js");
const SendItemInfoSkeleton = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "rounded-full", style: { width: 30, height: 30 } }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 items-start", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: 100, height: 14 } }), (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: 75, height: 14 } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 items-end", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: 100, height: 14 } }), (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: 50, height: 12 } })] })] }));
};
exports.SendItemInfoSkeleton = SendItemInfoSkeleton;
const SendItemInfo = ({ imageUrl, name, decimals, balance, symbol, fiatValue, chainId, showSquareImage, balanceSuffix = 'available' }) => {
    const { fiatCurrency } = (0, index_js_1.useSettings)();
    const formattedBalance = (0, viem_1.formatUnits)(BigInt(balance), decimals);
    const balanceDisplayed = (0, web_sdk_core_1.formatDisplay)(formattedBalance);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-end justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center gap-2", children: [showSquareImage ? ((0, jsx_runtime_1.jsx)("div", { style: { width: '40px' }, children: (0, jsx_runtime_1.jsx)(TokenTileImage_js_1.TokenTileImage, { src: imageUrl, symbol: name }) })) : ((0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: imageUrl, size: "lg" })), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-start", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-1", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: name }), (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: chainId, size: "xs" })] }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "muted", variant: "normal", children: [' ', `${balanceDisplayed} ${symbol} ${balanceSuffix}`] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-end justify-end", children: fiatValue && (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: `${fiatCurrency.sign}${fiatValue}` }) })] }));
};
exports.SendItemInfo = SendItemInfo;
//# sourceMappingURL=SendItemInfo.js.map