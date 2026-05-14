import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useOpenConnectModal, useWallets } from '@0xsequence/connect';
import { AddIcon, ArrowUpIcon, Button, IconButton, ScanIcon, SearchIcon, Separator, SettingsIcon, SwapIcon, Text, WalletIcon } from '@0xsequence/design-system';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useNavigation } from '../../../hooks/useNavigation.js';
import { useSettings } from '../../../hooks/useSettings.js';
import { useValueRegistry } from '../../../hooks/useValueRegistry.js';
import { ListCardWallet } from '../../ListCard/ListCardWallet.js';
import { SlideupDrawer } from '../../Select/SlideupDrawer.js';
export const HomeHeader = () => {
    const { setOpenConnectModal } = useOpenConnectModal();
    const { fiatCurrency } = useSettings();
    const { totalValue } = useValueRegistry();
    const { wallets } = useWallets();
    const [isWalletViewOpen, setIsWalletViewOpen] = useState(false);
    const [isOperationMenuOpen, setIsOperationMenuOpen] = useState(false);
    const { setNavigation } = useNavigation();
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
    return (_jsxs("div", { className: "flex flex-col justify-between h-full w-full", style: { position: 'relative' }, children: [_jsxs("div", { className: "flex flex-row items-start p-4 gap-3", children: [_jsx(IconButton, { className: "bg-background-secondary", icon: WalletIcon, size: "sm", onClick: () => onClickWallets() }), _jsxs(PopoverPrimitive.Root, { open: isOperationMenuOpen, onOpenChange: setIsOperationMenuOpen, children: [_jsx(PopoverPrimitive.Trigger, { asChild: true, children: _jsx(IconButton, { className: "bg-background-secondary", icon: SwapIcon, size: "sm" }) }), isOperationMenuOpen && (_jsx(PopoverPrimitive.Content, { className: "flex flex-col p-2 gap-2 z-30 rounded-xl border border-border-normal bg-background-primary", asChild: true, side: "bottom", sideOffset: 8, alignOffset: -8, align: "start", children: _jsxs("div", { children: [_jsxs("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickSend();
                                            }, children: [_jsx(ArrowUpIcon, { className: "text-primary" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Send" })] }), _jsxs("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickSwap();
                                            }, children: [_jsx(SwapIcon, { className: "text-primary" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Swap" })] }), _jsxs("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickReceive();
                                            }, children: [_jsx(ScanIcon, { className: "text-primary" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Receive" })] }), _jsxs("div", { className: "flex flex-row items-center py-2 px-4 gap-2 bg-background-secondary rounded-lg hover:opacity-80 cursor-pointer", onClick: () => {
                                                onClickBuy();
                                            }, children: [_jsx(AddIcon, { className: "text-primary" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Buy" })] })] }) }))] }), _jsx(IconButton, { className: "bg-background-secondary", icon: SearchIcon, size: "sm", onClick: () => onClickSearch() }), _jsx(IconButton, { className: "bg-background-secondary", icon: SettingsIcon, size: "sm", onClick: () => onClickSettings() })] }), _jsx(Separator, { className: "my-0 w-full", style: { position: 'absolute', bottom: 0 } }), _jsx(AnimatePresence, { children: isWalletViewOpen && (_jsx(SlideupDrawer, { onClose: () => setIsWalletViewOpen(false), header: _jsxs("div", { className: "flex flex-row justify-between items-center w-full", children: [_jsx(Text, { variant: "medium", color: "primary", children: "Connected Wallets" }), _jsxs(Text, { variant: "small", color: "muted", children: [fiatCurrency.sign, totalValue, " ", fiatCurrency.symbol] })] }), footer: _jsxs("div", { className: "flex flex-row w-full gap-3", children: [_jsxs(Button, { className: "flex justify-center items-center flex-1", onClick: () => setOpenConnectModal(true), children: [_jsx(AddIcon, {}), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Add Wallet" })] }), _jsxs(Button, { className: "flex justify-center items-center flex-1", onClick: () => handleManageWallets(), children: [_jsx(SettingsIcon, {}), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Manage" })] })] }), children: _jsx("div", { className: "flex flex-col gap-4", children: wallets.map(wallet => (_jsx(ListCardWallet, { disabled: true, wallet: wallet }, wallet.address))) }) })) })] }));
};
//# sourceMappingURL=HomeHeader.js.map