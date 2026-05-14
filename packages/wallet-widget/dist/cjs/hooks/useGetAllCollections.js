"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAllCollections = void 0;
const hooks_1 = require("@0xsequence/hooks");
const indexer_1 = require("@0xsequence/indexer");
const react_1 = require("react");
const useGetAllCollections = ({ accountAddresses, chainIds, hideUnlistedTokens }) => {
    const { data: tokenBalancesData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, hooks_1.useGetTokenBalancesSummary)({
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
    const collections = tokenBalancesData?.pages.flatMap(page => page.balances.filter(balance => balance.contractType === 'ERC721' || balance.contractType === 'ERC1155'));
    const { data: collectionsWithMetadata } = (0, hooks_1.useGetMultipleContractsInfo)(collections?.map(collection => ({
        chainID: collection.chainId.toString(),
        contractAddress: collection.contractAddress
    })) || []);
    return {
        data: collectionsWithMetadata || [],
        isLoading: isLoading || isFetchingNextPage
    };
};
exports.useGetAllCollections = useGetAllCollections;
//# sourceMappingURL=useGetAllCollections.js.map