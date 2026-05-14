import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn, Text } from '@0xsequence/design-system';
export const InfoBadge = ({ leftIcon, label, onClick }) => {
    return (_jsxs("div", { className: cn('flex flex-row bg-background-secondary h-7 py-1 px-2 gap-1 rounded-lg justify-center items-center w-fit', onClick && 'cursor-pointer hover:opacity-80'), onClick: onClick, children: [leftIcon, _jsx(Text, { variant: "small", color: "muted", children: label })] }));
};
//# sourceMappingURL=InfoBadge.js.map