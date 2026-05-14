import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useConnection } from 'wagmi';
import { SharedContextProvider } from '../../../contexts/Shared.js';
export const SharedProvider = ({ children }) => {
    const { connector } = useConnection();
    const [isGuest, setIsGuest] = useState(false);
    const [signInDisplay, setSignInDisplay] = useState('');
    const [sequenceWaasAccounts, setSequenceWaasAccounts] = useState(null);
    useEffect(() => {
        const fetchSequenceWaasAccounts = async () => {
            const sequenceWaas = connector?.sequenceWaas;
            if (sequenceWaas) {
                const sequenceWaasAccounts = await sequenceWaas.listAccounts();
                setSequenceWaasAccounts(sequenceWaasAccounts);
            }
        };
        fetchSequenceWaasAccounts();
        const handleAccountsUpdated = () => {
            fetchSequenceWaasAccounts();
        };
        window.addEventListener('sequence:waas-accounts-updated', handleAccountsUpdated);
        return () => {
            window.removeEventListener('sequence:waas-accounts-updated', handleAccountsUpdated);
        };
    }, [connector]);
    useEffect(() => {
        if (sequenceWaasAccounts) {
            const { accounts, currentAccountId } = sequenceWaasAccounts;
            const current = accounts.find(account => account.id && account.id === currentAccountId) || accounts[0];
            const nonGuestAccount = accounts.find(account => account.type !== 'Guest');
            const guestOnly = accounts.length > 0 && accounts.every(account => account.type === 'Guest');
            setIsGuest(guestOnly);
            if (guestOnly) {
                setSignInDisplay('Guest');
                return;
            }
            const waasEmail = accounts.find(account => account.type === 'OIDC')?.email || nonGuestAccount?.email;
            setSignInDisplay(waasEmail || current?.email || '');
        }
    }, [sequenceWaasAccounts]);
    return _jsx(SharedContextProvider, { value: { isGuest, signInDisplay }, children: children });
};
//# sourceMappingURL=SharedProvider.js.map