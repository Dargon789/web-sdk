import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { GradientAvatar, useMediaQuery } from '@0xsequence/design-system';
import { getConnectorLogo } from './ConnectorLogos/getConnectorLogos.js';
export const WalletAccountGradient = ({ accountAddresses }) => {
    const isMobile = useMediaQuery('isMobile');
    const limit = isMobile ? 4 : 6;
    // limit the number of wallets shown to 6 on desktop and 4 on mobile
    return (_jsx("div", { className: "flex flex-row relative", children: accountAddresses.slice(0, limit).map((address, index) => (_jsx(WalletAccountGradientItem, { address: address, index: index }, address))) }));
};
const WalletAccountGradientItem = ({ address, index }) => {
    const { wallets } = useWallets();
    const LoginIcon = getConnectorLogo(wallets.find(wallet => address.includes(wallet.address))?.signInMethod || '');
    return (_jsxs("div", { className: "relative inline-block", style: { marginLeft: index === 0 ? '0px' : '-8px', zIndex: wallets.length - index }, children: [_jsx(GradientAvatar, { className: "w-11 h-11", size: "xl", address: address || '' }), LoginIcon && (_jsx("div", { style: {
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
                }, children: _jsx("div", { className: "flex items-center justify-center", style: { width: '14px', height: '14px' }, children: LoginIcon }) }))] }));
};
//# sourceMappingURL=WalletAccountGradient.js.map