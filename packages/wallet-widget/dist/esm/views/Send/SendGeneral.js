import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { useConnection } from 'wagmi';
import { GeneralList } from '../../components/SearchLists/index.js';
import { WalletSelect } from '../../components/Select/WalletSelect.js';
export const SendGeneral = () => {
    const { setActiveWallet } = useWallets();
    const { address } = useConnection();
    const onClickWallet = (address) => {
        setActiveWallet(address);
    };
    return (_jsxs("div", { children: [_jsx("div", { className: "px-4", children: _jsx(WalletSelect, { selectedWallet: String(address), onClick: onClickWallet }) }), _jsx(GeneralList, { variant: "send" })] }));
};
//# sourceMappingURL=SendGeneral.js.map