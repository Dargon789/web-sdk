import { jsx as _jsx } from "react/jsx-runtime";
import { Switch, Text } from '@0xsequence/design-system';
import { useObservable } from 'micro-observables';
import { ListCard } from '../../components/ListCard/ListCard.js';
import { useSettings } from '../../hooks/index.js';
export const SettingsPreferences = () => {
    const { hideUnlistedTokensObservable, setHideUnlistedTokens } = useSettings();
    const hideUnlistedTokens = useObservable(hideUnlistedTokensObservable);
    return (_jsx("div", { className: "px-4 pb-4", children: _jsx(ListCard, { isSelected: hideUnlistedTokens, rightChildren: _jsx(Switch, { checked: hideUnlistedTokens }), onClick: () => setHideUnlistedTokens(!hideUnlistedTokens), children: _jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: "Hide Unlisted Tokens" }) }) }));
};
//# sourceMappingURL=Preferences.js.map