import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput } from '@0xsequence/design-system';
import { useNavigationHeader } from '../../../hooks/useNavigationHeader.js';
export const SearchHeader = () => {
    const { search, setSearch } = useNavigationHeader();
    return (_jsx("div", { className: "grow px-4", children: _jsx(TextInput, { className: "w-full", autoFocus: true, placeholder: "Search", name: 'Search Wallet', value: search, onChange: e => setSearch(e.target.value) }) }));
};
//# sourceMappingURL=SearchHeader.js.map