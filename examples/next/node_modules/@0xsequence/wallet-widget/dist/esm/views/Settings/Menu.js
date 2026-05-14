import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSocialLink, useWallets } from '@0xsequence/connect';
import { CurrencyIcon, Text, WalletIcon } from '@0xsequence/design-system';
import { StackedIconTag } from '../../components/IconWrappers/StackedIconTag.js';
import { ListCard } from '../../components/ListCard/ListCard.js';
import { useNavigation, useSettings } from '../../hooks/index.js';
import { useShared } from '../../hooks/useShared.js';
export const SettingsMenu = () => {
    const { setIsSocialLinkOpen } = useSocialLink();
    const { wallets } = useWallets();
    const { fiatCurrency } = useSettings();
    const { isGuest } = useShared();
    // const activeWallet = wallets.find(wallet => wallet.isActive)
    // const isEmbedded = activeWallet?.id.includes('waas')
    const { setNavigation } = useNavigation();
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
    const walletsPreview = (_jsx(StackedIconTag, { label: _jsx(Text, { color: "primary", children: wallets.length }), iconList: wallets.map(wallet => wallet.address), shape: "rounded", isAccount: true }));
    const currencyPreview = (_jsxs(Text, { nowrap: true, color: "primary", children: [fiatCurrency.symbol, " ", fiatCurrency.sign] }));
    return (_jsx("div", { className: "px-4 pb-4", children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs(ListCard, { type: "chevron", rightChildren: walletsPreview, onClick: onClickWallets, children: [_jsx(WalletIcon, { className: "text-primary w-6 h-6" }), _jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Manage Wallets" })] }), _jsxs(ListCard, { type: "chevron", rightChildren: currencyPreview, onClick: onClickCurrency, children: [_jsx(CurrencyIcon, { className: "text-primary w-6 h-6" }), _jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Manage Currency" })] }), _jsx(ListCard, { type: "chevron", onClick: onClickPreferences, children: _jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Preferences" }) }), isGuest && (_jsx(ListCard, { type: "chevron", onClick: onClickGuest, children: _jsx(Text, { color: "warning", fontWeight: "medium", variant: "normal", children: "Link Guest Account" }) }))] }) }));
};
//# sourceMappingURL=Menu.js.map