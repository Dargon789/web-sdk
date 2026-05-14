"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTrailsSequenceV3WalletSend = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useTrailsSequenceV3WalletSend = () => {
    const { connector } = (0, wagmi_1.useConnection)();
    (0, react_1.useEffect)(() => {
        const activeConnector = connector;
        if (activeConnector?.type !== 'sequence-v3-wallet' || typeof activeConnector.getProvider !== 'function') {
            return;
        }
        let activeProvider;
        let cleanupRequested = false;
        const setProviderMode = async (enabled) => {
            const provider = (await activeConnector.getProvider());
            if (cleanupRequested) {
                provider.setUseWalletTransactionForSend?.(false);
                return;
            }
            activeProvider = provider;
            provider.setUseWalletTransactionForSend?.(enabled);
        };
        void setProviderMode(true);
        return () => {
            cleanupRequested = true;
            if (activeProvider) {
                activeProvider.setUseWalletTransactionForSend?.(false);
                return;
            }
            void setProviderMode(false);
        };
    }, [connector]);
};
exports.useTrailsSequenceV3WalletSend = useTrailsSequenceV3WalletSend;
//# sourceMappingURL=useTrailsSequenceV3WalletSend.js.map