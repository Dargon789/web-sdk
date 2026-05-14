"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetMoreBalances = void 0;
const react_query_1 = require("@tanstack/react-query");
const useGetMoreBalances = (balances, pageSize, options) => {
    return (0, react_query_1.useInfiniteQuery)({
        queryKey: ['infiniteBalances', balances],
        queryFn: ({ pageParam }) => {
            const startIndex = pageParam * pageSize;
            return balances.slice(startIndex, startIndex + pageSize);
        },
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < pageSize) {
                return undefined;
            }
            return allPages.length;
        },
        initialPageParam: 0,
        enabled: !!balances.length && (options?.enabled ?? true)
    });
};
exports.useGetMoreBalances = useGetMoreBalances;
//# sourceMappingURL=useGetMoreBalances.js.map