import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NetworkImage } from '@0xsequence/design-system';
import { getNetwork } from '@0xsequence/web-sdk-core';
export const NetworkImageCustom = ({ chainId, indicatorPosition = 'top-left', style, className }) => {
    const network = getNetwork(chainId);
    const isTestnet = network.testnet;
    return (_jsxs("div", { className: "relative overflow-visible", children: [isTestnet && (_jsx("div", { className: "absolute z-1 border rounded-full", style: {
                    minWidth: '6px',
                    minHeight: '6px',
                    width: '30%',
                    height: '30%',
                    ...(indicatorPosition === 'top-left' && { left: '-1px', top: '-1px' }),
                    ...(indicatorPosition === 'top-right' && { right: '-1px', top: '-1px' }),
                    backgroundColor: '#F4B03E'
                } })), _jsx(NetworkImage, { className: className, chainId: chainId, style: { ...style } })] }));
};
//# sourceMappingURL=NetworkImageCustom.js.map