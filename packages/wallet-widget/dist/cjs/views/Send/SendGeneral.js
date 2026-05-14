"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGeneral = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const wagmi_1 = require("wagmi");
const index_js_1 = require("../../components/SearchLists/index.js");
const WalletSelect_js_1 = require("../../components/Select/WalletSelect.js");
const SendGeneral = () => {
    const { setActiveWallet } = (0, connect_1.useWallets)();
    const { address } = (0, wagmi_1.useConnection)();
    const onClickWallet = (address) => {
        setActiveWallet(address);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "px-4", children: (0, jsx_runtime_1.jsx)(WalletSelect_js_1.WalletSelect, { selectedWallet: String(address), onClick: onClickWallet }) }), (0, jsx_runtime_1.jsx)(index_js_1.GeneralList, { variant: "send" })] }));
};
exports.SendGeneral = SendGeneral;
//# sourceMappingURL=SendGeneral.js.map