"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const wagmi_1 = require("wagmi");
const CopyButton_js_1 = require("../../components/CopyButton.js");
const index_js_1 = require("../../components/SearchLists/index.js");
const WalletAccountGradient_js_1 = require("../../components/WalletAccountGradient.js");
const index_js_2 = require("../../hooks/index.js");
const useShared_js_1 = require("../../hooks/useShared.js");
const Home = () => {
    const { isGuest, signInDisplay } = (0, useShared_js_1.useShared)();
    const { wallets: allWallets } = (0, connect_1.useWallets)();
    const { fiatCurrency } = (0, index_js_2.useSettings)();
    const { totalValue } = (0, index_js_2.useValueRegistry)();
    const { setIsSocialLinkOpen } = (0, connect_1.useSocialLink)();
    const { address: accountAddress } = (0, wagmi_1.useConnection)();
    const onClickLinkGuestAccount = () => {
        setIsSocialLinkOpen(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center w-full px-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flew-row justify-between items-center w-full py-4 gap-4", children: [allWallets.length > 1 ? ((0, jsx_runtime_1.jsx)(WalletAccountGradient_js_1.WalletAccountGradient, { accountAddresses: allWallets.map(wallet => wallet.address) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center w-full gap-2", children: [(0, jsx_runtime_1.jsx)(WalletAccountGradient_js_1.WalletAccountGradient, { accountAddresses: allWallets.map(wallet => wallet.address) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1 items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: (0, connect_1.truncateAtIndex)(accountAddress || '', 8) }), (0, jsx_runtime_1.jsx)(CopyButton_js_1.CopyButton, { text: accountAddress || '' })] }), signInDisplay && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "muted", fontWeight: "medium", variant: "small", children: signInDisplay }))] })] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-end", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "muted", variant: "small", children: "Balance" }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "primary", variant: "xlarge", nowrap: true, children: [fiatCurrency.symbol, " ", fiatCurrency.sign, totalValue] })] })] }), isGuest && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "cursor-pointer hover:opacity-80 w-full", color: "warning", variant: "medium", nowrap: true, onClick: () => {
                            onClickLinkGuestAccount();
                        }, children: "Click here to link your guest account" }))] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full relative", children: (0, jsx_runtime_1.jsx)(index_js_1.GeneralList, { variant: "default" }) })] }));
};
exports.Home = Home;
//# sourceMappingURL=index.js.map