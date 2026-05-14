"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTileImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const TokenTileImage = ({ src, symbol }) => {
    let symbolLabel;
    const abrevSymbol = symbol
        ?.split(' ')
        .map(word => word[0])
        .join('');
    const shortSymbol = symbol?.replace(/\s/, '').slice(0, 6);
    if (abrevSymbol && abrevSymbol.length > 2) {
        symbolLabel = abrevSymbol;
    }
    else {
        symbolLabel = shortSymbol;
    }
    return ((0, jsx_runtime_1.jsx)(design_system_1.Card, { className: "flex p-0 aspect-square justify-center items-center overflow-hidden rounded-lg bg-background-secondary", children: src ? ((0, jsx_runtime_1.jsx)(design_system_1.Image, { className: "h-full", src: src })) : ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "inherit", fontWeight: "medium", color: "muted", uppercase: true, children: symbolLabel })) }));
};
exports.TokenTileImage = TokenTileImage;
//# sourceMappingURL=TokenTileImage.js.map