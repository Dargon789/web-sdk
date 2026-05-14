import { compareAddress } from '@0xsequence/connect';
import { formatUnits, zeroAddress } from 'viem';
export const getPercentageColor = (value) => {
    if (value > 0) {
        return 'positive';
    }
    else if (value < 0) {
        return 'negative';
    }
    else {
        return 'muted';
    }
};
export const getPercentagePriceChange = (balance, prices) => {
    const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress));
    if (!priceForToken) {
        return 0;
    }
    const price24HourChange = priceForToken?.price24hChange?.value || 0;
    return price24HourChange;
};
export const computeBalanceFiat = ({ balance, prices, decimals, conversionRate }) => {
    let totalUsd = 0;
    const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress) && p.token.chainId === balance.chainId);
    if (!priceForToken) {
        return '0.00';
    }
    const priceFiat = priceForToken.price?.value || 0;
    const valueFormatted = formatUnits(BigInt(balance.balance), decimals);
    const usdValue = parseFloat(valueFormatted) * priceFiat;
    totalUsd += usdValue;
    const fiatValue = totalUsd * conversionRate;
    return `${fiatValue.toFixed(2)}`;
};
const compareTokenBalanceIds = (a, b) => {
    return (a.tokenID || '').localeCompare(b.tokenID || '');
};
export const sortBalancesByType = (balances) => {
    const nativeTokens = [];
    const erc20Tokens = [];
    const collectibles = [];
    balances.forEach(balance => {
        // Note: contractType for the native token should be "UNKNOWN"
        if (balance.contractAddress === zeroAddress) {
            nativeTokens.push(balance);
        }
        else if (balance.contractType === 'ERC20') {
            erc20Tokens.push(balance);
        }
        else if (balance.contractType === 'ERC721' || balance.contractType === 'ERC1155') {
            collectibles.push(balance);
        }
    });
    const sortedNativeTokens = nativeTokens.sort(compareTokenBalanceIds);
    const sortedErc20Tokens = erc20Tokens.sort(compareTokenBalanceIds);
    const sortedCollectibles = collectibles.sort(compareTokenBalanceIds);
    return {
        nativeTokens: sortedNativeTokens,
        erc20Tokens: sortedErc20Tokens,
        collectibles: sortedCollectibles
    };
};
export const flattenPaginatedTransactionHistory = (transactionHistoryData) => {
    const transactionHistory = [];
    transactionHistoryData?.pages.forEach(page => {
        transactionHistory.push(...page.transactions);
    });
    return transactionHistory;
};
//# sourceMappingURL=tokens.js.map