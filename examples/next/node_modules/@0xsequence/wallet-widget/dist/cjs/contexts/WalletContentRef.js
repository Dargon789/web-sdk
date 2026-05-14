"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletContentRefProvider = exports.WalletContentRefContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const WalletContentRefContext = (0, react_1.createContext)({ current: null });
exports.WalletContentRefContext = WalletContentRefContext;
const WalletContentRefProvider = ({ children }) => {
    const walletContentRef = (0, react_1.useRef)(null);
    return (0, jsx_runtime_1.jsx)(WalletContentRefContext.Provider, { value: walletContentRef, children: children });
};
exports.WalletContentRefProvider = WalletContentRefProvider;
//# sourceMappingURL=WalletContentRef.js.map