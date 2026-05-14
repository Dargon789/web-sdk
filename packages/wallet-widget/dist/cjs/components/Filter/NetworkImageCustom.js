"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkImageCustom = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const NetworkImageCustom = ({ chainId, indicatorPosition = 'top-left', style, className }) => {
    const network = (0, web_sdk_core_1.getNetwork)(chainId);
    const isTestnet = network.testnet;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative overflow-visible", children: [isTestnet && ((0, jsx_runtime_1.jsx)("div", { className: "absolute z-1 border rounded-full", style: {
                    minWidth: '6px',
                    minHeight: '6px',
                    width: '30%',
                    height: '30%',
                    ...(indicatorPosition === 'top-left' && { left: '-1px', top: '-1px' }),
                    ...(indicatorPosition === 'top-right' && { right: '-1px', top: '-1px' }),
                    backgroundColor: '#F4B03E'
                } })), (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { className: className, chainId: chainId, style: { ...style } })] }));
};
exports.NetworkImageCustom = NetworkImageCustom;
//# sourceMappingURL=NetworkImageCustom.js.map