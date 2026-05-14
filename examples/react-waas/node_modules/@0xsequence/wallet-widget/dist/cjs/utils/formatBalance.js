"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalsToWei = exports.formatTokenUnits = exports.formatFiatBalance = exports.formatTokenInfo = void 0;
const connect_1 = require("@0xsequence/connect");
const viem_1 = require("viem");
const viem_2 = require("viem");
const formatTokenInfo = (balance, fiatSign, chains) => {
    if (!balance) {
        return { isNativeToken: false, logo: '', name: '', symbol: '', displayBalance: '', fiatBalance: '' };
    }
    const isNativeToken = (0, connect_1.compareAddress)(balance?.contractAddress || '', viem_2.zeroAddress);
    const nativeTokenInfo = (0, connect_1.getNativeTokenInfoByChainId)(balance?.chainId || 1, chains);
    const selectedCoinLogo = isNativeToken ? nativeTokenInfo.logoURI : balance?.contractInfo?.logoURI;
    const selectedCoinName = isNativeToken ? nativeTokenInfo.name : balance?.contractInfo?.name || 'Unknown';
    const selectedCoinSymbol = isNativeToken ? nativeTokenInfo.symbol : balance?.contractInfo?.symbol;
    const decimals = isNativeToken ? nativeTokenInfo.decimals : balance?.contractInfo?.decimals;
    const bal = (0, viem_1.formatUnits)(BigInt(balance?.balance || 0), decimals || 18);
    const displayBalance = (0, connect_1.formatDisplay)(bal);
    const symbol = isNativeToken ? nativeTokenInfo.symbol : balance?.contractInfo?.symbol;
    const fiatBalance = (balance?.price?.value || 0) * Number(bal);
    return {
        isNativeToken,
        nativeTokenInfo,
        logo: selectedCoinLogo,
        name: selectedCoinName,
        symbol: selectedCoinSymbol,
        displayBalance: `${displayBalance} ${symbol}`,
        fiatBalance: `${fiatSign}${fiatBalance.toFixed(2)}`
    };
};
exports.formatTokenInfo = formatTokenInfo;
const formatFiatBalance = (balance, price, decimals, fiatSign) => {
    if (!balance) {
        return '';
    }
    const bal = (0, viem_1.formatUnits)(BigInt(Number(balance)), decimals || 18);
    return `${fiatSign}${(price * Number(bal)).toFixed(2)}`;
};
exports.formatFiatBalance = formatFiatBalance;
const formatTokenUnits = (token, chains) => {
    if (!token) {
        return '';
    }
    const isNativeToken = token.contractType === 'NATIVE';
    const nativeTokenInfo = (0, connect_1.getNativeTokenInfoByChainId)(token.chainId, chains);
    if (isNativeToken) {
        return (0, viem_1.formatUnits)(BigInt(Number(token.balance)), nativeTokenInfo.decimals);
    }
    return (0, viem_1.formatUnits)(BigInt(Number(token.balance)), token.contractInfo?.decimals || 18);
};
exports.formatTokenUnits = formatTokenUnits;
const decimalsToWei = (balance, decimals) => {
    const scaledBalance = balance * Math.pow(10, decimals);
    const balanceBigInt = BigInt(scaledBalance);
    return Number(balanceBigInt);
};
exports.decimalsToWei = decimalsToWei;
//# sourceMappingURL=formatBalance.js.map