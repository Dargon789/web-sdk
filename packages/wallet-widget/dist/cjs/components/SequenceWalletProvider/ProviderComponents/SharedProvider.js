"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const Shared_js_1 = require("../../../contexts/Shared.js");
const SharedProvider = ({ children }) => {
    const { connector } = (0, wagmi_1.useConnection)();
    const [isGuest, setIsGuest] = (0, react_1.useState)(false);
    const [signInDisplay, setSignInDisplay] = (0, react_1.useState)('');
    const [sequenceWaasAccounts, setSequenceWaasAccounts] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
    return (0, jsx_runtime_1.jsx)(Shared_js_1.SharedContextProvider, { value: { isGuest, signInDisplay }, children: children });
};
exports.SharedProvider = SharedProvider;
//# sourceMappingURL=SharedProvider.js.map