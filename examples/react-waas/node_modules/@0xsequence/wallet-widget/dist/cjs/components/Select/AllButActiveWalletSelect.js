"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllButActiveWalletSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const ListCardWallet_js_1 = require("../ListCard/ListCardWallet.js");
const SlideupDrawer_js_1 = require("./SlideupDrawer.js");
const WALLET_SELECT_HEIGHT = '60px';
const AllButActiveWalletSelect = ({ onClick }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const activeWallet = wallets.find(wallet => wallet.isActive);
    const allButActiveWallet = wallets.filter(wallet => wallet.address !== activeWallet?.address);
    const handleClick = (address) => {
        onClick(address);
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-background-secondary justify-between items-center hover:opacity-80 cursor-pointer rounded-xl px-4 py-3 gap-2 select-none", style: { height: WALLET_SELECT_HEIGHT }, onClick: () => setIsOpen(true), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Select Connected Wallet" }) }), (0, jsx_runtime_1.jsx)(design_system_1.ChevronUpDownIcon, { className: "text-muted" }), isOpen && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: "Wallets" }), onClose: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: allButActiveWallet.map(wallet => ((0, jsx_runtime_1.jsx)(ListCardWallet_js_1.ListCardWallet, { wallet: wallet, onClick: () => handleClick(wallet.address) }, wallet.address))) }) }))] }));
};
exports.AllButActiveWalletSelect = AllButActiveWalletSelect;
//# sourceMappingURL=AllButActiveWalletSelect.js.map