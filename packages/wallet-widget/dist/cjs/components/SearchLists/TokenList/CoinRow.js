"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const index_js_1 = require("../../../hooks/index.js");
const formatBalance_js_1 = require("../../../utils/formatBalance.js");
const TokenImageCustom_js_1 = require("../../Filter/TokenImageCustom.js");
const ListCard_js_1 = require("../../ListCard/ListCard.js");
const CoinRow = ({ balance, onTokenClick, includeUserAddress = false }) => {
    const { fiatCurrency } = (0, index_js_1.useSettings)();
    const chains = (0, wagmi_1.useChains)();
    const { logo, name, symbol, displayBalance, fiatBalance } = (0, formatBalance_js_1.formatTokenInfo)(balance, fiatCurrency.sign, chains);
    const userAddress = (0, viem_1.getAddress)(balance.accountAddress);
    const onClick = () => {
        onTokenClick(balance);
    };
    return ((0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { onClick: onClick, style: { height: '68px' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full gap-2", children: [(0, jsx_runtime_1.jsx)(TokenImageCustom_js_1.TokenImageCustom, { src: logo, symbol: symbol, chainId: balance.chainId }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row gap-2 items-center", style: { flex: '1 1 0', width: 0 }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row w-full", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "overflow-hidden", variant: "normal", color: "primary", ellipsis: true, children: name }) }), includeUserAddress && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1 items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { address: userAddress, size: "xs" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "overflow-hidden", variant: "small", color: "muted", ellipsis: true, children: (0, web_sdk_core_1.formatAddress)(userAddress) })] }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row justify-end items-center", style: { flex: '1 1 0', width: 0 }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-end w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row justify-end w-full", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "overflow-hidden", variant: "small", color: "primary", ellipsis: true, children: displayBalance }) }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "muted", children: fiatBalance })] }) })] }) }));
};
exports.CoinRow = CoinRow;
//# sourceMappingURL=CoinRow.js.map