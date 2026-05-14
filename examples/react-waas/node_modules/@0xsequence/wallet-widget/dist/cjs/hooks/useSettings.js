"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSettings = void 0;
const connect_1 = require("@0xsequence/connect");
const micro_observables_1 = require("micro-observables");
const wagmi_1 = require("wagmi");
const index_js_1 = require("../constants/index.js");
let settingsObservables = null;
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
const useSettings = () => {
    const { readOnlyNetworks, displayedAssets } = (0, connect_1.useWalletSettings)();
    const { chains } = (0, wagmi_1.useConfig)();
    const { wallets: allWallets } = (0, connect_1.useWallets)();
    const allNetworks = [
        ...new Set([...chains.map(chain => chain.id), ...(readOnlyNetworks || []), ...displayedAssets.map(asset => asset.chainId)])
    ];
    const buildDefaultObservables = () => ({
        hideUnlistedTokensObservable: (0, micro_observables_1.observable)(true),
        fiatCurrencyObservable: (0, micro_observables_1.observable)(index_js_1.defaultFiatCurrency),
        selectedWalletsObservable: (0, micro_observables_1.observable)(allWallets),
        selectedNetworksObservable: (0, micro_observables_1.observable)(allNetworks),
        showCollectionsObservable: (0, micro_observables_1.observable)(false)
    });
    const getSettingsFromStorage = () => {
        let hideUnlistedTokens = true;
        let fiatCurrency = index_js_1.defaultFiatCurrency;
        let selectedWallets = allWallets;
        let selectedNetworks = allNetworks;
        let showCollections = false;
        if (typeof window === 'undefined') {
            return buildDefaultObservables();
        }
        try {
            const settingsStorage = localStorage.getItem(connect_1.LocalStorageKey.Settings);
            const settings = JSON.parse(settingsStorage || '{}');
            if (settings?.hideUnlistedTokens !== undefined) {
                hideUnlistedTokens = settings?.hideUnlistedTokens;
            }
            if (settings?.fiatCurrency !== undefined) {
                fiatCurrency = settings?.fiatCurrency;
            }
            if (settings?.selectedWallets !== undefined) {
                selectedWallets = settings?.selectedWallets;
                const isPartialSelection = selectedWallets.length > 1 && selectedWallets.length !== allWallets.length;
                const hasInvalidWallets = selectedWallets.some(wallet => !allWallets.some((w) => w.address === wallet.address)) ||
                    isPartialSelection;
                if (hasInvalidWallets && allWallets.length !== 0) {
                    selectedWallets = allWallets;
                    localStorage.setItem(connect_1.LocalStorageKey.Settings, JSON.stringify({ ...settings, selectedWallets: allWallets }));
                }
            }
            if (settings?.selectedNetworks !== undefined) {
                selectedNetworks = settings?.selectedNetworks;
                let hasInvalidNetworks = false;
                settings.selectedNetworks.forEach((chainId) => {
                    if (allNetworks.find(chain => chain === chainId) === undefined) {
                        hasInvalidNetworks = true;
                    }
                });
                if (hasInvalidNetworks) {
                    selectedNetworks = allNetworks;
                    localStorage.setItem(connect_1.LocalStorageKey.Settings, JSON.stringify({ ...settings, selectedNetworks: allNetworks }));
                }
            }
            if (settings?.showCollections !== undefined) {
                showCollections = settings?.showCollections;
            }
        }
        catch (e) {
            console.error(e, 'Failed to fetch settings');
        }
        return {
            hideUnlistedTokensObservable: (0, micro_observables_1.observable)(hideUnlistedTokens),
            fiatCurrencyObservable: (0, micro_observables_1.observable)(fiatCurrency),
            selectedWalletsObservable: (0, micro_observables_1.observable)(selectedWallets),
            selectedNetworksObservable: (0, micro_observables_1.observable)(selectedNetworks),
            showCollectionsObservable: (0, micro_observables_1.observable)(showCollections)
        };
    };
    const resetSettings = () => {
        if (settingsObservables) {
            const selectedWallets = settingsObservables.selectedWalletsObservable.get();
            const isPartialSelection = selectedWallets.length > 1 && selectedWallets.length !== allWallets.length;
            const hasInvalidWallets = selectedWallets.some(wallet => !allWallets.some((w) => w.address === wallet.address)) ||
                isPartialSelection;
            if (hasInvalidWallets || !selectedWallets.length) {
                return true;
            }
        }
        return false;
    };
    if (!settingsObservables || resetSettings()) {
        settingsObservables = getSettingsFromStorage();
    }
    const { hideUnlistedTokensObservable, fiatCurrencyObservable, selectedWalletsObservable, selectedNetworksObservable, showCollectionsObservable } = settingsObservables;
    const setHideUnlistedTokens = (newState) => {
        hideUnlistedTokensObservable.set(newState);
        updateLocalStorage();
    };
    const setFiatCurrency = (newFiatCurrency) => {
        fiatCurrencyObservable.set(newFiatCurrency);
        updateLocalStorage();
    };
    const setSelectedWallets = (newSelectedWallets) => {
        if (newSelectedWallets.length === 0) {
            selectedWalletsObservable.set(allWallets);
        }
        else {
            selectedWalletsObservable.set(newSelectedWallets);
        }
        updateLocalStorage();
    };
    const setSelectedNetworks = (newSelectedNetworks) => {
        if (newSelectedNetworks.length === 0) {
            selectedNetworksObservable.set(allNetworks);
        }
        else {
            selectedNetworksObservable.set(newSelectedNetworks);
        }
        updateLocalStorage();
    };
    const setShowCollections = (newState) => {
        showCollectionsObservable.set(newState);
        updateLocalStorage();
    };
    const updateLocalStorage = () => {
        if (typeof window === 'undefined') {
            return;
        }
        const newSettings = {
            hideUnlistedTokens: hideUnlistedTokensObservable.get(),
            fiatCurrency: fiatCurrencyObservable.get(),
            selectedWallets: selectedWalletsObservable.get(),
            selectedNetworks: selectedNetworksObservable.get(),
            showCollections: showCollectionsObservable.get()
        };
        console.log('settings updated', newSettings);
        localStorage.setItem(connect_1.LocalStorageKey.Settings, JSON.stringify(newSettings));
    };
    return {
        hideUnlistedTokens: hideUnlistedTokensObservable.get(),
        fiatCurrency: fiatCurrencyObservable.get(),
        selectedWallets: selectedWalletsObservable.get(),
        selectedNetworks: selectedNetworksObservable.get(),
        allNetworks: allNetworks,
        showCollections: showCollectionsObservable.get(),
        hideUnlistedTokensObservable,
        fiatCurrencyObservable,
        selectedWalletsObservable,
        selectedNetworksObservable,
        showCollectionsObservable,
        setFiatCurrency,
        setHideUnlistedTokens,
        setSelectedWallets,
        setSelectedNetworks,
        setShowCollections
    };
};
exports.useSettings = useSettings;
//# sourceMappingURL=useSettings.js.map