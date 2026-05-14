"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const RadioSelector_js_1 = require("./RadioSelector.js");
const ListCard = ({ children, rightChildren, shape = 'rounded', style, type = 'default', isSelected = false, disabled = false, onClick }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, design_system_1.cn)('flex flex-row justify-between items-center bg-background-secondary w-full p-4 gap-2', !disabled && 'cursor-pointer hover:opacity-80', shape === 'rounded' ? 'rounded-lg' : 'rounded-none', isSelected && 'border-2 border-violet-600'), style: { height: '68px', ...style }, onClick: disabled ? undefined : onClick, children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row gap-2 items-center w-full", children: children }), (rightChildren || type === 'chevron' || type === 'radio') && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-3 items-center", children: [rightChildren, type === 'chevron' ? ((0, jsx_runtime_1.jsx)(design_system_1.ChevronRightIcon, { size: "md" })) : type === 'radio' ? ((0, jsx_runtime_1.jsx)(RadioSelector_js_1.RadioSelector, { isSelected: isSelected })) : null] }))] }));
};
exports.ListCard = ListCard;
//# sourceMappingURL=ListCard.js.map