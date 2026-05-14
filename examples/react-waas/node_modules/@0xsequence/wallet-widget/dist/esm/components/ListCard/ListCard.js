import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon, cn } from '@0xsequence/design-system';
import { RadioSelector } from './RadioSelector.js';
export const ListCard = ({ children, rightChildren, shape = 'rounded', style, type = 'default', isSelected = false, disabled = false, onClick }) => {
    return (_jsxs("div", { className: cn('flex flex-row justify-between items-center bg-background-secondary w-full p-4 gap-2', !disabled && 'cursor-pointer hover:opacity-80', shape === 'rounded' ? 'rounded-lg' : 'rounded-none', isSelected && 'border-2 border-violet-600'), style: { height: '68px', ...style }, onClick: disabled ? undefined : onClick, children: [_jsx("div", { className: "flex flex-row gap-2 items-center w-full", children: children }), (rightChildren || type === 'chevron' || type === 'radio') && (_jsxs("div", { className: "flex flex-row gap-3 items-center", children: [rightChildren, type === 'chevron' ? (_jsx(ChevronRightIcon, { size: "md" })) : type === 'radio' ? (_jsx(RadioSelector, { isSelected: isSelected })) : null] }))] }));
};
//# sourceMappingURL=ListCard.js.map