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
exports.HomeHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const PopoverPrimitive = __importStar(require("@radix-ui/react-popover"));
const react_1 = require("motion/react");
const react_2 = require("react");
const useNavigation_js_1 = require("../../../hooks/useNavigation.js");
const useSettings_js_1 = require("../../../hooks/useSettings.js");
const useValueRegistry_js_1 = require("../../../hooks/useValueRegistry.js");
const ListCardWallet_js_1 = require("../../ListCard/ListCardWallet.js");
const SlideupDrawer_js_1 = require("../../Select/SlideupDrawer.js");
const HomeHeader = () => {
    const { setOpenConnectModal } = (0, connect_1.useOpenConnectModal)();
    const { fiatCurrency } = (0, useSettings_js_1.useSettings)();
    const { totalValue } = (0, useValueRegistry_js_1.useValueRegistry)();
    const { wallets } = (0, connect_1.useWallets)();
    const [isWalletViewOpen, setIsWalletViewOpen] = (0, react_2.useState)(false);
    const [isOperationMenuOpen, setIsOperationMenuOpen] = (0, react_2.useState)(false);
    const { setNavigation } = (0, useNavigation_js_1.useNavigation)();
    const onClickWallets = () => {
        setIsWalletViewOpen(true);
    };
    const handleManageWallets = () => {
        setIsWalletViewOpen(false);
        setNavigation({
            location: 'settings-wallets'
        });
    };
    const onClickSend = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'send-general'
        });
    };
    const onClickSwap = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'swap'
        });
    };
    const onClickReceive = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'receive'
        });
    };
    const onClickBuy = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'buy'
        });
    };
    const onClickSearch = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'search'
        });
    };
    const onClickSettings = () => {
        setIsOperationMenuOpen(false);
        setNavigation({
            location: 'settings'
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-between h-full w-full", style: { position: 'relative' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-start p-4 gap-3", children: [(0, jsx_runtime_1.jsx)(design_system_1.IconButton, { className: "bg-background-secondary", icon: design_system_1.WalletIcon, size: "sm", onClick: () => onClickWallets() }), (0, jsx_runtime_1.jsxs)(PopoverPrimitive.Root, { open: isOperationMenuOpen, onOpenChange: setIsOperationMenuOpen, children: [(0, jsx_runtime_1.jsx)(PopoverPrimitive.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(design_system_1.IconButton, { className: "bg-background-secondary", icon: design_system_1.SwapIcon, size: "sm" }) }), isOperationMenuOpen && ((0, jsx_runtime_1.jsx)(PopoverPrimitive.Content, { className: "flex flex-col p-2 gap-2 z-30 rounded-xl border border-border-normal bg-background-primary", asChild: true, side: "bottom", sideOffset: 8, alignOffset: -8, align: "start", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickSend();
                                            }, children: [(0, jsx_runtime_1.jsx)(design_system_1.ArrowUpIcon, { className: "text-primary" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Send" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickSwap();
                                            }, children: [(0, jsx_runtime_1.jsx)(design_system_1.SwapIcon, { className: "text-primary" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Swap" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickReceive();
                                            }, children: [(0, jsx_runtime_1.jsx)(design_system_1.ScanIcon, { className: "text-primary" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Receive" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickBuy();
                                            }, children: [(0, jsx_runtime_1.jsx)(design_system_1.AddIcon, { className: "text-primary" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Buy" })] })] }) }))] }), (0, jsx_runtime_1.jsx)(design_system_1.IconButton, { className: "bg-background-secondary", icon: design_system_1.SearchIcon, size: "sm", onClick: () => onClickSearch() }), (0, jsx_runtime_1.jsx)(design_system_1.IconButton, { className: "bg-background-secondary", icon: design_system_1.SettingsIcon, size: "sm", onClick: () => onClickSettings() })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0 w-full", style: { position: 'absolute', bottom: 0 } }), (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: isWalletViewOpen && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { onClose: () => setIsWalletViewOpen(false), header: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: "Connected Wallets" }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "small", color: "muted", children: [fiatCurrency.sign, totalValue, " ", fiatCurrency.symbol] })] }), footer: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row w-full gap-3", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "flex justify-center items-center flex-1", onClick: () => setOpenConnectModal(true), children: [(0, jsx_runtime_1.jsx)(design_system_1.AddIcon, {}), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Add Wallet" })] }), (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "flex justify-center items-center flex-1", onClick: () => handleManageWallets(), children: [(0, jsx_runtime_1.jsx)(design_system_1.SettingsIcon, {}), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Manage" })] })] }), children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-4", children: wallets.map(wallet => ((0, jsx_runtime_1.jsx)(ListCardWallet_js_1.ListCardWallet, { disabled: true, wallet: wallet }, wallet.address))) }) })) })] }));
};
exports.HomeHeader = HomeHeader;
//# sourceMappingURL=HomeHeader.js.map