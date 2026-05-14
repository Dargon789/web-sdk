import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getNetwork } from '@0xsequence/connect';
import { Button, CopyIcon, Image, ShareIcon, Text } from '@0xsequence/design-system';
import { useClipboard } from '@0xsequence/hooks';
import { QRCodeCanvas } from 'qrcode.react';
import { useAccount } from 'wagmi';
import { NetworkSelect } from '../components/Select/NetworkSelect';
import { HEADER_HEIGHT_WITH_LABEL } from '../constants';
const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
export const Receive = () => {
    const { address, chain } = useAccount();
    const [isCopied, setCopied] = useClipboard({ timeout: 4000 });
    const networkInfo = getNetwork(chain?.id || 1);
    const networkName = networkInfo.title || networkInfo.name;
    const onClickShare = () => {
        if (typeof window !== 'undefined') {
            window.open(`https://twitter.com/intent/tweet?text=Here%20is%20my%20address%20${address}`);
        }
    };
    return (_jsx("div", { style: { paddingTop: HEADER_HEIGHT_WITH_LABEL }, children: _jsxs("div", { className: "flex flex-col justify-center items-center px-4 pb-6 gap-4", children: [_jsx(NetworkSelect, {}), _jsx("div", { className: "flex mt-1 w-fit bg-white rounded-xl items-center justify-center p-4", children: _jsx(QRCodeCanvas, { value: address || '', size: 200, bgColor: "white", fgColor: "black", "data-id": "receiveQR" }) }), _jsxs("div", { children: [_jsxs("div", { className: "flex flex-row items-center justify-center gap-2", children: [_jsx(Text, { className: "text-center leading-[inherit]", variant: "medium", color: "primary", style: { fontWeight: '700' }, children: "My Wallet" }), _jsx(Image, { className: "w-5 rounded-xs", src: networkInfo.logoURI, alt: "icon" })] }), _jsx("div", { className: "mt-2", style: { maxWidth: '180px', textAlign: 'center' }, children: _jsx(Text, { className: "text-center", color: "muted", style: {
                                    fontSize: '14px',
                                    maxWidth: '180px',
                                    overflowWrap: 'anywhere'
                                }, children: address }) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { onClick: () => setCopied(address || ''), leftIcon: CopyIcon, label: isCopied ? 'Copied!' : 'Copy' }), _jsx(Button, { onClick: onClickShare, leftIcon: ShareIcon, label: "Share" })] }), _jsx("div", { className: "flex justify-center items-center", style: { maxWidth: '260px', textAlign: 'center' }, children: _jsx(Text, { color: "primary", variant: "small", style: {
                            maxWidth: '260px',
                            overflowWrap: 'anywhere'
                        }, children: `This is a${isVowel(networkName[0]) ? 'n' : ''} ${networkName} address. Please only send assets on the ${networkName} network.` }) })] }) }));
};
//# sourceMappingURL=Receive.js.map