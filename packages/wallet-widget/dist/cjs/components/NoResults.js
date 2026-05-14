"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoResults = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const MiniButton_js_1 = require("../components/MiniButton.js");
const useSettings_js_1 = require("../hooks/useSettings.js");
const NoResults = ({ hasInstructions, customText }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const { selectedWallets, allNetworks, selectedNetworks, setSelectedWallets, setSelectedNetworks } = (0, useSettings_js_1.useSettings)();
    const isSettingsChanged = (0, react_1.useMemo)(() => {
        return selectedWallets.length !== wallets.length || selectedNetworks.length !== allNetworks.length;
    }, [selectedWallets, wallets, selectedNetworks, allNetworks]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center h-full gap-4", style: { marginTop: '80px', marginBottom: '80px' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.CoinsIcon, { color: "grey" }), (0, jsx_runtime_1.jsx)(design_system_1.GameIcon, { color: "grey" }), (0, jsx_runtime_1.jsx)(design_system_1.GameSwordIcon, { color: "grey" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: customText || 'No results found' }), hasInstructions && ((0, jsx_runtime_1.jsxs)(design_system_1.Text, { className: "text-center", variant: "normal", color: "muted", children: ["Search your wallet for tokens,", (0, jsx_runtime_1.jsx)("br", {}), "collectibles or collections"] })), isSettingsChanged && ((0, jsx_runtime_1.jsx)(MiniButton_js_1.MiniButton, { onClick: () => {
                            setSelectedWallets([]);
                            setSelectedNetworks([]);
                        }, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal-bold", color: "primary", children: "Clear filters" }) }))] })] }));
};
exports.NoResults = NoResults;
//# sourceMappingURL=NoResults.js.map