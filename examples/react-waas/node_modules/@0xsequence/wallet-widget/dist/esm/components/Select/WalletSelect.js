import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { ChevronUpDownIcon, cn, GradientAvatar, Text } from '@0xsequence/design-system';
import { truncateAtIndex } from '@0xsequence/web-sdk-core';
import { useState } from 'react';
import { ListCardWallet } from '../ListCard/ListCardWallet.js';
import { SlideupDrawer } from './SlideupDrawer.js';
const WALLET_SELECT_HEIGHT = '60px';
export const WalletSelect = ({ selectedWallet, disabled = false, onClick }) => {
    const { wallets } = useWallets();
    const [isOpen, setIsOpen] = useState(false);
    const activeWallet = wallets.find(wallet => wallet.isActive);
    const walletOptions = wallets;
    const handleClick = (address) => {
        onClick(address);
        setIsOpen(false);
    };
    return (_jsxs("div", { className: cn('flex bg-background-secondary justify-between items-center rounded-xl px-4 py-3 gap-2 select-none w-full', disabled ? 'opacity-75' : 'hover:opacity-80 cursor-pointer'), style: { height: WALLET_SELECT_HEIGHT }, onClick: () => !disabled && setIsOpen(true), children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Wallet" }), _jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsx(GradientAvatar, { address: activeWallet?.address || '', size: "xs" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: truncateAtIndex(activeWallet?.address || '', 21) })] })] }), _jsx(ChevronUpDownIcon, { className: "text-muted" }), isOpen && (_jsx(SlideupDrawer, { header: _jsx(Text, { variant: "medium", color: "primary", children: "Wallets" }), onClose: () => setIsOpen(false), children: _jsx("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: walletOptions.map(wallet => (_jsx(ListCardWallet, { wallet: wallet, isSelected: wallet.address === selectedWallet, onClick: () => handleClick(wallet.address) }, wallet.address))) }) }))] }));
};
//# sourceMappingURL=WalletSelect.js.map