import { jsx as _jsx } from "react/jsx-runtime";
import { CollectionDetails } from '../../../views/CollectionDetails/index.js';
import { Buy, CoinDetails, CollectibleDetails, Home, Receive, Search, SendCoin, SendCollectible, SendGeneral, SettingsApps, SettingsCurrency, SettingsMenu, SettingsPreferences, SettingsProfiles, SettingsWallets, 
// QrScan,
Swap, TransactionDetails } from '../../../views/index.js';
import { NavigationHeader } from '../../NavigationHeader/index.js';
export const getContent = (navigation) => {
    const { location } = navigation;
    switch (location) {
        case 'send-general':
            return _jsx(SendGeneral, {});
        case 'send-coin':
            return _jsx(SendCoin, { chainId: navigation.params.chainId, contractAddress: navigation.params.contractAddress });
        case 'send-collectible':
            return (_jsx(SendCollectible, { chainId: navigation.params.chainId, contractAddress: navigation.params.contractAddress, tokenId: navigation.params.tokenId }));
        case 'swap':
            return _jsx(Swap, {});
        case 'receive':
            return _jsx(Receive, {});
        case 'buy':
            return _jsx(Buy, {});
        case 'search':
            return _jsx(Search, {});
        case 'settings':
            return _jsx(SettingsMenu, {});
        case 'settings-wallets':
            return _jsx(SettingsWallets, {});
        case 'settings-currency':
            return _jsx(SettingsCurrency, {});
        case 'settings-profiles':
            return _jsx(SettingsProfiles, {});
        case 'settings-preferences':
            return _jsx(SettingsPreferences, {});
        case 'settings-apps':
            return _jsx(SettingsApps, {});
        // case 'connect-dapp':
        //   return <QrScan />
        case 'coin-details':
            return (_jsx(CoinDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId, accountAddress: navigation.params.accountAddress }));
        case 'collectible-details':
            return (_jsx(CollectibleDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId, tokenId: navigation.params.tokenId, accountAddress: navigation.params.accountAddress }));
        case 'collection-details':
            return _jsx(CollectionDetails, { contractAddress: navigation.params.contractAddress, chainId: navigation.params.chainId });
        case 'transaction-details':
            return _jsx(TransactionDetails, { transaction: navigation.params.transaction });
        case 'home':
        default:
            return _jsx(Home, {});
    }
};
export const getHeader = (navigation) => {
    const { location } = navigation;
    switch (location) {
        case 'home':
            return _jsx(NavigationHeader, { type: "home" });
        case 'settings':
            return _jsx(NavigationHeader, { label: "Settings" });
        case 'settings-wallets':
            return _jsx(NavigationHeader, { label: "Wallets" });
        case 'settings-currency':
            return _jsx(NavigationHeader, { label: "Currency" });
        case 'settings-profiles':
            return _jsx(NavigationHeader, { label: "Profiles" });
        case 'settings-preferences':
            return _jsx(NavigationHeader, { label: "Preferences" });
        case 'settings-apps':
            return _jsx(NavigationHeader, {});
        case 'connect-dapp':
            return _jsx(NavigationHeader, {});
        case 'coin-details':
            return (_jsx(NavigationHeader, { type: "token", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress,
                    accountAddress: navigation.params.accountAddress
                } }));
        case 'collectible-details':
            return (_jsx(NavigationHeader, { type: "collectible", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress,
                    tokenId: navigation.params.tokenId
                } }));
        case 'collection-details':
            return (_jsx(NavigationHeader, { type: "collection", info: {
                    chainId: navigation.params.chainId,
                    contractAddress: navigation.params.contractAddress
                } }));
        case 'transaction-details':
            return _jsx(NavigationHeader, {});
        case 'send-general':
        case 'send-coin':
        case 'send-collectible':
            return _jsx(NavigationHeader, { label: "Send" });
        case 'swap':
            return _jsx(NavigationHeader, { label: "Swap" });
        case 'receive':
            return _jsx(NavigationHeader, { label: "Receive" });
        case 'buy':
            return _jsx(NavigationHeader, { label: "Buy" });
        case 'search':
            return _jsx(NavigationHeader, { type: "search" });
    }
};
//# sourceMappingURL=index.js.map