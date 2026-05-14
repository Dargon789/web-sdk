"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOptions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const micro_observables_1 = require("micro-observables");
const react_1 = require("motion/react");
const react_2 = require("react");
const index_js_1 = require("../../hooks/index.js");
const SlideupDrawer_js_1 = require("../Select/SlideupDrawer.js");
const CollectionsFilter_js_1 = require("./CollectionsFilter.js");
const NetworksFilter_js_1 = require("./NetworksFilter.js");
const WalletsFilter_js_1 = require("./WalletsFilter.js");
const FilterHeader = ({ allSelectedText, fewSelectedText, fewSelectedCount, clearCondition, onClickClear }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center w-full", children: [clearCondition ? ((0, jsx_runtime_1.jsxs)("div", { style: { whiteSpace: 'nowrap' }, children: [(0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "medium", color: "primary", children: [fewSelectedText, ' '] }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "medium", color: "muted", children: ["(", fewSelectedCount, ")"] })] })) : ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: allSelectedText })), clearCondition && ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center bg-background-secondary rounded-full py-1 px-3 gap-2 w-fit hover:opacity-80 cursor-pointer", onClick: () => {
                    onClickClear();
                }, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small", fontWeight: "bold", color: "primary", children: "Clear" }) }))] }));
};
const FilterOptions = ({ filterType }) => {
    const { wallets } = (0, connect_1.useWallets)();
    const { allNetworks, selectedWalletsObservable, selectedNetworksObservable, showCollectionsObservable, setSelectedWallets, setSelectedNetworks } = (0, index_js_1.useSettings)();
    const [openType, setOpenType] = (0, react_2.useState)('closed');
    const selectedNetworks = (0, micro_observables_1.useObservable)(selectedNetworksObservable);
    const selectedWallets = (0, micro_observables_1.useObservable)(selectedWalletsObservable);
    const showCollections = (0, micro_observables_1.useObservable)(showCollectionsObservable);
    const filterLabel = () => {
        if (filterType === 'networks') {
            if (selectedNetworks.length === allNetworks.length) {
                return ((0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "truncate", variant: "small-bold", color: "primary", nowrap: true, children: "All networks" }));
            }
            return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "primary", children: "Networks" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "muted", children: `(${selectedNetworks.length})` })] }));
        }
        else if (filterType === 'wallets') {
            return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "primary", children: "Wallets" }), selectedWallets.length !== wallets.length && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "muted", children: `(${selectedWallets.length})` }))] }));
        }
        else if (filterType === 'collections') {
            if (showCollections) {
                return ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "primary", children: "Collections" }));
            }
            return ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "small-bold", color: "primary", children: "Items" }));
        }
    };
    const setOpen = () => {
        if (openType === 'closed') {
            setOpenType(filterType);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: () => setOpen(), children: [(0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "h-8", variant: "secondary", children: [filterLabel(), (0, jsx_runtime_1.jsx)(design_system_1.ChevronDownIcon, { size: "sm" })] }), (0, jsx_runtime_1.jsxs)(react_1.AnimatePresence, { children: [openType === 'networks' && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(FilterHeader, { allSelectedText: "All Networks", fewSelectedText: "Networks", fewSelectedCount: selectedNetworks.length, clearCondition: selectedNetworks.length !== allNetworks.length, onClickClear: () => {
                                setSelectedNetworks([]);
                                setOpenType('closed');
                            } }), onClose: () => setOpenType('closed'), children: (0, jsx_runtime_1.jsx)(NetworksFilter_js_1.NetworksFilter, {}) })), openType === 'wallets' && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(FilterHeader, { allSelectedText: "All Wallets", fewSelectedText: "Wallets", fewSelectedCount: selectedWallets.length, clearCondition: selectedWallets.length !== wallets.length, onClickClear: () => {
                                setSelectedWallets([]);
                                setOpenType('closed');
                            } }), onClose: () => setOpenType('closed'), children: (0, jsx_runtime_1.jsx)(WalletsFilter_js_1.WalletsFilter, { onClose: () => setOpenType('closed') }) })), openType === 'collections' && ((0, jsx_runtime_1.jsx)(SlideupDrawer_js_1.SlideupDrawer, { header: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", children: "Collectibles" }), onClose: () => setOpenType('closed'), children: (0, jsx_runtime_1.jsx)(CollectionsFilter_js_1.CollectionsFilter, { onClose: () => setOpenType('closed') }) }))] })] }));
};
exports.FilterOptions = FilterOptions;
//# sourceMappingURL=FilterOptions.js.map