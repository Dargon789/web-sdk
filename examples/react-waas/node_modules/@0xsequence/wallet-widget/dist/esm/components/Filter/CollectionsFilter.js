import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Text } from '@0xsequence/design-system';
import { useGetAllTokensDetails, useSettings } from '../../hooks/index.js';
import { useGetAllCollections } from '../../hooks/useGetAllCollections.js';
import { ListCard } from '../ListCard/ListCard.js';
export const CollectionsFilter = ({ onClose }) => {
    const { selectedWallets, selectedNetworks, showCollectionsObservable, setShowCollections, hideUnlistedTokens } = useSettings();
    const showCollections = showCollectionsObservable.get();
    const { data: collections } = useGetAllCollections({
        accountAddresses: selectedWallets.map(wallet => wallet.address),
        chainIds: selectedNetworks,
        hideUnlistedTokens
    });
    const { data: tokens } = useGetAllTokensDetails({
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
    return (_jsxs("div", { className: "flex flex-col bg-background-primary gap-3", children: [_jsx(ListCard, { type: "radio", isSelected: !showCollections, onClick: () => onClickItems(false), children: _jsxs("div", { children: [_jsxs(Text, { color: "primary", variant: "normal", children: ["Items", ' '] }), _jsxs(Text, { color: "muted", variant: "normal", children: ["(", itemsCount, ")"] })] }) }, "Items"), _jsx(ListCard, { type: "radio", isSelected: showCollections, onClick: () => onClickItems(true), children: _jsxs("div", { children: [_jsxs(Text, { color: "primary", variant: "normal", children: ["Collections", ' '] }), _jsxs(Text, { color: "muted", variant: "normal", children: ["(", collectionsCount, ")"] })] }) }, "Collections")] }));
};
//# sourceMappingURL=CollectionsFilter.js.map