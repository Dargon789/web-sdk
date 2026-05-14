"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ListCardNetwork_js_1 = require("../ListCard/ListCardNetwork.js");
const SlideupDrawer_js_1 = require("./SlideupDrawer.js");
const NETWORK_SELECT_HEIGHT = '70px';
const NetworkSelect = () => {
    const chains = (0, wagmi_1.useChains)();
    const chainId = (0, wagmi_1.useChainId)();
    const { switchChain } = (0, wagmi_1.useSwitchChain)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, design_system_1.cn)((0, design_system_1.cardVariants)({ clickable: true }), 'flex justify-between items-center border-1 border-solid rounded-xl px-4 py-3 gap-2 select-none'), style: { height: NETWORK_SELECT_HEIGHT }, onClick: () => setIsOpen(true), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Network" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: chainId, size: "sm" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: chains.find(chain => chain.id === chainId)?.name || chainId })] })] }), (0, jsx_runtime_1.jsx)(design_system_1.ChevronUpDownIcon, { className: "text-muted" }), isOpen && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: "Network" }), onClose: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: chains.map(chain => ((0, jsx_runtime_1.jsx)(ListCardNetwork_js_1.ListCardNetwork, { chainId: chain.id, isSelected: chain.id === chainId, onClick: () => {
                            switchChain({ chainId: chain.id });
                            setIsOpen(false);
                        } }, chain.id))) }) }))] }));
};
exports.NetworkSelect = NetworkSelect;
//# sourceMappingURL=NetworkSelect.js.map