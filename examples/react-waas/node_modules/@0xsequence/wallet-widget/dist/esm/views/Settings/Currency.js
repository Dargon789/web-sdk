import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@0xsequence/design-system';
import { useObservable } from 'micro-observables';
import { ListCard } from '../../components/ListCard/ListCard.js';
import { supportedFiatCurrencies } from '../../constants/index.js';
import { useSettings } from '../../hooks/index.js';
export const SettingsCurrency = () => {
    const { fiatCurrencyObservable, setFiatCurrency } = useSettings();
    const fiatCurrency = useObservable(fiatCurrencyObservable);
    return (_jsx("div", { className: "px-4 pb-4", children: _jsx("div", { className: "flex flex-col gap-2", children: supportedFiatCurrencies.map((currency, index) => {
                return (_jsxs(ListCard, { type: "radio", isSelected: currency.symbol === fiatCurrency.symbol, onClick: () => setFiatCurrency && setFiatCurrency(currency), children: [_jsx(Text, { color: "primary", fontWeight: "bold", children: currency.symbol }), _jsx(Text, { color: "muted", children: currency.name.message })] }, index));
            }) }) }));
};
//# sourceMappingURL=Currency.js.map