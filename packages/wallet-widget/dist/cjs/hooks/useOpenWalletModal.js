"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpenWalletModal = void 0;
const WalletModal_js_1 = require("../contexts/WalletModal.js");
/**
 * Hook to manage the Wallet Widget modal.
 *
 * This hook provides a method to open and close the wallet widget modal, and access its current open state.
 * The Wallet Widget displays your Tokens, Collectibles, Transactions, Settings, multiple connected / linked wallets and also allows
 * to send, receive, buy (on-ramp) and swap tokens.
 *
 * @see {@link https://docs.sequence.xyz/sdk/web/hooks/useOpenWalletModal} for more detailed documentation.
 *
 * @returns An object containing function to control the Wallet modal and its state {@link UseOpenWalletModalReturnType}
 *
 * @example
 * ```tsx
 * import { useOpenWalletModal } from '@0xsequence/wallet-widget'
 *
 * const YourComponent = () => {
 *   // Get the function to open/close the wallet modal
 *   const { setOpenWalletModal } = useOpenWalletModal()
 *
 *   // Function to handle opening the wallet widget modal
 *   const handleViewWallet = () => {
 *     setOpenWalletModal(true) // Open the wallet widget modal
 *   }
 *
 *   return (
 *     <button
 *       onClick={handleViewWallet}
 *       title="Wallet"
 *     >
 *       View your wallet
 *     </button>
 *   )
 * }
 * ```
 */
const useOpenWalletModal = () => {
    const { setOpenWalletModal, openWalletModalState } = (0, WalletModal_js_1.useWalletModalContext)();
    return { setOpenWalletModal, openWalletModalState };
};
exports.useOpenWalletModal = useOpenWalletModal;
//# sourceMappingURL=useOpenWalletModal.js.map