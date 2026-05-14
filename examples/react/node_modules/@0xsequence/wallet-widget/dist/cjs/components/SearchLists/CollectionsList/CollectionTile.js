"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionTile = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const TokenTileImage_js_1 = require("../../TokenTileImage.js");
const NETWORK_IMAGE_SIZE = '15%';
const NETWORK_IMAGE_OFFSET = '2%';
const CollectionTile = ({ balance, onTokenClick }) => {
    const onClick = () => {
        onTokenClick(balance);
    };
    const imageUrl = balance.logoURI;
    const symbol = balance.name;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "select-none cursor-pointer aspect-square relative", onClick: onClick, children: [(0, jsx_runtime_1.jsx)(TokenTileImage_js_1.TokenTileImage, { src: imageUrl, symbol: symbol }), (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: balance.chainId, className: `absolute z-1`, style: {
                    width: NETWORK_IMAGE_SIZE,
                    height: NETWORK_IMAGE_SIZE,
                    right: NETWORK_IMAGE_OFFSET,
                    bottom: NETWORK_IMAGE_OFFSET
                } })] }));
};
exports.CollectionTile = CollectionTile;
//# sourceMappingURL=CollectionTile.js.map