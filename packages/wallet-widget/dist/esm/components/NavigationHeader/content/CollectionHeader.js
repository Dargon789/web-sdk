import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, Skeleton, Text } from '@0xsequence/design-system';
import { useGetContractInfo } from '@0xsequence/hooks';
export const CollectionHeader = ({ contractAddress, chainId }) => {
    const { data: collectionData } = useGetContractInfo({
        chainID: chainId.toString(),
        contractAddress
    });
    console.log(collectionData);
    return (_jsxs("div", { className: "flex flex-row items-center h-full w-full", children: [_jsx("div", { className: "px-3", children: collectionData?.logoURI ? (_jsx(Image, { className: "w-9 h-9 rounded-lg", src: collectionData?.logoURI, alt: collectionData?.name, style: {
                        objectFit: 'cover'
                    } })) : (_jsx(Skeleton, { className: "w-9 h-9 rounded-lg" })) }), _jsx("div", { className: "flex flex-col", children: _jsx(Text, { variant: "medium", color: "primary", style: {
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }, children: collectionData?.name }) })] }));
};
//# sourceMappingURL=CollectionHeader.js.map