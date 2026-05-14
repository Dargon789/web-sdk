import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, Skeleton, Text } from '@0xsequence/design-system';
import { useGetTokenMetadata } from '@0xsequence/hooks';
export const CollectibleHeader = ({ chainId, contractAddress, tokenId }) => {
    const collectibleMetadata = useGetTokenMetadata({
        chainID: chainId.toString(),
        contractAddress: contractAddress,
        tokenIDs: [tokenId ?? '']
    }).data?.[0];
    return (_jsxs("div", { className: "flex flex-row items-center h-full w-full", children: [_jsx("div", { className: "px-3", children: collectibleMetadata?.image ? (_jsx(Image, { className: "w-9 h-9 rounded-lg", src: collectibleMetadata?.image, alt: collectibleMetadata?.name, style: {
                        objectFit: 'cover'
                    } })) : (_jsx(Skeleton, { className: "w-9 h-9 rounded-lg" })) }), _jsx("div", { className: "flex flex-col", children: _jsx(Text, { variant: "medium", color: "primary", style: {
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }, children: collectibleMetadata?.name }) })] }));
};
//# sourceMappingURL=CollectibleHeader.js.map