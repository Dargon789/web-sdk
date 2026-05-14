export declare const useGetCollections: ({ accountAddresses, chainIds, hideUnlistedTokens }: {
    accountAddresses: string[];
    chainIds: number[];
    hideUnlistedTokens: boolean;
}) => {
    data: {
        contractAddress: string;
        chainId: number;
        name: string;
        logoURI: string;
    }[];
    isLoading: boolean;
};
//# sourceMappingURL=useGetCollections.d.ts.map