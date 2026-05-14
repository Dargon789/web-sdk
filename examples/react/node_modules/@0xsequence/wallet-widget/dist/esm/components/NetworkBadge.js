import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NetworkImage, Text } from '@0xsequence/design-system';
import { getNetwork, getNetworkBackgroundColor, getNetworkColor } from '@0xsequence/web-sdk-core';
import React from 'react';
export const NetworkBadge = ({ chainId }) => {
    const network = getNetwork(chainId);
    const chainColor = getNetworkColor(chainId);
    const chainBGColor = getNetworkBackgroundColor(chainId);
    return (_jsxs("div", { className: "flex h-6 px-2 gap-1 rounded-sm flex-row justify-center items-center w-fit", style: {
            background: chainBGColor
        }, children: [_jsx(NetworkImage, { chainId: chainId, size: "xs" }), _jsx(Text, { variant: "xsmall", fontWeight: "bold", capitalize: true, ellipsis: true, style: {
                    color: chainColor
                }, children: network.title ?? network.name })] }));
};
//# sourceMappingURL=NetworkBadge.js.map