import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useOpenConnectModal, useWallets } from '@0xsequence/connect';
import { cardVariants, CheckmarkIcon, CloseIcon, cn, IconButton, Separator, Spinner, Text } from '@0xsequence/design-system';
import { useState } from 'react';
import { ListCard } from '../../components/ListCard/ListCard.js';
import { ListCardWallet } from '../../components/ListCard/ListCardWallet.js';
import { WalletAccountGradient } from '../../components/WalletAccountGradient.js';
export const SettingsWallets = () => {
    const { wallets, disconnectWallet } = useWallets();
    const { setOpenConnectModal } = useOpenConnectModal();
    const [disconnectConfirm, setDisconnectConfirm] = useState(null);
    const [isUnlinking, setIsUnlinking] = useState(false);
    const onClickAddWallet = () => {
        setOpenConnectModal(true);
    };
    const DisconnectButton = ({ label, onClick }) => {
        return (_jsx("div", { className: cn(cardVariants({ clickable: true }), 'flex flex-row justify-between items-center rounded-full h-9'), onClick: onClick, children: _jsx(Text, { color: "primary", fontWeight: "bold", variant: "normal", nowrap: true, children: label }) }));
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
    return (_jsxs("div", { className: "flex flex-col justify-between", children: [_jsxs("div", { className: "flex flex-col px-4 pb-4 gap-2", children: [wallets.length > 1 && (_jsxs(ListCard, { disabled: true, rightChildren: isUnlinking ? (_jsx(Spinner, {})) : disconnectConfirm === 'All' ? (_jsxs("div", { className: "flex gap-3", children: [_jsx(IconButton, { size: "xs", variant: "destructive", icon: CheckmarkIcon, onClick: () => handleDisconnect() }), _jsx(IconButton, { size: "xs", variant: "ghost", icon: CloseIcon, onClick: () => setDisconnectConfirm(null) })] })) : (_jsx(DisconnectButton, { label: "Disconnect All", onClick: () => confrimDisconnectAll() })), children: [_jsx(WalletAccountGradient, { accountAddresses: wallets.map(wallet => wallet.address) }), _jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "All" })] }, "all")), wallets.map(wallet => (_jsx(ListCardWallet, { disabled: true, wallet: wallet, rightChildren: isUnlinking && disconnectConfirm === wallet.address ? (_jsx(Spinner, {})) : disconnectConfirm === wallet.address ? (_jsxs("div", { className: "flex gap-3", children: [_jsx(IconButton, { size: "xs", variant: "destructive", icon: CheckmarkIcon, onClick: () => handleDisconnect() }), _jsx(IconButton, { size: "xs", variant: "ghost", icon: CloseIcon, onClick: () => setDisconnectConfirm(null) })] })) : (_jsx(DisconnectButton, { label: "Disconnect", onClick: () => confirmDisconnect(wallet.address) })) }, "all")))] }), _jsxs("div", { className: "bg-background-primary", style: { position: 'absolute', bottom: 0, width: '100%' }, children: [_jsx(Separator, { className: "my-0" }), _jsx("div", { className: "rounded-none m-4", children: _jsx("div", { className: cn(cardVariants({ clickable: true }), 'flex bg-background-secondary justify-center items-center rounded-full gap-2 p-3'), onClick: () => onClickAddWallet(), children: _jsx(Text, { color: "primary", fontWeight: "bold", variant: "normal", children: "+ Add new Wallet" }) }) })] })] }));
};
//# sourceMappingURL=Wallets.js.map