import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { formatDisplay, truncateAtIndex } from '@0xsequence/connect';
import { findSupportedNetwork } from '@0xsequence/connect';
import { ArrowUpIcon, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ExternalLinkIcon, GradientAvatar, Image, NetworkImage, Separator, Skeleton, Text } from '@0xsequence/design-system';
import { useGetSingleTokenBalance } from '@0xsequence/hooks';
import { useState } from 'react';
import { formatUnits, getAddress } from 'viem';
import { useConfig } from 'wagmi';
import { TokenTileImage } from '../../components/TokenTileImage.js';
import { useNavigation, useSettings } from '../../hooks/index.js';
import { InfoBadge } from './InfoBadge.js';
import { PropertiesBadge } from './PropertiesBadge.js';
import { CollectibleDetailsSkeleton } from './Skeleton.js';
export const CollectibleDetails = ({ contractAddress, chainId, tokenId, accountAddress }) => {
    const { chains } = useConfig();
    const { setNavigation } = useNavigation();
    const network = findSupportedNetwork(chainId);
    const { hideUnlistedTokens } = useSettings();
    const [foundMarketplaceURL] = useState(null);
    const isReadOnly = !chains.map(chain => chain.id).includes(chainId);
    const { data: tokenBalance, isLoading: isLoadingCollectibleBalance } = useGetSingleTokenBalance({
        chainId,
        contractAddress,
        accountAddress: accountAddress || '',
        tokenId,
        hideUnlistedTokens: hideUnlistedTokens
    });
    const isLoading = isLoadingCollectibleBalance;
    if (isLoading) {
        return _jsx(CollectibleDetailsSkeleton, { isReadOnly: isReadOnly });
    }
    const onClickSend = () => {
        setNavigation({
            location: 'send-collectible',
            params: {
                chainId,
                contractAddress,
                tokenId: tokenId || ''
            }
        });
    };
    const onClickOpenScan = () => {
        // window.open(`${network?.blockExplorer?.rootUrl}token/${contractAddress}?a=${tokenId}`, '_blank')
        window.open(`${network?.blockExplorer?.rootUrl}nft/${contractAddress}/${tokenId}`, '_blank');
    };
    const onClickOpenMarketplace = () => { };
    const collectionLogo = tokenBalance?.contractInfo?.logoURI;
    const collectionName = tokenBalance?.contractInfo?.name || 'Unknown Collection';
    const decimals = tokenBalance?.tokenMetadata?.decimals || 0;
    const rawBalance = tokenBalance?.balance || '0';
    const balance = formatUnits(BigInt(rawBalance), decimals);
    const formattedBalance = formatDisplay(Number(balance));
    const onClickCollection = () => {
        setNavigation({
            location: 'collection-details',
            params: {
                chainId,
                contractAddress
            }
        });
    };
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col p-4 gap-4", children: [_jsx(TokenTileImage, { src: tokenBalance?.tokenMetadata?.image, symbol: tokenBalance?.tokenMetadata?.name }), _jsxs("div", { className: "flex flex-row gap-4", children: [_jsxs(Button, { className: "text-primary w-full", variant: "secondary", onClick: onClickSend, children: [_jsx(ArrowUpIcon, {}), "Send"] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { className: "text-primary w-full", variant: "secondary", children: [_jsx(ExternalLinkIcon, {}), "Open in..."] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-full min-w-[200px]", children: [_jsx(DropdownMenuItem, { onClick: onClickOpenScan, children: _jsxs(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: ["Open in ", network?.blockExplorer?.name] }) }), foundMarketplaceURL && (_jsx(DropdownMenuItem, { onClick: onClickOpenMarketplace, children: _jsx(Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Open in Marketplace" }) }))] })] })] }), _jsx(Text, { variant: "xxlarge", color: "primary", fontWeight: "bold", children: tokenBalance?.tokenMetadata?.name || 'Unknown Collectible' }), _jsxs("div", { className: "flex flex-row justify-between items-center", children: [_jsx(Text, { variant: "normal", color: "primary", children: "Network" }), _jsx(InfoBadge, { leftIcon: _jsx(NetworkImage, { chainId: chainId, size: "xs" }), label: chains.find(chain => chain.id === chainId)?.name || 'Unknown Network' })] }), _jsx(Separator, { className: "my-0" }), _jsxs("div", { className: "flex flex-row justify-between items-center", children: [_jsx(Text, { variant: "normal", color: "primary", children: "Collection" }), _jsx(InfoBadge, { leftIcon: collectionLogo ? (_jsx(Image, { src: collectionLogo, alt: "collection logo", className: "rounded-sm w-4" })) : (_jsx(Skeleton, { className: "w-4 h-4 rounded-sm" })), label: collectionName, onClick: () => {
                                onClickCollection();
                            } })] }), _jsx(Separator, { className: "my-0" }), _jsxs("div", { className: "flex flex-row justify-between items-center", children: [_jsx(Text, { variant: "normal", color: "primary", children: "Owner" }), _jsx(InfoBadge, { leftIcon: tokenBalance?.accountAddress && _jsx(GradientAvatar, { address: getAddress(tokenBalance?.accountAddress), size: "xs" }), label: truncateAtIndex(tokenBalance?.accountAddress || '', 8) || 'Unknown Owner' })] }), _jsx(Separator, { className: "my-0" }), _jsxs("div", { className: "flex flex-row justify-between items-center", children: [_jsx(Text, { variant: "normal", color: "primary", children: "Balance" }), _jsx(Text, { variant: "normal", color: "primary", children: formattedBalance })] }), _jsx(Separator, { className: "my-0" }), _jsx(Text, { variant: "normal", color: "primary", children: tokenBalance?.tokenMetadata?.description }), tokenBalance?.tokenMetadata?.properties?.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Separator, { className: "my-0" }), _jsx(Text, { variant: "normal", color: "primary", children: "Properties" }), tokenBalance?.tokenMetadata?.properties?.map((property) => (_jsx(PropertiesBadge, { name: property.name, value: property.value })))] }))] }) }));
};
//# sourceMappingURL=index.js.map