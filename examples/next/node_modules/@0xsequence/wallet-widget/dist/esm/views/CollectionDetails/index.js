import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContractVerificationStatus, useWallets } from '@0xsequence/connect';
import { Separator, TabsContent, TabsPrimitive, Text } from '@0xsequence/design-system';
import { useGetTokenBalancesByContract } from '@0xsequence/hooks';
import { useState } from 'react';
import { NoResults } from '../../components/NoResults.js';
import { CollectiblesTab } from '../../components/SearchLists/CollectiblesList/CollectiblesTab.js';
import { useNavigation, useSettings } from '../../hooks/index.js';
export const CollectionDetails = ({ contractAddress, chainId }) => {
    const { setNavigation } = useNavigation();
    const { wallets } = useWallets();
    const { hideUnlistedTokens } = useSettings();
    const [selectedTab, setSelectedTab] = useState('collectibles');
    const { data: collectibles, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetTokenBalancesByContract({
        chainIds: [chainId],
        filter: {
            accountAddresses: wallets.map(wallet => wallet.address),
            contractAddresses: [contractAddress],
            contractStatus: hideUnlistedTokens ? ContractVerificationStatus.VERIFIED : ContractVerificationStatus.ALL
        }
    });
    const onClickCollectible = (collectible) => {
        setNavigation({
            location: 'collectible-details',
            params: {
                contractAddress: collectible.contractAddress,
                chainId: collectible.chainId,
                tokenId: collectible.tokenID || '',
                accountAddress: collectible.accountAddress
            }
        });
    };
    return (_jsx("div", { children: _jsxs(TabsPrimitive.Root, { className: "w-full", value: selectedTab, onValueChange: value => setSelectedTab(value), children: [_jsxs("div", { className: "flex flex-col w-full relative", children: [_jsxs(TabsPrimitive.TabsList, { className: "px-4", children: [_jsxs(TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "collectibles", children: [_jsx(Text, { className: "px-4", variant: "medium", color: selectedTab === 'collectibles' ? 'primary' : 'muted', children: "My Collectibles" }), selectedTab === 'collectibles' && _jsx("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] }), _jsxs(TabsPrimitive.TabsTrigger, { className: "h-10 relative cursor-pointer", value: "explore", children: [_jsx(Text, { className: "px-4", variant: "medium", color: selectedTab === 'explore' ? 'primary' : 'muted', children: "Explore" }), selectedTab === 'explore' && _jsx("div", { className: "absolute bottom-0 w-full h-[2px] bg-white" })] })] }), _jsx(Separator, { className: "absolute bottom-0 my-0 w-full" })] }), _jsxs("div", { className: "flex flex-col p-4 pb-2 gap-4", children: [_jsx(TabsContent, { value: "collectibles", children: _jsx(CollectiblesTab, { displayedCollectibleBalances: collectibles?.pages.flatMap(page => page.balances) || [], fetchMoreCollectibleBalances: fetchNextPage, hasMoreCollectibleBalances: hasNextPage, isFetchingMoreCollectibleBalances: isFetchingNextPage, isFetchingInitialBalances: isLoading, onTokenClick: onClickCollectible }) }), _jsx(TabsContent, { value: "explore", children: _jsx(NoResults, { customText: "Coming soon" }) })] })] }) }));
};
//# sourceMappingURL=index.js.map