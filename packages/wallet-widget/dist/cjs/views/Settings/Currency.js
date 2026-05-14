"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsCurrency = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const micro_observables_1 = require("micro-observables");
const ListCard_js_1 = require("../../components/ListCard/ListCard.js");
const index_js_1 = require("../../constants/index.js");
const index_js_2 = require("../../hooks/index.js");
const SettingsCurrency = () => {
    const { fiatCurrencyObservable, setFiatCurrency } = (0, index_js_2.useSettings)();
    const fiatCurrency = (0, micro_observables_1.useObservable)(fiatCurrencyObservable);
    return ((0, jsx_runtime_1.jsx)("div", { className: "px-4 pb-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: index_js_1.supportedFiatCurrencies.map((currency, index) => {
                return ((0, jsx_runtime_1.jsxs)(ListCard_js_1.ListCard, { type: "radio", isSelected: currency.symbol === fiatCurrency.symbol, onClick: () => setFiatCurrency && setFiatCurrency(currency), children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "bold", children: currency.symbol }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "muted", children: currency.name.message })] }, index));
            }) }) }));
};
exports.SettingsCurrency = SettingsCurrency;
//# sourceMappingURL=Currency.js.map