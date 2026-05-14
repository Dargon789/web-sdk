"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const index_js_1 = require("../../hooks/index.js");
const useGetAllCollections_js_1 = require("../../hooks/useGetAllCollections.js");
const ListCard_js_1 = require("../ListCard/ListCard.js");
const CollectionsFilter = ({ onClose }) => {
    const { selectedWallets, selectedNetworks, showCollectionsObservable, setShowCollections, hideUnlistedTokens } = (0, index_js_1.useSettings)();
    const showCollections = showCollectionsObservable.get();
    const { data: collections } = (0, useGetAllCollections_js_1.useGetAllCollections)({
        accountAddresses: selectedWallets.map(wallet => wallet.address),
        chainIds: selectedNetworks,
        hideUnlistedTokens
    });
    const { data: tokens } = (0, index_js_1.useGetAllTokensDetails)({
        accountAddresses: selectedWallets.map(wallet => wallet.address),
        chainIds: selectedNetworks,
        hideUnlistedTokens
    });
    const collectionsCount = collections.length;
    const itemsCount = tokens.filter(token => token.contractType === 'ERC721' || token.contractType === 'ERC1155').length;
    const onClickItems = (showCollections) => {
        setShowCollections(showCollections);
        onClose();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col bg-background-primary gap-3", children: [(0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { type: "radio", isSelected: !showCollections, onClick: () => onClickItems(false), children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "primary", variant: "normal", children: ["Items", ' '] }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "muted", variant: "normal", children: ["(", itemsCount, ")"] })] }) }, "Items"), (0, jsx_runtime_1.jsx)(ListCard_js_1.ListCard, { type: "radio", isSelected: showCollections, onClick: () => onClickItems(true), children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "primary", variant: "normal", children: ["Collections", ' '] }), (0, jsx_runtime_1.jsxs)(design_system_1.Text, { color: "muted", variant: "normal", children: ["(", collectionsCount, ")"] })] }) }, "Collections")] }));
};
exports.CollectionsFilter = CollectionsFilter;
//# sourceMappingURL=CollectionsFilter.js.map