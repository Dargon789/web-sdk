"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAllTokensDetails = void 0;
const hooks_1 = require("@0xsequence/hooks");
const indexer_1 = require("@0xsequence/indexer");
const react_1 = require("react");
const useGetAllTokensDetails = ({ accountAddresses, chainIds, hideUnlistedTokens }) => {
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
    return {
        data: tokenBalancesData?.pages.flatMap(page => page.balances) || [],
        isLoading: isLoading || isFetchingNextPage
    };
};
exports.useGetAllTokensDetails = useGetAllTokensDetails;
//# sourceMappingURL=useGetAllTokensDetails.js.map