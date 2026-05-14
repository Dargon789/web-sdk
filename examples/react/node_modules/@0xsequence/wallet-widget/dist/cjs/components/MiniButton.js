"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const MiniButton = ({ children, className, style, ref, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, design_system_1.cn)(`flex flex-row justify-between items-center bg-background-secondary hover:opacity-80 cursor-pointer w-fit rounded-full py-2 px-4 gap-2`, className), style: { ...style }, onClick: onClick, children: children }));
};
exports.MiniButton = MiniButton;
//# sourceMappingURL=MiniButton.js.map