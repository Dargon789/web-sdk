import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cardVariants, ChevronUpDownIcon, cn, NetworkImage, Text } from '@0xsequence/design-system';
import { useState } from 'react';
import { useChainId, useChains, useSwitchChain } from 'wagmi';
import { ListCardNetwork } from '../ListCard/ListCardNetwork.js';
import { SlideupDrawer } from './SlideupDrawer.js';
const NETWORK_SELECT_HEIGHT = '70px';
export const NetworkSelect = () => {
    const chains = useChains();
    const chainId = useChainId();
    const { switchChain } = useSwitchChain();
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: cn(cardVariants({ clickable: true }), 'flex justify-between items-center border-1 border-solid rounded-xl px-4 py-3 gap-2 select-none'), style: { height: NETWORK_SELECT_HEIGHT }, onClick: () => setIsOpen(true), children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Text, { variant: "small", fontWeight: "bold", color: "muted", children: "Network" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NetworkImage, { chainId: chainId, size: "sm" }), _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: chains.find(chain => chain.id === chainId)?.name || chainId })] })] }), _jsx(ChevronUpDownIcon, { className: "text-muted" }), isOpen && (_jsx(SlideupDrawer, { header: _jsx(Text, { variant: "medium", color: "primary", children: "Network" }), onClose: () => setIsOpen(false), children: _jsx("div", { className: "flex flex-col gap-2", style: { overflowY: 'auto' }, children: chains.map(chain => (_jsx(ListCardNetwork, { chainId: chain.id, isSelected: chain.id === chainId, onClick: () => {
                            switchChain({ chainId: chain.id });
                            setIsOpen(false);
                        } }, chain.id))) }) }))] }));
};
//# sourceMappingURL=NetworkSelect.js.map