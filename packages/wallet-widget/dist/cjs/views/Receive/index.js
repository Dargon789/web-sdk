"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receive = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const qrcode_react_1 = require("qrcode.react");
const wagmi_1 = require("wagmi");
const WalletSelect_js_1 = require("../../components/Select/WalletSelect.js");
const Receive = () => {
    const { address } = (0, wagmi_1.useConnection)();
    const { setActiveWallet } = (0, connect_1.useWallets)();
    const [isCopied, setCopied] = (0, hooks_1.useClipboard)({ timeout: 4000 });
    const onClickWallet = (address) => {
        setActiveWallet(address);
    };
    const onClickShare = () => {
        if (typeof window !== 'undefined') {
            window.open(`https://twitter.com/intent/tweet?text=Here%20is%20my%20address%20${address}`);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center items-center px-4 pb-6 gap-4", children: [(0, jsx_runtime_1.jsx)(WalletSelect_js_1.WalletSelect, { selectedWallet: address || '', onClick: onClickWallet }), (0, jsx_runtime_1.jsx)("div", { className: "flex mt-1 w-fit bg-white rounded-xl items-center justify-center p-4", children: (0, jsx_runtime_1.jsx)(qrcode_react_1.QRCodeCanvas, { value: address || '', size: 200, bgColor: "white", fgColor: "black", "data-id": "receiveQR" }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row items-center justify-center gap-2", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "text-center leading-[inherit]", variant: "medium", color: "primary", style: { fontWeight: '700' }, children: "My Wallet" }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", style: { maxWidth: '180px', textAlign: 'center' }, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "text-center", color: "muted", style: {
                                fontSize: '14px',
                                maxWidth: '180px',
                                overflowWrap: 'anywhere'
                            }, children: address }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-3", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Button, { onClick: () => setCopied(address || ''), children: [(0, jsx_runtime_1.jsx)(design_system_1.CopyIcon, {}), isCopied ? 'Copied!' : 'Copy'] }), (0, jsx_runtime_1.jsxs)(design_system_1.Button, { onClick: onClickShare, children: [(0, jsx_runtime_1.jsx)(design_system_1.ShareIcon, {}), "Share"] })] })] }));
};
exports.Receive = Receive;
//# sourceMappingURL=index.js.map