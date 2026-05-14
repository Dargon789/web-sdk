"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = __importDefault(require("react"));
const variants = {
    negative: 'bg-negative',
    warning: 'bg-warning',
    positive: 'bg-positive'
};
const Alert = ({ title, description, secondaryDescription, variant, buttonProps, children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, design_system_1.cn)('rounded-xl', variants[variant]), children: (0, jsx_runtime_1.jsxs)("div", { className: "flex bg-background-overlay rounded-xl p-4 w-full flex-col gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full gap-2 justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-1", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", fontWeight: "medium", children: title }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "muted", fontWeight: "medium", children: description }), secondaryDescription && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "secondary", fontWeight: "medium", children: secondaryDescription }))] }), buttonProps ? ((0, jsx_runtime_1.jsx)("div", { className: "rounded-lg w-min h-min", children: (0, jsx_runtime_1.jsx)(design_system_1.Button, { className: "shrink-0", variant: "emphasis", shape: "square", ...buttonProps }) })) : null] }), children] }) }));
};
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map