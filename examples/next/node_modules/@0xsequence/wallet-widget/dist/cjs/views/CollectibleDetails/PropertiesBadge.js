"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const PropertiesBadge = ({ name, value }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col bg-background-secondary py-2 px-3 gap-1 rounded-xl justify-center items-start w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "muted", children: "Property" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center gap-1 w-full", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { fontWeight: "bold", color: "primary", children: name }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", fontWeight: "bold", color: "muted", children: value })] })] }));
};
exports.PropertiesBadge = PropertiesBadge;
//# sourceMappingURL=PropertiesBadge.js.map