"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receive = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const qrcode_react_1 = require("qrcode.react");
const wagmi_1 = require("wagmi");
const NetworkSelect_1 = require("../components/Select/NetworkSelect");
const constants_1 = require("../constants");
const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
const Receive = () => {
    const { address, chain } = (0, wagmi_1.useAccount)();
    const [isCopied, setCopied] = (0, hooks_1.useClipboard)({ timeout: 4000 });
    const networkInfo = (0, connect_1.getNetwork)(chain?.id || 1);
    const networkName = networkInfo.title || networkInfo.name;
    const onClickShare = () => {
        if (typeof window !== 'undefined') {
            window.open(`https://twitter.com/intent/tweet?text=Here%20is%20my%20address%20${address}`);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: { paddingTop: constants_1.HEADER_HEIGHT_WITH_LABEL }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center items-center px-4 pb-6 gap-4", children: [(0, jsx_runtime_1.jsx)(NetworkSelect_1.NetworkSelect, {}), (0, jsx_runtime_1.jsx)("div", { className: "flex mt-1 w-fit bg-white rounded-xl items-center justify-center p-4", children: (0, jsx_runtime_1.jsx)(qrcode_react_1.QRCodeCanvas, { value: address || '', size: 200, bgColor: "white", fgColor: "black", "data-id": "receiveQR" }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "text-center leading-[inherit]", variant: "medium", color: "primary", style: { fontWeight: '700' }, children: "My Wallet" }), (0, jsx_runtime_1.jsx)(design_system_1.Image, { className: "w-5 rounded-xs", src: networkInfo.logoURI, alt: "icon" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", style: { maxWidth: '180px', textAlign: 'center' }, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "text-center", color: "muted", style: {
                                    fontSize: '14px',
                                    maxWidth: '180px',
                                    overflowWrap: 'anywhere'
                                }, children: address }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-3", children: [(0, jsx_runtime_1.jsx)(design_system_1.Button, { onClick: () => setCopied(address || ''), leftIcon: design_system_1.CopyIcon, label: isCopied ? 'Copied!' : 'Copy' }), (0, jsx_runtime_1.jsx)(design_system_1.Button, { onClick: onClickShare, leftIcon: design_system_1.ShareIcon, label: "Share" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center", style: { maxWidth: '260px', textAlign: 'center' }, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", variant: "small", style: {
                            maxWidth: '260px',
                            overflowWrap: 'anywhere'
                        }, children: `This is a${isVowel(networkName[0]) ? 'n' : ''} ${networkName} address. Please only send assets on the ${networkName} network.` }) })] }) }));
};
exports.Receive = Receive;
//# sourceMappingURL=Receive.js.map