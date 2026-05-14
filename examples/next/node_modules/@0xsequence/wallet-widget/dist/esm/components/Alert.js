import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, cn, Text } from '@0xsequence/design-system';
import React, {} from 'react';
const variants = {
    negative: 'bg-negative',
    warning: 'bg-warning',
    positive: 'bg-positive'
};
export const Alert = ({ title, description, secondaryDescription, variant, buttonProps, children }) => {
    return (_jsx("div", { className: cn('rounded-xl', variants[variant]), children: _jsxs("div", { className: "flex bg-background-overlay rounded-xl p-4 w-full flex-col gap-3", children: [_jsxs("div", { className: "flex w-full gap-2 justify-between", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(Text, { variant: "normal", color: "primary", fontWeight: "medium", children: title }), _jsx(Text, { variant: "normal", color: "muted", fontWeight: "medium", children: description }), secondaryDescription && (_jsx(Text, { variant: "normal", color: "secondary", fontWeight: "medium", children: secondaryDescription }))] }), buttonProps ? (_jsx("div", { className: "rounded-lg w-min h-min", children: _jsx(Button, { className: "shrink-0", variant: "emphasis", shape: "square", ...buttonProps }) })) : null] }), children] }) }));
};
//# sourceMappingURL=Alert.js.map