"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const TokenHeader = ({ contractAddress, chainId, accountAddress }) => {
    const { chains } = (0, wagmi_1.useConfig)();
    const { data: tokenData } = (0, hooks_1.useGetSingleTokenBalance)({
        chainId,
        contractAddress,
        accountAddress: accountAddress ?? ''
    });
    const isNativeToken = (0, connect_1.compareAddress)(contractAddress, viem_1.zeroAddress);
    const nativeTokenInfo = (0, connect_1.getNativeTokenInfoByChainId)(chainId, chains);
    const logoURI = isNativeToken ? nativeTokenInfo.logoURI : tokenData?.contractInfo?.logoURI;
    const name = isNativeToken ? nativeTokenInfo.symbol : tokenData?.contractInfo?.name;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center h-full w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-3", children: logoURI ? ((0, jsx_runtime_1.jsx)(design_system_1.Image, { className: "w-9 h-9 rounded-lg", src: logoURI, alt: name, style: {
                        objectFit: 'cover'
                    } })) : ((0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "w-9 h-9 rounded-full" })) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col", children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "medium", color: "primary", style: {
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }, children: name }) })] }));
};
exports.TokenHeader = TokenHeader;
//# sourceMappingURL=TokenHeader.js.map