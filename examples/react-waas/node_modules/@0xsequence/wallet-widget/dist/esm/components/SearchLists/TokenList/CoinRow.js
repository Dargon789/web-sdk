import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientAvatar, Text } from '@0xsequence/design-system';
import { formatAddress } from '@0xsequence/web-sdk-core';
import { getAddress } from 'viem';
import { useChains } from 'wagmi';
import { useSettings } from '../../../hooks/index.js';
import { formatTokenInfo } from '../../../utils/formatBalance.js';
import { TokenImageCustom } from '../../Filter/TokenImageCustom.js';
import { ListCard } from '../../ListCard/ListCard.js';
export const CoinRow = ({ balance, onTokenClick, includeUserAddress = false }) => {
    const { fiatCurrency } = useSettings();
    const chains = useChains();
    const { logo, name, symbol, displayBalance, fiatBalance } = formatTokenInfo(balance, fiatCurrency.sign, chains);
    const userAddress = getAddress(balance.accountAddress);
    const onClick = () => {
        onTokenClick(balance);
    };
    return (_jsx(ListCard, { onClick: onClick, style: { height: '68px' }, children: _jsxs("div", { className: "flex flex-row justify-between items-center w-full gap-2", children: [_jsx(TokenImageCustom, { src: logo, symbol: symbol, chainId: balance.chainId }), _jsx("div", { className: "flex flex-row gap-2 items-center", style: { flex: '1 1 0', width: 0 }, children: _jsxs("div", { className: "flex flex-col w-full", children: [_jsx("div", { className: "flex flex-row w-full", children: _jsx(Text, { className: "overflow-hidden", variant: "normal", color: "primary", ellipsis: true, children: name }) }), includeUserAddress && (_jsxs("div", { className: "flex flex-row gap-1 items-center", children: [_jsx(GradientAvatar, { address: userAddress, size: "xs" }), _jsx(Text, { className: "overflow-hidden", variant: "small", color: "muted", ellipsis: true, children: formatAddress(userAddress) })] }))] }) }), _jsx("div", { className: "flex flex-row justify-end items-center", style: { flex: '1 1 0', width: 0 }, children: _jsxs("div", { className: "flex flex-col items-end w-full", children: [_jsx("div", { className: "flex flex-row justify-end w-full", children: _jsx(Text, { className: "overflow-hidden", variant: "small", color: "primary", ellipsis: true, children: displayBalance }) }), _jsx(Text, { variant: "small", color: "muted", children: fiatBalance })] }) })] }) }));
};
//# sourceMappingURL=CoinRow.js.map