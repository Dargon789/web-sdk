import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, IconButton, Text } from '@0xsequence/design-system';
import { HEADER_HEIGHT } from '../../constants/index.js';
import { useNavigationContext } from '../../contexts/Navigation.js';
import { useNavigation } from '../../hooks/index.js';
import { CollectibleHeader } from './content/CollectibleHeader.js';
import { CollectionHeader } from './content/CollectionHeader.js';
import { HomeHeader } from './content/HomeHeader.js';
import { SearchHeader } from './content/SearchHeader.js';
import { SettingsHeader } from './content/SettingsHeader.js';
import { TokenHeader } from './content/TokenHeader.js';
const getHeaderContent = (type, info, label) => {
    switch (type) {
        case 'home':
            return _jsx(HomeHeader, {});
        case 'search':
            return _jsx(SearchHeader, {});
        case 'settings':
            return _jsx(SettingsHeader, {});
        case 'token':
            return _jsx(TokenHeader, { ...info }); // TODO: add imgSrc and imgLabel?
        case 'collectible':
            return _jsx(CollectibleHeader, { ...info });
        case 'collection':
            return _jsx(CollectionHeader, { ...info });
        case 'default':
            return (_jsx(Text, { variant: "medium", color: "primary", children: label }));
    }
};
export const NavigationHeader = ({ type = 'default', info, label }) => {
    const { goBack, history } = useNavigation();
    const { isBackButtonEnabled } = useNavigationContext();
    const onClickBack = () => {
        if (!isBackButtonEnabled) {
            return;
        }
        goBack();
    };
    return (_jsxs("div", { className: "flex flex-row justify-between items-center w-full", style: { minHeight: HEADER_HEIGHT }, children: [history.length > 0 ? (_jsx(IconButton, { className: "bg-background-secondary", onClick: onClickBack, icon: ChevronLeftIcon, size: "sm", disabled: !isBackButtonEnabled, style: { opacity: isBackButtonEnabled ? 1 : 0.5, marginLeft: '16px' } })) : (_jsx("div", {})), getHeaderContent(type, info, label), type !== 'search' && history.length > 0 ? _jsx("div", { style: { width: '52px' } }) : _jsx("div", {})] }));
};
//# sourceMappingURL=index.js.map