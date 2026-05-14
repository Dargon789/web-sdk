import { useInfiniteQuery } from '@tanstack/react-query';
export const useGetMoreBalances = (balances, pageSize, options) => {
    return useInfiniteQuery({
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
//# sourceMappingURL=useGetMoreBalances.js.map