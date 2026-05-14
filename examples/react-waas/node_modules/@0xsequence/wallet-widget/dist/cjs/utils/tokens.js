"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenPaginatedTransactionHistory = exports.sortBalancesByType = exports.computeBalanceFiat = exports.getPercentagePriceChange = exports.getPercentageColor = void 0;
const connect_1 = require("@0xsequence/connect");
const viem_1 = require("viem");
const getPercentageColor = (value) => {
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
exports.getPercentageColor = getPercentageColor;
const getPercentagePriceChange = (balance, prices) => {
    const priceForToken = prices.find(p => (0, connect_1.compareAddress)(p.token.contractAddress, balance.contractAddress));
    if (!priceForToken) {
        return 0;
    }
    const price24HourChange = priceForToken?.price24hChange?.value || 0;
    return price24HourChange;
};
exports.getPercentagePriceChange = getPercentagePriceChange;
const computeBalanceFiat = ({ balance, prices, decimals, conversionRate }) => {
    let totalUsd = 0;
    const priceForToken = prices.find(p => (0, connect_1.compareAddress)(p.token.contractAddress, balance.contractAddress) && p.token.chainId === balance.chainId);
    if (!priceForToken) {
        return '0.00';
    }
    const priceFiat = priceForToken.price?.value || 0;
    const valueFormatted = (0, viem_1.formatUnits)(BigInt(balance.balance), decimals);
    const usdValue = parseFloat(valueFormatted) * priceFiat;
    totalUsd += usdValue;
    const fiatValue = totalUsd * conversionRate;
    return `${fiatValue.toFixed(2)}`;
};
exports.computeBalanceFiat = computeBalanceFiat;
const compareTokenBalanceIds = (a, b) => {
    return (a.tokenID || '').localeCompare(b.tokenID || '');
};
const sortBalancesByType = (balances) => {
    const nativeTokens = [];
    const erc20Tokens = [];
    const collectibles = [];
    balances.forEach(balance => {
        // Note: contractType for the native token should be "UNKNOWN"
        if (balance.contractAddress === viem_1.zeroAddress) {
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
exports.sortBalancesByType = sortBalancesByType;
const flattenPaginatedTransactionHistory = (transactionHistoryData) => {
    const transactionHistory = [];
    transactionHistoryData?.pages.forEach(page => {
        transactionHistory.push(...page.transactions);
    });
    return transactionHistory;
};
exports.flattenPaginatedTransactionHistory = flattenPaginatedTransactionHistory;
//# sourceMappingURL=tokens.js.map