import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@0xsequence/design-system';
import { truncateAtIndex } from '@0xsequence/web-sdk-core';
import { useEffect, useState } from 'react';
import { useConnections } from 'wagmi';
import { useSettings } from '../../hooks/useSettings.js';
import { useValueRegistry } from '../../hooks/useValueRegistry.js';
import { CopyButton } from '../CopyButton.js';
import { WalletAccountGradient } from '../WalletAccountGradient.js';
import { ListCard } from './ListCard.js';
export const ListCardWallet = ({ wallet, disabled = false, isSelected = false, rightChildren = null, onClick = () => { } }) => {
    const { fiatCurrency } = useSettings();
    const { valueRegistryMap } = useValueRegistry();
    const [signInDisplay, setSignInDisplay] = useState('');
    const connections = useConnections();
    const connector = connections.find(c => c.accounts.find(a => a === wallet.address))?.connector;
    useEffect(() => {
        const fetchSignInDisplay = async () => {
            const sequenceWaas = (await connector?.sequenceWaas);
            if (sequenceWaas) {
                const sequenceWaasAccounts = await sequenceWaas.listAccounts();
                const waasEmail = sequenceWaasAccounts.accounts.find(account => account.type === 'OIDC')?.email;
                const nonGuest = sequenceWaasAccounts.accounts.find(account => account.type !== 'Guest');
                let backupEmail = '';
                if (sequenceWaasAccounts.accounts.length > 0) {
                    backupEmail = sequenceWaasAccounts.accounts[0].email;
                }
                setSignInDisplay(waasEmail || nonGuest?.email || backupEmail);
            }
            else {
                setSignInDisplay(connector?.name || '');
            }
        };
        fetchSignInDisplay();
    }, [connector]);
    return (_jsxs(ListCard, { disabled: disabled, type: isSelected ? 'radio' : 'default', onClick: onClick, isSelected: isSelected, rightChildren: rightChildren ? (rightChildren) : (_jsxs("div", { className: "flex flex-row gap-3 items-center", children: [_jsxs("div", { className: "flex flex-row gap-1 items-center", children: [_jsxs(Text, { color: "muted", variant: "small", children: [fiatCurrency.sign, valueRegistryMap.find(w => w.accountAddress === wallet.address)?.value] }), _jsx(Text, { color: "muted", variant: "small", children: fiatCurrency.symbol })] }), disabled && _jsx(CopyButton, { variant: "text", size: "md", text: wallet.address, onClick: e => e.stopPropagation() })] })), children: [_jsx(WalletAccountGradient, { accountAddresses: [wallet.address] }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Text, { className: "flex flex-row gap-1 items-center", nowrap: true, color: "primary", fontWeight: "medium", variant: "normal", children: truncateAtIndex(wallet.address, 13) }), signInDisplay && (_jsx(Text, { color: "muted", variant: "small", children: signInDisplay }))] })] }));
};
//# sourceMappingURL=ListCardWallet.js.map