import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { compareAddress, getNativeTokenInfoByChainId } from '@0xsequence/connect';
import { Image, Skeleton, Text } from '@0xsequence/design-system';
import { useGetSingleTokenBalance } from '@0xsequence/hooks';
import { zeroAddress } from 'viem';
import { useConfig } from 'wagmi';
export const TokenHeader = ({ contractAddress, chainId, accountAddress }) => {
    const { chains } = useConfig();
    const { data: tokenData } = useGetSingleTokenBalance({
        chainId,
        contractAddress,
        accountAddress: accountAddress ?? ''
    });
    const isNativeToken = compareAddress(contractAddress, zeroAddress);
    const nativeTokenInfo = getNativeTokenInfoByChainId(chainId, chains);
    const logoURI = isNativeToken ? nativeTokenInfo.logoURI : tokenData?.contractInfo?.logoURI;
    const name = isNativeToken ? nativeTokenInfo.symbol : tokenData?.contractInfo?.name;
    return (_jsxs("div", { className: "flex flex-row items-center h-full w-full", children: [_jsx("div", { className: "px-3", children: logoURI ? (_jsx(Image, { className: "w-9 h-9 rounded-lg", src: logoURI, alt: name, style: {
                        objectFit: 'cover'
                    } })) : (_jsx(Skeleton, { className: "w-9 h-9 rounded-full" })) }), _jsx("div", { className: "flex flex-col", children: _jsx(Text, { variant: "medium", color: "primary", style: {
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }, children: name }) })] }));
};
//# sourceMappingURL=TokenHeader.js.map