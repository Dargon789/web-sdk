import { type ConnectedWallet } from '@0xsequence/connect';
import { Observable } from 'micro-observables';
import { type FiatCurrency } from '../constants/index.js';
export interface SettingsCollection {
    contractAddress: string;
    chainId: number;
    name: string;
    logoURI: string;
}
interface Settings {
    hideUnlistedTokens: boolean;
    fiatCurrency: FiatCurrency;
    selectedNetworks: number[];
    allNetworks: number[];
    selectedWallets: ConnectedWallet[];
    showCollections: boolean;
    hideUnlistedTokensObservable: Observable<boolean>;
    fiatCurrencyObservable: Observable<FiatCurrency>;
    selectedNetworksObservable: Observable<number[]>;
    selectedWalletsObservable: Observable<ConnectedWallet[]>;
    showCollectionsObservable: Observable<boolean>;
    setFiatCurrency: (newFiatCurrency: FiatCurrency) => void;
    setHideUnlistedTokens: (newState: boolean) => void;
    setSelectedWallets: (newWallets: ConnectedWallet[]) => void;
    setSelectedNetworks: (newNetworks: number[]) => void;
    setShowCollections: (newState: boolean) => void;
}
/**
 * Hook to manage wallet settings with persistent storage.
 * Provides access to and control over user preferences for the wallet interface.
 * Settings are stored in localStorage and persist across sessions.
 *
 * @returns {Settings} Object containing current settings and setter functions:
 * - `hideUnlistedTokens`: Whether to hide unverified tokens
 * - `fiatCurrency`: Selected fiat currency for value display (e.g., USD, EUR)
 * - `selectedNetworks`: Array of chain IDs for networks to display
 * - `setFiatCurrency`: Function to update fiat currency preference
 * - `setHideUnlistedTokens`: Function to toggle unlisted tokens visibility
 * - `setSelectedNetworks`: Function to update selected networks
 *
 * @see {@link https://docs.sequence.xyz/sdk/web/hooks/useSettings} for more detailed documentation.
 *
 * @example
 * ```tsx
 * // Basic usage in a component
 * function WalletView() {
 *   const {
 *     fiatCurrency,
 *     selectedNetworks,
 *   } = useSettings()
 *
 *   return (
 *     <div>
 *       <Text>Currency: {fiatCurrency.symbol}</Text>
 *     </div>
 *   )
 * } *
 */
export declare const useSettings: () => Settings;
export {};
//# sourceMappingURL=useSettings.d.ts.map