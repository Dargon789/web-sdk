"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCardNetwork = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const NetworkImageCustom_js_1 = require("../Filter/NetworkImageCustom.js");
const ListCard_js_1 = require("./ListCard.js");
const ListCardNetwork = ({ chainId, isSelected = false, onClick = () => { } }) => {
    const network = (0, web_sdk_core_1.getNetwork)(chainId);
    const title = network.title;
    return ((0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { type: isSelected ? 'radio' : 'default', onClick: onClick, isSelected: isSelected, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 justify-center items-center", children: [(0, jsx_runtime_1.jsx)(NetworkImageCustom_js_1.NetworkImageCustom, { chainId: chainId, style: { width: '32px', height: '32px' } }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", variant: "normal", fontWeight: "bold", children: title })] }) }));
};
exports.ListCardNetwork = ListCardNetwork;
//# sourceMappingURL=ListCardNetwork.js.map