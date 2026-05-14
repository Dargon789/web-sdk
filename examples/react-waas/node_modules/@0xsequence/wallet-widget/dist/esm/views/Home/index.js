import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { truncateAtIndex, useSocialLink, useWallets } from '@0xsequence/connect';
import { Text } from '@0xsequence/design-system';
import { useConnection } from 'wagmi';
import { CopyButton } from '../../components/CopyButton.js';
import { GeneralList } from '../../components/SearchLists/index.js';
import { WalletAccountGradient } from '../../components/WalletAccountGradient.js';
import { useSettings, useValueRegistry } from '../../hooks/index.js';
import { useShared } from '../../hooks/useShared.js';
export const Home = () => {
    const { isGuest, signInDisplay } = useShared();
    const { wallets: allWallets } = useWallets();
    const { fiatCurrency } = useSettings();
    const { totalValue } = useValueRegistry();
    const { setIsSocialLinkOpen } = useSocialLink();
    const { address: accountAddress } = useConnection();
    const onClickLinkGuestAccount = () => {
        setIsSocialLinkOpen(true);
    };
    return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsxs("div", { className: "flex flex-col items-center w-full px-4", children: [_jsxs("div", { className: "flex flew-row justify-between items-center w-full py-4 gap-4", children: [allWallets.length > 1 ? (_jsx(WalletAccountGradient, { accountAddresses: allWallets.map(wallet => wallet.address) })) : (_jsxs("div", { className: "flex flex-row items-center w-full gap-2", children: [_jsx(WalletAccountGradient, { accountAddresses: allWallets.map(wallet => wallet.address) }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex flex-row gap-1 items-center", children: [_jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: truncateAtIndex(accountAddress || '', 8) }), _jsx(CopyButton, { text: accountAddress || '' })] }), signInDisplay && (_jsx(Text, { color: "muted", fontWeight: "medium", variant: "small", children: signInDisplay }))] })] })), _jsxs("div", { className: "flex flex-col items-end", children: [_jsx(Text, { color: "muted", variant: "small", children: "Balance" }), _jsxs(Text, { color: "primary", variant: "xlarge", nowrap: true, children: [fiatCurrency.symbol, " ", fiatCurrency.sign, totalValue] })] })] }), isGuest && (_jsx(Text, { className: "cursor-pointer hover:opacity-80 w-full", color: "warning", variant: "medium", nowrap: true, onClick: () => {
                            onClickLinkGuestAccount();
                        }, children: "Click here to link your guest account" }))] }), _jsx("div", { className: "w-full relative", children: _jsx(GeneralList, { variant: "default" }) })] }));
};
//# sourceMappingURL=index.js.map