import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWallets } from '@0xsequence/connect';
import { Button, CopyIcon, ShareIcon, Text } from '@0xsequence/design-system';
import { useClipboard } from '@0xsequence/hooks';
import { QRCodeCanvas } from 'qrcode.react';
import { useConnection } from 'wagmi';
import { WalletSelect } from '../../components/Select/WalletSelect.js';
export const Receive = () => {
    const { address } = useConnection();
    const { setActiveWallet } = useWallets();
    const [isCopied, setCopied] = useClipboard({ timeout: 4000 });
    const onClickWallet = (address) => {
        setActiveWallet(address);
    };
    const onClickShare = () => {
        if (typeof window !== 'undefined') {
            window.open(`https://twitter.com/intent/tweet?text=Here%20is%20my%20address%20${address}`);
        }
    };
    return (_jsxs("div", { className: "flex flex-col justify-center items-center px-4 pb-6 gap-4", children: [_jsx(WalletSelect, { selectedWallet: address || '', onClick: onClickWallet }), _jsx("div", { className: "flex mt-1 w-fit bg-white rounded-xl items-center justify-center p-4", children: _jsx(QRCodeCanvas, { value: address || '', size: 200, bgColor: "white", fgColor: "black", "data-id": "receiveQR" }) }), _jsxs("div", { children: [_jsx("div", { className: "flex flex-row items-center justify-center gap-2", children: _jsx(Text, { className: "text-center leading-[inherit]", variant: "medium", color: "primary", style: { fontWeight: '700' }, children: "My Wallet" }) }), _jsx("div", { className: "mt-2", style: { maxWidth: '180px', textAlign: 'center' }, children: _jsx(Text, { className: "text-center", color: "muted", style: {
                                fontSize: '14px',
                                maxWidth: '180px',
                                overflowWrap: 'anywhere'
                            }, children: address }) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { onClick: () => setCopied(address || ''), children: [_jsx(CopyIcon, {}), isCopied ? 'Copied!' : 'Copy'] }), _jsxs(Button, { onClick: onClickShare, children: [_jsx(ShareIcon, {}), "Share"] })] })] }));
};
//# sourceMappingURL=index.js.map