import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { ChevronUpDownIcon, Text } from '@0xsequence/design-system';
import { useState } from 'react';
import { ListCardWallet } from '../ListCard/ListCardWallet.js';
import { SlideupDrawer } from './SlideupDrawer.js';
const WALLET_SELECT_HEIGHT = '60px';
export const AllButActiveWalletSelect = ({ onClick }) => {
    const { wallets } = useWallets();
    const [isOpen, setIsOpen] = useState(false);
    const activeWallet = wallets.find(wallet => wallet.isActive);
    const allButActiveWallet = wallets.filter(wallet => wallet.address !== activeWallet?.address);
    const handleClick = (address) => {
        onClick(address);
        setIsOpen(false);
    };
    return (_jsxs("div", { className: "flex bg-background-secondary justify-between items-center hover:opacity-80 cursor-pointer rounded-xl px-4 py-3 gap-2 select-none", style: { height: WALLET_SELECT_HEIGHT }, onClick: () => setIsOpen(true), children: [_jsx("div", { className: "flex flex-col gap-2", children: _jsx(Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Select Connected Wallet" }) }), _jsx(ChevronUpDownIcon, { className: "text-muted" }), isOpen && (_jsx(SlideupDrawer, { header: _jsx(Text, { variant: "medium", color: "primary", children: "Wallets" }), onClose: () => setIsOpen(false), children: _jsx("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: allButActiveWallet.map(wallet => (_jsx(ListCardWallet, { wallet: wallet, onClick: () => handleClick(wallet.address) }, wallet.address))) }) }))] }));
};
//# sourceMappingURL=AllButActiveWalletSelect.js.map