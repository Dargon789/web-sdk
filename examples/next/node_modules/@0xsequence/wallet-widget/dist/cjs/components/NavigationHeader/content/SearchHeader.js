"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const useNavigationHeader_js_1 = require("../../../hooks/useNavigationHeader.js");
const SearchHeader = () => {
    const { search, setSearch } = (0, useNavigationHeader_js_1.useNavigationHeader)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "grow px-4", children: (0, jsx_runtime_1.jsx)(design_system_1.TextInput, { className: "w-full", autoFocus: true, placeholder: "Search", name: 'Search Wallet', value: search, onChange: e => setSearch(e.target.value) }) }));
};
exports.SearchHeader = SearchHeader;
//# sourceMappingURL=SearchHeader.js.map