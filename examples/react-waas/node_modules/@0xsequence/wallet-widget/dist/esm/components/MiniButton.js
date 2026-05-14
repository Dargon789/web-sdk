import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@0xsequence/design-system';
export const MiniButton = ({ children, className, style, ref, onClick }) => {
    return (_jsx("div", { ref: ref, className: cn(`flex flex-row justify-between items-center bg-background-secondary hover:opacity-80 cursor-pointer w-fit rounded-full py-2 px-4 gap-2`, className), style: { ...style }, onClick: onClick, children: children }));
};
//# sourceMappingURL=MiniButton.js.map