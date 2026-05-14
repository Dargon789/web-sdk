import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MediaIconWrapper } from './MediaIconWrapper.js';
export const StackedIconTag = ({ iconList, isAccount = false, shape = 'rounded', label = undefined, onClick, enabled = false }) => {
    const shapeClass = shape === 'rounded' ? 'rounded-full' : 'rounded-lg';
    return (_jsxs("div", { className: `${shapeClass} flex flex-row items-center bg-background-secondary px-2 py-1 ${enabled ? 'hover:opacity-80 cursor-pointer focus:ring-2 focus:ring-focus focus:outline-hidden' : ''}`, style: { height: '28px', gap: '6px' }, onClick: onClick, children: [iconList.length > 0 && _jsx(MediaIconWrapper, { iconList: iconList, isAccount: isAccount, shape: shape, size: "4xs" }), label] }));
};
//# sourceMappingURL=StackedIconTag.js.map