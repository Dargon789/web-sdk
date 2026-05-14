"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const index_js_1 = require("../../constants/index.js");
const Navigation_js_1 = require("../../contexts/Navigation.js");
const index_js_2 = require("../../hooks/index.js");
const CollectibleHeader_js_1 = require("./content/CollectibleHeader.js");
const CollectionHeader_js_1 = require("./content/CollectionHeader.js");
const HomeHeader_js_1 = require("./content/HomeHeader.js");
const SearchHeader_js_1 = require("./content/SearchHeader.js");
const SettingsHeader_js_1 = require("./content/SettingsHeader.js");
const TokenHeader_js_1 = require("./content/TokenHeader.js");
const getHeaderContent = (type, info, label) => {
    switch (type) {
        case 'home':
            return (0, jsx_runtime_1.jsx)(HomeHeader_js_1.HomeHeader, {});
        case 'search':
            return (0, jsx_runtime_1.jsx)(SearchHeader_js_1.SearchHeader, {});
        case 'settings':
            return (0, jsx_runtime_1.jsx)(SettingsHeader_js_1.SettingsHeader, {});
        case 'token':
            return (0, jsx_runtime_1.jsx)(TokenHeader_js_1.TokenHeader, { ...info }); // TODO: add imgSrc and imgLabel?
        case 'collectible':
            return (0, jsx_runtime_1.jsx)(CollectibleHeader_js_1.CollectibleHeader, { ...info });
        case 'collection':
            return (0, jsx_runtime_1.jsx)(CollectionHeader_js_1.CollectionHeader, { ...info });
        case 'default':
            return ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: label }));
    }
};
const NavigationHeader = ({ type = 'default', info, label }) => {
    const { goBack, history } = (0, index_js_2.useNavigation)();
    const { isBackButtonEnabled } = (0, Navigation_js_1.useNavigationContext)();
    const onClickBack = () => {
        if (!isBackButtonEnabled) {
            return;
        }
        goBack();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full", style: { minHeight: index_js_1.HEADER_HEIGHT }, children: [history.length > 0 ? ((0, jsx_runtime_1.jsx)(design_system_1.IconButton, { className: "bg-background-secondary", onClick: onClickBack, icon: design_system_1.ChevronLeftIcon, size: "sm", disabled: !isBackButtonEnabled, style: { opacity: isBackButtonEnabled ? 1 : 0.5, marginLeft: '16px' } })) : ((0, jsx_runtime_1.jsx)("div", {})), getHeaderContent(type, info, label), type !== 'search' && history.length > 0 ? (0, jsx_runtime_1.jsx)("div", { style: { width: '52px' } }) : (0, jsx_runtime_1.jsx)("div", {})] }));
};
exports.NavigationHeader = NavigationHeader;
//# sourceMappingURL=index.js.map