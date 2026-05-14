"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCollections = void 0;
const hooks_1 = require("@0xsequence/hooks");
const indexer_1 = require("@0xsequence/indexer");
const react_1 = require("react");
const useGetCollections = ({ accountAddresses, chainIds, hideUnlistedTokens }) => {
    const { data: tokenBalancesData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, hooks_1.useGetTokenBalancesDetails)({
        chainIds,
        filter: {
            accountAddresses,
            contractStatus: hideUnlistedTokens ? indexer_1.ContractVerificationStatus.VERIFIED : indexer_1.ContractVerificationStatus.ALL,
            omitNativeBalances: false
        },
        page: { pageSize: 40 }
    });
    (0, react_1.useEffect)(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage]);
    const collections = tokenBalancesData?.pages
        .flatMap(page => page.balances)
        .filter(token => token.contractType === indexer_1.ContractType.ERC721 || token.contractType === indexer_1.ContractType.ERC1155)
        .map(collectible => {
        return {
            contractAddress: collectible.contractAddress,
            chainId: collectible.chainId,
            name: collectible.contractInfo?.name || '',
            logoURI: collectible.contractInfo?.logoURI || ''
        };
    });
    const uniqueCollections = Array.from(new Map(collections?.map(collection => [collection?.contractAddress, collection])).values());
    return {
        data: uniqueCollections,
        isLoading: isLoading || isFetchingNextPage
    };
};
exports.useGetCollections = useGetCollections;
//# sourceMappingURL=useGetCollections.js.map