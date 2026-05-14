"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedIconTag = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MediaIconWrapper_js_1 = require("./MediaIconWrapper.js");
const StackedIconTag = ({ iconList, isAccount = false, shape = 'rounded', label = undefined, onClick, enabled = false }) => {
    const shapeClass = shape === 'rounded' ? 'rounded-full' : 'rounded-lg';
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${shapeClass} flex flex-row items-center bg-background-secondary px-2 py-1 ${enabled ? 'hover:opacity-80 cursor-pointer focus:ring-2 focus:ring-focus focus:outline-hidden' : ''}`, style: { height: '28px', gap: '6px' }, onClick: onClick, children: [iconList.length > 0 && (0, jsx_runtime_1.jsx)(MediaIconWrapper_js_1.MediaIconWrapper, { iconList: iconList, isAccount: isAccount, shape: shape, size: "4xs" }), label] }));
};
exports.StackedIconTag = StackedIconTag;
//# sourceMappingURL=StackedIconTag.js.map