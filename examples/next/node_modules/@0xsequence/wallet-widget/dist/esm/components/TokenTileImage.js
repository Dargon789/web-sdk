import { jsx as _jsx } from "react/jsx-runtime";
import { Card, Image, Text } from '@0xsequence/design-system';
export const TokenTileImage = ({ src, symbol }) => {
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
    return (_jsx(Card, { className: "flex p-0 aspect-square justify-center items-center overflow-hidden rounded-lg bg-background-secondary", children: src ? (_jsx(Image, { className: "h-full", src: src })) : (_jsx(Text, { variant: "inherit", fontWeight: "medium", color: "muted", uppercase: true, children: symbolLabel })) }));
};
//# sourceMappingURL=TokenTileImage.js.map