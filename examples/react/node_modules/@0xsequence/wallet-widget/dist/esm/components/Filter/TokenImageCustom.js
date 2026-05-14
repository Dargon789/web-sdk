import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TokenImage } from '@0xsequence/design-system';
import { NetworkImageCustom } from './NetworkImageCustom.js';
const NETWORK_IMAGE_SIZE = '45%';
const NETWORK_IMAGE_OFFSET = '-1px';
export const TokenImageCustom = ({ src, symbol, chainId }) => {
    return (_jsxs("div", { className: "relative rounded-full bg-background-muted", children: [_jsx("div", { className: "absolute z-1", style: {
                    width: NETWORK_IMAGE_SIZE,
                    height: NETWORK_IMAGE_SIZE,
                    bottom: NETWORK_IMAGE_OFFSET,
                    right: NETWORK_IMAGE_OFFSET
                }, children: _jsx(NetworkImageCustom, { className: 'border border-background-primary', chainId: chainId, indicatorPosition: "top-right", style: {
                        width: '100%',
                        height: '100%'
                    } }) }), _jsx(TokenImage, { src: src, symbol: symbol })] }));
};
//# sourceMappingURL=TokenImageCustom.js.map