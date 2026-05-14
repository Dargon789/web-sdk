import { useEffect } from 'react';
import { useConnection } from 'wagmi';
export const useTrailsSequenceV3WalletSend = () => {
    const { connector } = useConnection();
    useEffect(() => {
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
//# sourceMappingURL=useTrailsSequenceV3WalletSend.js.map