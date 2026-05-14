"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectibleDetails = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const connect_2 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const react_1 = require("react");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const TokenTileImage_js_1 = require("../../components/TokenTileImage.js");
const index_js_1 = require("../../hooks/index.js");
const InfoBadge_js_1 = require("./InfoBadge.js");
const PropertiesBadge_js_1 = require("./PropertiesBadge.js");
const Skeleton_js_1 = require("./Skeleton.js");
const CollectibleDetails = ({ contractAddress, chainId, tokenId, accountAddress }) => {
    const { chains } = (0, wagmi_1.useConfig)();
    const { setNavigation } = (0, index_js_1.useNavigation)();
    const network = (0, connect_2.findSupportedNetwork)(chainId);
    const { hideUnlistedTokens } = (0, index_js_1.useSettings)();
    const [foundMarketplaceURL] = (0, react_1.useState)(null);
    const isReadOnly = !chains.map(chain => chain.id).includes(chainId);
    const { data: tokenBalance, isLoading: isLoadingCollectibleBalance } = (0, hooks_1.useGetSingleTokenBalance)({
        chainId,
        contractAddress,
        accountAddress: accountAddress || '',
        tokenId,
        hideUnlistedTokens: hideUnlistedTokens
    });
    const isLoading = isLoadingCollectibleBalance;
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)(Skeleton_js_1.CollectibleDetailsSkeleton, { isReadOnly: isReadOnly });
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
    const balance = (0, viem_1.formatUnits)(BigInt(rawBalance), decimals);
    const formattedBalance = (0, connect_1.formatDisplay)(Number(balance));
    const onClickCollection = () => {
        setNavigation({
            location: 'collection-details',
            params: {
                chainId,
                contractAddress
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-4 gap-4", children: [(0, jsx_runtime_1.jsx)(TokenTileImage_js_1.TokenTileImage, { src: tokenBalance?.tokenMetadata?.image, symbol: tokenBalance?.tokenMetadata?.name }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-4", children: [(0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "text-primary w-full", variant: "secondary", onClick: onClickSend, children: [(0, jsx_runtime_1.jsx)(design_system_1.ArrowUpIcon, {}), "Send"] }), (0, jsx_runtime_1.jsxs)(design_system_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(design_system_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "text-primary w-full", variant: "secondary", children: [(0, jsx_runtime_1.jsx)(design_system_1.ExternalLinkIcon, {}), "Open in..."] }) }), (0, jsx_runtime_1.jsxs)(design_system_1.DropdownMenuContent, { align: "end", className: "w-full min-w-[200px]", children: [(0, jsx_runtime_1.jsx)(design_system_1.DropdownMenuItem, { onClick: onClickOpenScan, children: (0, jsx_runtime_1.jsxs)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: ["Open in ", network?.blockExplorer?.name] }) }), foundMarketplaceURL && ((0, jsx_runtime_1.jsx)(design_system_1.DropdownMenuItem, { onClick: onClickOpenMarketplace, children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", fontWeight: "bold", color: "primary", children: "Open in Marketplace" }) }))] })] })] }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "xxlarge", color: "primary", fontWeight: "bold", children: tokenBalance?.tokenMetadata?.name || 'Unknown Collectible' }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: "Network" }), (0, jsx_runtime_1.jsx)(InfoBadge_js_1.InfoBadge, { leftIcon: (0, jsx_runtime_1.jsx)(design_system_1.NetworkImage, { chainId: chainId, size: "xs" }), label: chains.find(chain => chain.id === chainId)?.name || 'Unknown Network' })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: "Collection" }), (0, jsx_runtime_1.jsx)(InfoBadge_js_1.InfoBadge, { leftIcon: collectionLogo ? ((0, jsx_runtime_1.jsx)(design_system_1.Image, { src: collectionLogo, alt: "collection logo", className: "rounded-sm w-4" })) : ((0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { className: "w-4 h-4 rounded-sm" })), label: collectionName, onClick: () => {
                                onClickCollection();
                            } })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: "Owner" }), (0, jsx_runtime_1.jsx)(InfoBadge_js_1.InfoBadge, { leftIcon: tokenBalance?.accountAddress && (0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { address: (0, viem_1.getAddress)(tokenBalance?.accountAddress), size: "xs" }), label: (0, connect_1.truncateAtIndex)(tokenBalance?.accountAddress || '', 8) || 'Unknown Owner' })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: "Balance" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: formattedBalance })] }), (0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: tokenBalance?.tokenMetadata?.description }), tokenBalance?.tokenMetadata?.properties?.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "primary", children: "Properties" }), tokenBalance?.tokenMetadata?.properties?.map((property) => ((0, jsx_runtime_1.jsx)(PropertiesBadge_js_1.PropertiesBadge, { name: property.name, value: property.value })))] }))] }) }));
};
exports.CollectibleDetails = CollectibleDetails;
//# sourceMappingURL=index.js.map