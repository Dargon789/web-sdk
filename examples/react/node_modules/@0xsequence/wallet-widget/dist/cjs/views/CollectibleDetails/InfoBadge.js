"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const InfoBadge = ({ leftIcon, label, onClick }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, design_system_1.cn)('flex flex-row bg-background-secondary h-7 py-1 px-2 gap-1 rounded-lg justify-center items-center w-fit', onClick && 'cursor-pointer hover:opacity-80'), onClick: onClick, children: [leftIcon, (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", color: "muted", children: label })] }));
};
exports.InfoBadge = InfoBadge;
//# sourceMappingURL=InfoBadge.js.map