import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NetworkImage } from '@0xsequence/design-system';
import { TokenTileImage } from '../../TokenTileImage.js';
const NETWORK_IMAGE_SIZE = '15%';
const NETWORK_IMAGE_OFFSET = '2%';
export const CollectionTile = ({ balance, onTokenClick }) => {
    const onClick = () => {
        onTokenClick(balance);
    };
    const imageUrl = balance.logoURI;
    const symbol = balance.name;
    return (_jsxs("div", { className: "select-none cursor-pointer aspect-square relative", onClick: onClick, children: [_jsx(TokenTileImage, { src: imageUrl, symbol: symbol }), _jsx(NetworkImage, { chainId: balance.chainId, className: `absolute z-1`, style: {
                    width: NETWORK_IMAGE_SIZE,
                    height: NETWORK_IMAGE_SIZE,
                    right: NETWORK_IMAGE_OFFSET,
                    bottom: NETWORK_IMAGE_OFFSET
                } })] }));
};
//# sourceMappingURL=CollectionTile.js.map