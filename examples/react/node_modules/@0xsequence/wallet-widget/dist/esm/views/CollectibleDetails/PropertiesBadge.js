import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@0xsequence/design-system';
export const PropertiesBadge = ({ name, value }) => {
    return (_jsxs("div", { className: "flex flex-col bg-background-secondary py-2 px-3 gap-1 rounded-xl justify-center items-start w-full", children: [_jsx(Text, { variant: "small", color: "muted", children: "Property" }), _jsxs("div", { className: "flex flex-row justify-between items-center gap-1 w-full", children: [_jsx(Text, { fontWeight: "bold", color: "primary", children: name }), _jsx(Text, { variant: "small", fontWeight: "bold", color: "muted", children: value })] })] }));
};
//# sourceMappingURL=PropertiesBadge.js.map