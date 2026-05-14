import { compareAddress, formatDisplay, getNativeTokenInfoByChainId } from '@0xsequence/connect';
import { formatUnits } from 'viem';
import { zeroAddress } from 'viem';
export const formatTokenInfo = (balance, fiatSign, chains) => {
    if (!balance) {
        return { isNativeToken: false, logo: '', name: '', symbol: '', displayBalance: '', fiatBalance: '' };
    }
    const isNativeToken = compareAddress(balance?.contractAddress || '', zeroAddress);
    const nativeTokenInfo = getNativeTokenInfoByChainId(balance?.chainId || 1, chains);
    const selectedCoinLogo = isNativeToken ? nativeTokenInfo.logoURI : balance?.contractInfo?.logoURI;
    const selectedCoinName = isNativeToken ? nativeTokenInfo.name : balance?.contractInfo?.name || 'Unknown';
    const selectedCoinSymbol = isNativeToken ? nativeTokenInfo.symbol : balance?.contractInfo?.symbol;
    const decimals = isNativeToken ? nativeTokenInfo.decimals : balance?.contractInfo?.decimals;
    const bal = formatUnits(BigInt(balance?.balance || 0), decimals || 18);
    const displayBalance = formatDisplay(bal);
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
export const formatFiatBalance = (balance, price, decimals, fiatSign) => {
    if (!balance) {
        return '';
    }
    const bal = formatUnits(BigInt(Number(balance)), decimals || 18);
    return `${fiatSign}${(price * Number(bal)).toFixed(2)}`;
};
export const formatTokenUnits = (token, chains) => {
    if (!token) {
        return '';
    }
    const isNativeToken = token.contractType === 'NATIVE';
    const nativeTokenInfo = getNativeTokenInfoByChainId(token.chainId, chains);
    if (isNativeToken) {
        return formatUnits(BigInt(Number(token.balance)), nativeTokenInfo.decimals);
    }
    return formatUnits(BigInt(Number(token.balance)), token.contractInfo?.decimals || 18);
};
export const decimalsToWei = (balance, decimals) => {
    const scaledBalance = balance * Math.pow(10, decimals);
    const balanceBigInt = BigInt(scaledBalance);
    return Number(balanceBigInt);
};
//# sourceMappingURL=formatBalance.js.map