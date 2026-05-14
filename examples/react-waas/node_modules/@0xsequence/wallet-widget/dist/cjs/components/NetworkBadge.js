"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const react_1 = __importDefault(require("react"));
const NetworkBadge = ({ chainId }) => {
    const network = (0, web_sdk_core_1.getNetwork)(chainId);
    const chainColor = (0, web_sdk_core_1.getNetworkColor)(chainId);
    const chainBGColor = (0, web_sdk_core_1.getNetworkBackgroundColor)(chainId);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex h-6 px-2 gap-1 rounded-sm flex-row justify-center items-center w-fit", style: {
            background: chainBGColor
        }, children: [(0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: chainId, size: "xs" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xsmall", fontWeight: "bold", capitalize: true, ellipsis: true, style: {
                    color: chainColor
                }, children: network.title ?? network.name })] }));
};
exports.NetworkBadge = NetworkBadge;
//# sourceMappingURL=NetworkBadge.js.map