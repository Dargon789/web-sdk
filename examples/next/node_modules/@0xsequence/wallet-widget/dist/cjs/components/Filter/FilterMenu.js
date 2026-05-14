"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const FilterOptions_js_1 = require("./FilterOptions.js");
const FilterMenu = ({ filterMenuType }) => {
    const { wallets } = (0, connect_1.useWallets)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-2 w-full overflow-x-auto hide-scrollbar", style: { scrollbarWidth: 'none' }, children: [filterMenuType === 'collectibles' && (0, jsx_runtime_1.jsx)(FilterOptions_js_1.FilterOptions, { filterType: "collections" }), (0, jsx_runtime_1.jsx)(FilterOptions_js_1.FilterOptions, { filterType: "networks" }), wallets.length > 1 && (0, jsx_runtime_1.jsx)(FilterOptions_js_1.FilterOptions, { filterType: "wallets" })] }));
};
exports.FilterMenu = FilterMenu;
//# sourceMappingURL=FilterMenu.js.map