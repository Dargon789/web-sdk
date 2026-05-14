'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getModalPositionCss, ShadowRoot, useConnectConfigContext, useOpenConnectModal, useSocialLink, useTheme } from '@0xsequence/connect';
import { Modal, Scroll } from '@0xsequence/design-system';
import { AnimatePresence } from 'motion/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import { WALLET_HEIGHT, WALLET_WIDTH } from '../../constants/index.js';
import { NavigationContextProvider, WalletModalContextProvider } from '../../contexts/index.js';
import { NavigationHeaderContextProvider } from '../../contexts/NavigationHeader.js';
import { WalletContentRefContext, WalletContentRefProvider } from '../../contexts/WalletContentRef.js';
import { SharedProvider } from './ProviderComponents/SharedProvider.js';
import { ValueRegistryProvider } from './ProviderComponents/ValueRegistryProvider.js';
import { getContent, getHeader } from './utils/index.js';
const DEFAULT_LOCATION = {
    location: 'home'
};
export const SequenceWalletProvider = (props) => {
    return (_jsx(WalletContentRefProvider, { children: _jsx(WalletContent, { ...props }) }));
};
export const WalletContent = ({ children }) => {
    const { theme, position } = useTheme();
    const { isConnectModalOpen } = useOpenConnectModal();
    const { isSocialLinkOpen } = useSocialLink();
    const { address } = useAccount();
    const { customCSS } = useConnectConfigContext();
    useEffect(() => {
        if (!address) {
            setOpenWalletModal(false);
        }
    }, [address]);
    // Wallet Modal Context
    const [openWalletModal, setOpenWalletModalState] = useState(false);
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            const event = new CustomEvent('sequence:wallet-modal-state-change', {
                detail: { open: openWalletModal }
            });
            window.dispatchEvent(event);
        }
    }, [openWalletModal]);
    const setOpenWalletModal = (open, options) => {
        setOpenWalletModalState(open);
        setTimeout(() => {
            setHistory(options?.defaultNavigation ? [options.defaultNavigation] : []);
        }, 0);
    };
    // Navigation Context
    const [history, setHistory] = useState([]);
    const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(true);
    const navigation = history.length > 0 ? history[history.length - 1] : DEFAULT_LOCATION;
    // Navigation Header Context
    const [search, setSearch] = useState('');
    const [selectedTab, setSelectedTab] = useState('tokens');
    const displayScrollbar = navigation.location === 'home' ||
        navigation.location === 'send-general' ||
        navigation.location === 'send-coin' ||
        navigation.location === 'collectible-details' ||
        navigation.location === 'coin-details' ||
        navigation.location === 'collection-details' ||
        navigation.location === 'transaction-details' ||
        navigation.location === 'swap' ||
        navigation.location === 'search' ||
        navigation.location === 'settings-wallets' ||
        navigation.location === 'settings-currency' ||
        navigation.location === 'settings-profiles' ||
        navigation.location === 'settings-apps';
    const walletContentRef = useContext(WalletContentRefContext);
    return (_jsx(WalletModalContextProvider, { value: { setOpenWalletModal, openWalletModalState: openWalletModal }, children: _jsx(NavigationContextProvider, { value: { setHistory, history, isBackButtonEnabled, setIsBackButtonEnabled }, children: _jsx(SharedProvider, { children: _jsx(ValueRegistryProvider, { children: _jsxs(NavigationHeaderContextProvider, { value: { search, selectedTab, setSearch, setSelectedTab }, children: [_jsx(ShadowRoot, { theme: theme, customCSS: customCSS, children: _jsx(AnimatePresence, { children: openWalletModal && !isConnectModalOpen && !isSocialLinkOpen && (_jsx(Modal, { contentProps: {
                                            className: 'border border-border-normal',
                                            style: {
                                                maxWidth: WALLET_WIDTH,
                                                height: WALLET_HEIGHT,
                                                ...getModalPositionCss(position),
                                                scrollbarColor: 'gray black',
                                                scrollbarWidth: 'thin'
                                            }
                                        }, scroll: false, onClose: () => setOpenWalletModal(false), children: _jsxs("div", { className: "flex flex-col", id: "sequence-kit-wallet-content", ref: walletContentRef, style: { height: `calc(${WALLET_HEIGHT} - 2px)` }, children: [_jsx("div", { children: getHeader(navigation) }), _jsx("div", { style: { flex: 1, minHeight: 0 }, children: displayScrollbar ? _jsx(Scroll, { shadows: false, children: getContent(navigation) }) : getContent(navigation) })] }) })) }) }), children] }) }) }) }) }));
};
//# sourceMappingURL=SequenceWalletProvider.js.map