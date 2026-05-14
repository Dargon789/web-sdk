"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCardWallet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useSettings_js_1 = require("../../hooks/useSettings.js");
const useValueRegistry_js_1 = require("../../hooks/useValueRegistry.js");
const CopyButton_js_1 = require("../CopyButton.js");
const WalletAccountGradient_js_1 = require("../WalletAccountGradient.js");
const ListCard_js_1 = require("./ListCard.js");
const ListCardWallet = ({ wallet, disabled = false, isSelected = false, rightChildren = null, onClick = () => { } }) => {
    const { fiatCurrency } = (0, useSettings_js_1.useSettings)();
    const { valueRegistryMap } = (0, useValueRegistry_js_1.useValueRegistry)();
    const [signInDisplay, setSignInDisplay] = (0, react_1.useState)('');
    const connections = (0, wagmi_1.useConnections)();
    const connector = connections.find(c => c.accounts.find(a => a === wallet.address))?.connector;
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsxs)(ListCard_js_1.ListCard, { disabled: disabled, type: isSelected ? 'radio' : 'default', onClick: onClick, isSelected: isSelected, rightChildren: rightChildren ? (rightChildren) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3 items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1 items-center", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "muted", variant: "small", children: [fiatCurrency.sign, valueRegistryMap.find(w => w.accountAddress === wallet.address)?.value] }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "muted", variant: "small", children: fiatCurrency.symbol })] }), disabled && (0, jsx_runtime_1.jsx)(CopyButton_js_1.CopyButton, { variant: "text", size: "md", text: wallet.address, onClick: e => e.stopPropagation() })] })), children: [(0, jsx_runtime_1.jsx)(WalletAccountGradient_js_1.WalletAccountGradient, { accountAddresses: [wallet.address] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "flex flex-row gap-1 items-center", nowrap: true, color: "primary", fontWeight: "medium", variant: "normal", children: (0, web_sdk_core_1.truncateAtIndex)(wallet.address, 13) }), signInDisplay && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "muted", variant: "small", children: signInDisplay }))] })] }));
};
exports.ListCardWallet = ListCardWallet;
//# sourceMappingURL=ListCardWallet.js.map