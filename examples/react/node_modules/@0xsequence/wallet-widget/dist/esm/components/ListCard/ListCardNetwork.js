import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@0xsequence/design-system';
import { getNetwork } from '@0xsequence/web-sdk-core';
import { NetworkImageCustom } from '../Filter/NetworkImageCustom.js';
import { ListCard } from './ListCard.js';
export const ListCardNetwork = ({ chainId, isSelected = false, onClick = () => { } }) => {
    const network = getNetwork(chainId);
    const title = network.title;
    return (_jsx(ListCard, { type: isSelected ? 'radio' : 'default', onClick: onClick, isSelected: isSelected, children: _jsxs("div", { className: "flex gap-2 justify-center items-center", children: [_jsx(NetworkImageCustom, { chainId: chainId, style: { width: '32px', height: '32px' } }), _jsx(Text, { color: "primary", variant: "normal", fontWeight: "bold", children: title })] }) }));
};
//# sourceMappingURL=ListCardNetwork.js.map