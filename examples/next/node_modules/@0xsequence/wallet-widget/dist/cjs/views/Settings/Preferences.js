"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsPreferences = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const micro_observables_1 = require("micro-observables");
const ListCard_js_1 = require("../../components/ListCard/ListCard.js");
const index_js_1 = require("../../hooks/index.js");
const SettingsPreferences = () => {
    const { hideUnlistedTokensObservable, setHideUnlistedTokens } = (0, index_js_1.useSettings)();
    const hideUnlistedTokens = (0, micro_observables_1.useObservable)(hideUnlistedTokensObservable);
    return ((0, jsx_runtime_1.jsx)("div", { className: "px-4 pb-4", children: (0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { isSelected: hideUnlistedTokens, rightChildren: (0, jsx_runtime_1.jsx)(design_system_1.Switch, { checked: hideUnlistedTokens }), onClick: () => setHideUnlistedTokens(!hideUnlistedTokens), children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Hide Unlisted Tokens" }) }) }));
};
exports.SettingsPreferences = SettingsPreferences;
//# sourceMappingURL=Preferences.js.map