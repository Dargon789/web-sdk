import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { CoinsIcon, GameIcon, GameSwordIcon, Text } from '@0xsequence/design-system';
import { useMemo } from 'react';
import { MiniButton } from '../components/MiniButton.js';
import { useSettings } from '../hooks/useSettings.js';
export const NoResults = ({ hasInstructions, customText }) => {
    const { wallets } = useWallets();
    const { selectedWallets, allNetworks, selectedNetworks, setSelectedWallets, setSelectedNetworks } = useSettings();
    const isSettingsChanged = useMemo(() => {
        return selectedWallets.length !== wallets.length || selectedNetworks.length !== allNetworks.length;
    }, [selectedWallets, wallets, selectedNetworks, allNetworks]);
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-4", style: { marginTop: '80px', marginBottom: '80px' }, children: [_jsxs("div", { className: "flex flex-row gap-2", children: [_jsx(CoinsIcon, { color: "grey" }), _jsx(GameIcon, { color: "grey" }), _jsx(GameSwordIcon, { color: "grey" })] }), _jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [_jsx(Text, { variant: "medium", color: "primary", children: customText || 'No results found' }), hasInstructions && (_jsxs(Text, { className: "text-center", variant: "normal", color: "muted", children: ["Search your wallet for tokens,", _jsx("br", {}), "collectibles or collections"] })), isSettingsChanged && (_jsx(MiniButton, { onClick: () => {
                            setSelectedWallets([]);
                            setSelectedNetworks([]);
                        }, children: _jsx(Text, { variant: "normal-bold", color: "primary", children: "Clear filters" }) }))] })] }));
};
//# sourceMappingURL=NoResults.js.map