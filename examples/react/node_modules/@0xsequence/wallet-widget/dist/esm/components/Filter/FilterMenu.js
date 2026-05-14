import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { FilterOptions } from './FilterOptions.js';
export const FilterMenu = ({ filterMenuType }) => {
    const { wallets } = useWallets();
    return (_jsxs("div", { className: "flex flex-row gap-2 w-full overflow-x-auto hide-scrollbar", style: { scrollbarWidth: 'none' }, children: [filterMenuType === 'collectibles' && _jsx(FilterOptions, { filterType: "collections" }), _jsx(FilterOptions, { filterType: "networks" }), wallets.length > 1 && _jsx(FilterOptions, { filterType: "wallets" })] }));
};
//# sourceMappingURL=FilterMenu.js.map