"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenImageCustom = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const NetworkImageCustom_js_1 = require("./NetworkImageCustom.js");
const NETWORK_IMAGE_SIZE = '45%';
const NETWORK_IMAGE_OFFSET = '-1px';
const TokenImageCustom = ({ src, symbol, chainId }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative rounded-full bg-background-muted", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute z-1", style: {
                    width: NETWORK_IMAGE_SIZE,
                    height: NETWORK_IMAGE_SIZE,
                    bottom: NETWORK_IMAGE_OFFSET,
                    right: NETWORK_IMAGE_OFFSET
                }, children: (0, jsx_runtime_1.jsx)(NetworkImageCustom_js_1.NetworkImageCustom, { className: 'border border-background-primary', chainId: chainId, indicatorPosition: "top-right", style: {
                        width: '100%',
                        height: '100%'
                    } }) }), (0, jsx_runtime_1.jsx)(design_system_1.TokenImage, { src: src, symbol: symbol })] }));
};
exports.TokenImageCustom = TokenImageCustom;
//# sourceMappingURL=TokenImageCustom.js.map