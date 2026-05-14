import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useRef } from 'react';
const WalletContentRefContext = createContext({ current: null });
const WalletContentRefProvider = ({ children }) => {
    const walletContentRef = useRef(null);
    return _jsx(WalletContentRefContext.Provider, { value: walletContentRef, children: children });
};
export { WalletContentRefContext, WalletContentRefProvider };
//# sourceMappingURL=WalletContentRef.js.map