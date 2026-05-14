"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeader = exports.getContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_js_1 = require("../../../views/CollectionDetails/index.js");
const index_js_2 = require("../../../views/index.js");
const index_js_3 = require("../../NavigationHeader/index.js");
const getContent = (navigation) => {
    const { location } = navigation;
    switch (location) {
        case 'send-general':
            return (0, jsx_runtime_1.jsx)(index_js_2.SendGeneral, {});
        case 'send-coin':
            return (0, jsx_runtime_1.jsx)(index_js_2.SendCoin, { chainId: navigation.params.chainId, contractAddress: navigation.params.contractAddress });
        case 'send-collectible':
            return ((0, jsx_runtime_1.jsx)(index_js_2.SendCollectible, { chainId: navigation.params.chainId, contractAddress: navigation.params.contractAddress, tokenId: navigation.params.tokenId }));
        case 'swap':
            return (0, jsx_runtime_1.jsx)(index_js_2.Swap, {});
        case 'receive':
            return (0, jsx_runtime_1.jsx)(index_js_2.Receive, {});
        case 'buy':
            return (0, jsx_runtime_1.jsx)(index_js_2.Buy, {});
        case 'search':
            return (0, jsx_runtime_1.jsx)(index_js_2.Search, {});
        case 'settings':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsMenu, {});
        case 'settings-wallets':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsWallets, {});
        case 'settings-currency':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsCurrency, {});
        case 'settings-profiles':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsProfiles, {});
        case 'settings-preferences':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsPreferences, {});
        case 'settings-apps':
            return (0, jsx_runtime_1.jsx)(index_js_2.SettingsApps, {});
        // case 'connect-dapp':
        //   return <QrScan />
        case 'coin-details':
            return ((0, jsx_runtime_1.jsx)(index_js_2.CoinDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId, accountAddress: navigation.params.accountAddress }));
        case 'collectible-details':
            return ((0, jsx_runtime_1.jsx)(index_js_2.CollectibleDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId, tokenId: navigation.params.tokenId, accountAddress: navigation.params.accountAddress }));
        case 'collection-details':
            return (0, jsx_runtime_1.jsx)(index_js_1.CollectionDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId });
        case 'transaction-details':
            return (0, jsx_runtime_1.jsx)(index_js_2.TransactionDetails, { transaction: navigation.params.transaction });
        case 'home':
        default:
            return (0, jsx_runtime_1.jsx)(index_js_2.Home, {});
    }
};
exports.getContent = getContent;
const getHeader = (navigation) => {
    const { location } = navigation;
    switch (location) {
        case 'home':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { type: "home" });
        case 'settings':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Settings" });
        case 'settings-wallets':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Wallets" });
        case 'settings-currency':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Currency" });
        case 'settings-profiles':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Profiles" });
        case 'settings-preferences':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Preferences" });
        case 'settings-apps':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, {});
        case 'connect-dapp':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, {});
        case 'coin-details':
            return ((0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { type: "token", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress,
                    accountAddress: navigation.params.accountAddress
                } }));
        case 'collectible-details':
            return ((0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { type: "collectible", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress,
                    tokenId: navigation.params.tokenId
                } }));
        case 'collection-details':
            return ((0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { type: "collection", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress
                } }));
        case 'transaction-details':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, {});
        case 'send-general':
        case 'send-coin':
        case 'send-collectible':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Send" });
        case 'swap':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Swap" });
        case 'receive':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Receive" });
        case 'buy':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { label: "Buy" });
        case 'search':
            return (0, jsx_runtime_1.jsx)(index_js_3.NavigationHeader, { type: "search" });
    }
};
exports.getHeader = getHeader;
//# sourceMappingURL=index.js.map