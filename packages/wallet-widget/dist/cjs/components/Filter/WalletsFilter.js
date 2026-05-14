"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const micro_observables_1 = require("micro-observables");
const index_js_1 = require("../../hooks/index.js");
const ListCardWallet_js_1 = require("../ListCard/ListCardWallet.js");
const WalletsFilter = ({ onClose }) => {
    const { selectedWalletsObservable, setSelectedWallets } = (0, index_js_1.useSettings)();
    const { wallets } = (0, connect_1.useWallets)();
    const selectedWallets = (0, micro_observables_1.useObservable)(selectedWalletsObservable);
    const onWalletClick = (wallet) => {
        if (wallet) {
            setSelectedWallets([wallet]);
        }
        else {
            setSelectedWallets([]);
        }
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col bg-background-primary gap-3", children: wallets.map(wallet => ((0, jsx_runtime_1.jsx)(ListCardWallet_js_1.ListCardWallet, { isSelected: selectedWallets.length === 1 && selectedWallets.some(w => w.address === wallet.address), wallet: wallet, onClick: () => onWalletClick(wallet) }, wallet.address))) }));
};
exports.WalletsFilter = WalletsFilter;
//# sourceMappingURL=WalletsFilter.js.map