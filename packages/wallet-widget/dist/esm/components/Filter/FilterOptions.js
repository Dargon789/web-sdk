import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { Button, ChevronDownIcon, Text } from '@0xsequence/design-system';
import { useObservable } from 'micro-observables';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useSettings } from '../../hooks/index.js';
import { SlideupDrawer } from '../Select/SlideupDrawer.js';
import { CollectionsFilter } from './CollectionsFilter.js';
import { NetworksFilter } from './NetworksFilter.js';
import { WalletsFilter } from './WalletsFilter.js';
const FilterHeader = ({ allSelectedText, fewSelectedText, fewSelectedCount, clearCondition, onClickClear }) => {
    return (_jsxs("div", { className: "flex flex-row justify-between items-center w-full", children: [clearCondition ? (_jsxs("div", { style: { whiteSpace: 'nowrap' }, children: [_jsxs(Text, { variant: "medium", color: "primary", children: [fewSelectedText, ' '] }), _jsxs(Text, { variant: "medium", color: "muted", children: ["(", fewSelectedCount, ")"] })] })) : (_jsx(Text, { variant: "medium", color: "primary", children: allSelectedText })), clearCondition && (_jsx("div", { className: "flex justify-center items-center bg-background-secondary rounded-full py-1 px-3 gap-2 w-fit hover:opacity-80 cursor-pointer", onClick: () => {
                    onClickClear();
                }, children: _jsx(Text, { variant: "small", fontWeight: "bold", color: "primary", children: "Clear" }) }))] }));
};
export const FilterOptions = ({ filterType }) => {
    const { wallets } = useWallets();
    const { allNetworks, selectedWalletsObservable, selectedNetworksObservable, showCollectionsObservable, setSelectedWallets, setSelectedNetworks } = useSettings();
    const [openType, setOpenType] = useState('closed');
    const selectedNetworks = useObservable(selectedNetworksObservable);
    const selectedWallets = useObservable(selectedWalletsObservable);
    const showCollections = useObservable(showCollectionsObservable);
    const filterLabel = () => {
        if (filterType === 'networks') {
            if (selectedNetworks.length === allNetworks.length) {
                return (_jsx(Text, { className: "truncate", variant: "small-bold", color: "primary", nowrap: true, children: "All networks" }));
            }
            return (_jsxs("div", { className: "flex flex-row gap-1", children: [_jsx(Text, { variant: "small-bold", color: "primary", children: "Networks" }), _jsx(Text, { variant: "small-bold", color: "muted", children: `(${selectedNetworks.length})` })] }));
        }
        else if (filterType === 'wallets') {
            return (_jsxs("div", { className: "flex flex-row gap-1", children: [_jsx(Text, { variant: "small-bold", color: "primary", children: "Wallets" }), selectedWallets.length !== wallets.length && (_jsx(Text, { variant: "small-bold", color: "muted", children: `(${selectedWallets.length})` }))] }));
        }
        else if (filterType === 'collections') {
            if (showCollections) {
                return (_jsx(Text, { variant: "small-bold", color: "primary", children: "Collections" }));
            }
            return (_jsx(Text, { variant: "small-bold", color: "primary", children: "Items" }));
        }
    };
    const setOpen = () => {
        if (openType === 'closed') {
            setOpenType(filterType);
        }
    };
    return (_jsxs("div", { onClick: () => setOpen(), children: [_jsxs(Button, { className: "h-8", variant: "secondary", children: [filterLabel(), _jsx(ChevronDownIcon, { size: "sm" })] }), _jsxs(AnimatePresence, { children: [openType === 'networks' && (_jsx(SlideupDrawer, { header: _jsx(FilterHeader, { allSelectedText: "All Networks", fewSelectedText: "Networks", fewSelectedCount: selectedNetworks.length, clearCondition: selectedNetworks.length !== allNetworks.length, onClickClear: () => {
                                setSelectedNetworks([]);
                                setOpenType('closed');
                            } }), onClose: () => setOpenType('closed'), children: _jsx(NetworksFilter, {}) })), openType === 'wallets' && (_jsx(SlideupDrawer, { header: _jsx(FilterHeader, { allSelectedText: "All Wallets", fewSelectedText: "Wallets", fewSelectedCount: selectedWallets.length, clearCondition: selectedWallets.length !== wallets.length, onClickClear: () => {
                                setSelectedWallets([]);
                                setOpenType('closed');
                            } }), onClose: () => setOpenType('closed'), children: _jsx(WalletsFilter, { onClose: () => setOpenType('closed') }) })), openType === 'collections' && (_jsx(SlideupDrawer, { header: _jsx(Text, { variant: "medium", color: "primary", children: "Collectibles" }), onClose: () => setOpenType('closed'), children: _jsx(CollectionsFilter, { onClose: () => setOpenType('closed') }) }))] })] }));
};
//# sourceMappingURL=FilterOptions.js.map