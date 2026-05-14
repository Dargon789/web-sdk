"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAccountGradient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const getConnectorLogos_js_1 = require("./ConnectorLogos/getConnectorLogos.js");
const WalletAccountGradient = ({ accountAddresses }) => {
    const isMobile = (0, design_system_1.useMediaQuery)('isMobile');
    const limit = isMobile ? 4 : 6;
    // limit the number of wallets shown to 6 on desktop and 4 on mobile
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-row relative", children: accountAddresses.slice(0, limit).map((address, index) => ((0, jsx_runtime_1.jsx)(WalletAccountGradientItem, { address: address, index: index }, address))) }));
};
exports.WalletAccountGradient = WalletAccountGradient;
const WalletAccountGradientItem = ({ address, index }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const LoginIcon = (0, getConnectorLogos_js_1.getConnectorLogo)(wallets.find(wallet => address.includes(wallet.address))?.signInMethod || '');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative inline-block", style: { marginLeft: index === 0 ? '0px' : '-8px', zIndex: wallets.length - index }, children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { className: "w-11 h-11", size: "xl", address: address || '' }), LoginIcon && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20px',
                    width: '20px'
                }, children: (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", style: { width: '14px', height: '14px' }, children: LoginIcon }) }))] }));
};
//# sourceMappingURL=WalletAccountGradient.js.map