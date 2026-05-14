"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = require("react");
const ListCardWallet_js_1 = require("../ListCard/ListCardWallet.js");
const SlideupDrawer_js_1 = require("./SlideupDrawer.js");
const WALLET_SELECT_HEIGHT = '60px';
const WalletSelect = ({ selectedWallet, disabled = false, onClick }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const activeWallet = wallets.find(wallet => wallet.isActive);
    const walletOptions = wallets;
    const handleClick = (address) => {
        onClick(address);
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, design_system_1.cn)('flex bg-background-secondary justify-between items-center rounded-xl px-4 py-3 gap-2 select-none w-full', disabled ? 'opacity-75' : 'hover:opacity-80 cursor-pointer'), style: { height: WALLET_SELECT_HEIGHT }, onClick: () => !disabled && setIsOpen(true), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Wallet" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { address: activeWallet?.address || '', size: "xs" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: (0, web_sdk_core_1.truncateAtIndex)(activeWallet?.address || '', 21) })] })] }), (0, jsx_runtime_1.jsx)(design_system_1.ChevronUpDownIcon, { className: "text-muted" }), isOpen && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: "Wallets" }), onClose: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: walletOptions.map(wallet => ((0, jsx_runtime_1.jsx)(ListCardWallet_js_1.ListCardWallet, { wallet: wallet, isSelected: wallet.address === selectedWallet, onClick: () => handleClick(wallet.address) }, wallet.address))) }) }))] }));
};
exports.WalletSelect = WalletSelect;
//# sourceMappingURL=WalletSelect.js.map