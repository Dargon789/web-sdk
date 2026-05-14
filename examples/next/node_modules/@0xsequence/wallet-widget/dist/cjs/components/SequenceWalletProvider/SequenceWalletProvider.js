"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletContent = exports.SequenceWalletProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("motion/react");
const react_2 = require("react");
const wagmi_1 = require("wagmi");
const index_js_1 = require("../../constants/index.js");
const index_js_2 = require("../../contexts/index.js");
const NavigationHeader_js_1 = require("../../contexts/NavigationHeader.js");
const WalletContentRef_js_1 = require("../../contexts/WalletContentRef.js");
const SharedProvider_js_1 = require("./ProviderComponents/SharedProvider.js");
const ValueRegistryProvider_js_1 = require("./ProviderComponents/ValueRegistryProvider.js");
const index_js_3 = require("./utils/index.js");
const DEFAULT_LOCATION = {
    location: 'home'
};
const SequenceWalletProvider = (props) => {
    return ((0, jsx_runtime_1.jsx)(WalletContentRef_js_1.WalletContentRefProvider, { children: (0, jsx_runtime_1.jsx)(exports.WalletContent, { ...props }) }));
};
exports.SequenceWalletProvider = SequenceWalletProvider;
const WalletContent = ({ children }) => {
    const { theme, position } = (0, connect_1.useTheme)();
    const { isConnectModalOpen } = (0, connect_1.useOpenConnectModal)();
    const { isSocialLinkOpen } = (0, connect_1.useSocialLink)();
    const { address } = (0, wagmi_1.useAccount)();
    const { customCSS } = (0, connect_1.useConnectConfigContext)();
    (0, react_2.useEffect)(() => {
        if (!address) {
            setOpenWalletModal(false);
        }
    }, [address]);
    // Wallet Modal Context
    const [openWalletModal, setOpenWalletModalState] = (0, react_2.useState)(false);
    const isInitialMount = (0, react_2.useRef)(true);
    (0, react_2.useEffect)(() => {
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
    const [history, setHistory] = (0, react_2.useState)([]);
    const [isBackButtonEnabled, setIsBackButtonEnabled] = (0, react_2.useState)(true);
    const navigation = history.length > 0 ? history[history.length - 1] : DEFAULT_LOCATION;
    // Navigation Header Context
    const [search, setSearch] = (0, react_2.useState)('');
    const [selectedTab, setSelectedTab] = (0, react_2.useState)('tokens');
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
    const walletContentRef = (0, react_2.useContext)(WalletContentRef_js_1.WalletContentRefContext);
    return ((0, jsx_runtime_1.jsx)(index_js_2.WalletModalContextProvider, { value: { setOpenWalletModal, openWalletModalState: openWalletModal }, children: (0, jsx_runtime_1.jsx)(index_js_2.NavigationContextProvider, { value: { setHistory, history, isBackButtonEnabled, setIsBackButtonEnabled }, children: (0, jsx_runtime_1.jsx)(SharedProvider_js_1.SharedProvider, { children: (0, jsx_runtime_1.jsx)(ValueRegistryProvider_js_1.ValueRegistryProvider, { children: (0, jsx_runtime_1.jsxs)(NavigationHeader_js_1.NavigationHeaderContextProvider, { value: { search, selectedTab, setSearch, setSelectedTab }, children: [(0, jsx_runtime_1.jsx)(connect_1.ShadowRoot, { theme: theme, customCSS: customCSS, children: (0, jsx_runtime_1.jsx)(react_1.AnimatePresence, { children: openWalletModal && !isConnectModalOpen && !isSocialLinkOpen && ((0, jsx_runtime_1.jsx)(design_system_1.Modal, { contentProps: {
                                            className: 'border border-border-normal',
                                            style: {
                                                maxWidth: index_js_1.WALLET_WIDTH,
                                                height: index_js_1.WALLET_HEIGHT,
                                                ...(0, connect_1.getModalPositionCss)(position),
                                                scrollbarColor: 'gray black',
                                                scrollbarWidth: 'thin'
                                            }
                                        }, scroll: false, onClose: () => setOpenWalletModal(false), children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", id: "sequence-kit-wallet-content", ref: walletContentRef, style: { height: `calc(${index_js_1.WALLET_HEIGHT} - 2px)` }, children: [(0, jsx_runtime_1.jsx)("div", { children: (0, index_js_3.getHeader)(navigation) }), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1, minHeight: 0 }, children: displayScrollbar ? (0, jsx_runtime_1.jsx)(design_system_1.Scroll, { shadows: false, children: (0, index_js_3.getContent)(navigation) }) : (0, index_js_3.getContent)(navigation) })] }) })) }) }), children] }) }) }) }) }));
};
exports.WalletContent = WalletContent;
//# sourceMappingURL=SequenceWalletProvider.js.map