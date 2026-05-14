"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const StackedIconTag_js_1 = require("../../components/IconWrappers/StackedIconTag.js");
const ListCard_js_1 = require("../../components/ListCard/ListCard.js");
const index_js_1 = require("../../hooks/index.js");
const useShared_js_1 = require("../../hooks/useShared.js");
const SettingsMenu = () => {
    const { setIsSocialLinkOpen } = (0, connect_1.useSocialLink)();
    const { wallets } = (0, connect_1.useWallets)();
    const { fiatCurrency } = (0, index_js_1.useSettings)();
    const { isGuest } = (0, useShared_js_1.useShared)();
    // const activeWallet = wallets.find(wallet => wallet.isActive)
    // const isEmbedded = activeWallet?.id.includes('waas')
    const { setNavigation } = (0, index_js_1.useNavigation)();
    const onClickWallets = () => {
        setNavigation({
            location: 'settings-wallets'
        });
    };
    // const onClickProfiles = () => {
    //   setNavigation({
    //     location: 'settings-profiles'
    //   })
    // }
    // const onClickApps = () => {
    //   setNavigation({
    //     location: 'settings-apps'
    //   })
    // }
    const onClickCurrency = () => {
        setNavigation({
            location: 'settings-currency'
        });
    };
    const onClickGuest = () => {
        setIsSocialLinkOpen(true);
    };
    const onClickPreferences = () => {
        setNavigation({
            location: 'settings-preferences'
        });
    };
    const walletsPreview = ((0, jsx_runtime_1.jsx)(StackedIconTag_js_1.StackedIconTag, { label: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", children: wallets.length }), iconList: wallets.map(wallet => wallet.address), shape: "rounded", isAccount: true }));
    const currencyPreview = ((0, jsx_runtime_1.jsxs)(design_system_1.Text, { nowrap: true, color: "primary", children: [fiatCurrency.symbol, " ", fiatCurrency.sign] }));
    return ((0, jsx_runtime_1.jsx)("div", { className: "px-4 pb-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsxs)(ListCard_js_1.ListCard, { type: "chevron", rightChildren: walletsPreview, onClick: onClickWallets, children: [(0, jsx_runtime_1.jsx)(design_system_1.WalletIcon, { className: "text-primary w-6 h-6" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Manage Wallets" })] }), (0, jsx_runtime_1.jsxs)(ListCard_js_1.ListCard, { type: "chevron", rightChildren: currencyPreview, onClick: onClickCurrency, children: [(0, jsx_runtime_1.jsx)(design_system_1.CurrencyIcon, { className: "text-primary w-6 h-6" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Manage Currency" })] }), (0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { type: "chevron", onClick: onClickPreferences, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Preferences" }) }), isGuest && ((0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { type: "chevron", onClick: onClickGuest, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "warning", fontWeight: "medium", variant: "normal", children: "Link Guest Account" }) }))] }) }));
};
exports.SettingsMenu = SettingsMenu;
//# sourceMappingURL=Menu.js.map