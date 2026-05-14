"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsWallets = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const ListCard_js_1 = require("../../components/ListCard/ListCard.js");
const ListCardWallet_js_1 = require("../../components/ListCard/ListCardWallet.js");
const WalletAccountGradient_js_1 = require("../../components/WalletAccountGradient.js");
const SettingsWallets = () => {
    const { wallets, disconnectWallet } = (0, connect_1.useWallets)();
    const { setOpenConnectModal } = (0, connect_1.useOpenConnectModal)();
    const [disconnectConfirm, setDisconnectConfirm] = (0, react_1.useState)(null);
    const [isUnlinking, setIsUnlinking] = (0, react_1.useState)(false);
    const onClickAddWallet = () => {
        setOpenConnectModal(true);
    };
    const DisconnectButton = ({ label, onClick }) => {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, design_system_1.cn)((0, design_system_1.cardVariants)({ clickable: true }), 'flex flex-row justify-between items-center rounded-full h-9'), onClick: onClick, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "bold", variant: "normal", nowrap: true, children: label }) }));
    };
    const confrimDisconnectAll = () => {
        setDisconnectConfirm('All');
    };
    const confirmDisconnect = (address) => {
        setDisconnectConfirm(address);
    };
    const handleDisconnect = async () => {
        setIsUnlinking(true);
        if (disconnectConfirm === 'All') {
            wallets.forEach(async (wallet) => await disconnectWallet(wallet.address));
        }
        else {
            await disconnectWallet(disconnectConfirm || '');
        }
        setDisconnectConfirm(null);
        setIsUnlinking(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col px-4 pb-4 gap-2", children: [wallets.length > 1 && ((0, jsx_runtime_1.jsxs)(ListCard_js_1.ListCard, { disabled: true, rightChildren: isUnlinking ? ((0, jsx_runtime_1.jsx)(design_system_1.Spinner, {})) : disconnectConfirm === 'All' ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-3", children: [(0, jsx_runtime_1.jsx)(design_system_1.IconButton, { size: "xs", variant: "destructive", icon: design_system_1.CheckmarkIcon, onClick: () => handleDisconnect() }), (0, jsx_runtime_1.jsx)(design_system_1.IconButton, { size: "xs", variant: "ghost", icon: design_system_1.CloseIcon, onClick: () => setDisconnectConfirm(null) })] })) : ((0, jsx_runtime_1.jsx)(DisconnectButton, { label: "Disconnect All", onClick: () => confrimDisconnectAll() })), children: [(0, jsx_runtime_1.jsx)(WalletAccountGradient_js_1.WalletAccountGradient, { accountAddresses: wallets.map(wallet => wallet.address) }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "All" })] }, "all")), wallets.map(wallet => ((0, jsx_runtime_1.jsx)(ListCardWallet_js_1.ListCardWallet, { disabled: true, wallet: wallet, rightChildren: isUnlinking && disconnectConfirm === wallet.address ? ((0, jsx_runtime_1.jsx)(design_system_1.Spinner, {})) : disconnectConfirm === wallet.address ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-3", children: [(0, jsx_runtime_1.jsx)(design_system_1.IconButton, { size: "xs", variant: "destructive", icon: design_system_1.CheckmarkIcon, onClick: () => handleDisconnect() }), (0, jsx_runtime_1.jsx)(design_system_1.IconButton, { size: "xs", variant: "ghost", icon: design_system_1.CloseIcon, onClick: () => setDisconnectConfirm(null) })] })) : ((0, jsx_runtime_1.jsx)(DisconnectButton, { label: "Disconnect", onClick: () => confirmDisconnect(wallet.address) })) }, "all")))] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-background-primary", style: { position: 'absolute', bottom: 0, width: '100%' }, children: [(0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-none m-4", children: (0, jsx_runtime_1.jsx)("div", { className: (0, design_system_1.cn)((0, design_system_1.cardVariants)({ clickable: true }), 'flex bg-background-secondary justify-center items-center rounded-full gap-2 p-3'), onClick: () => onClickAddWallet(), children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "bold", variant: "normal", children: "+ Add new Wallet" }) }) })] })] }));
};
exports.SettingsWallets = SettingsWallets;
//# sourceMappingURL=Wallets.js.map