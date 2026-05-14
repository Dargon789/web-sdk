export interface NavigationHeaderContext {
    search: string;
    selectedTab: 'tokens' | 'collectibles' | 'history';
    setSearch: (search: string) => void;
    setSelectedTab: (tab: 'tokens' | 'collectibles' | 'history') => void;
}
declare const useNavigationHeaderContext: any, NavigationHeaderContextProvider: any;
export { NavigationHeaderContextProvider, useNavigationHeaderContext };
//# sourceMappingURL=NavigationHeader.d.ts.map