import { jsx as _jsx } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { useObservable } from 'micro-observables';
import { useSettings } from '../../hooks/index.js';
import { ListCardWallet } from '../ListCard/ListCardWallet.js';
export const WalletsFilter = ({ onClose }) => {
    const { selectedWalletsObservable, setSelectedWallets } = useSettings();
    const { wallets } = useWallets();
    const selectedWallets = useObservable(selectedWalletsObservable);
    const onWalletClick = (wallet) => {
        if (wallet) {
            setSelectedWallets([wallet]);
        }
        else {
            setSelectedWallets([]);
        }
        onClose();
    };
    return (_jsx("div", { className: "flex flex-col bg-background-primary gap-3", children: wallets.map(wallet => (_jsx(ListCardWallet, { isSelected: selectedWallets.length === 1 && selectedWallets.some(w => w.address === wallet.address), wallet: wallet, onClick: () => onWalletClick(wallet) }, wallet.address))) }));
};
//# sourceMappingURL=WalletsFilter.js.map