"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const CollectionHeader = ({ contractAddress, chainId }) => {
    const { data: collectionData } = (0, hooks_1.useGetContractInfo)({
        chainID: chainId.toString(),
        contractAddress
    });
    console.log(collectionData);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center h-full w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-3", children: collectionData?.logoURI ? ((0, jsx_runtime_1.jsx)(design_system_1.Image, { className: "w-9 h-9 rounded-lg", src: collectionData?.logoURI, alt: collectionData?.name, style: {
                        objectFit: 'cover'
                    } })) : ((0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "w-9 h-9 rounded-lg" })) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", style: {
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }, children: collectionData?.name }) })] }));
};
exports.CollectionHeader = CollectionHeader;
//# sourceMappingURL=CollectionHeader.js.map