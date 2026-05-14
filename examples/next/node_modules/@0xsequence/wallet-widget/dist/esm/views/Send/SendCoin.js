import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { compareAddress, getNativeTokenInfoByChainId, TRANSACTION_CONFIRMATIONS_DEFAULT, truncateAtMiddle, useAnalyticsContext, useFeeOptions, useSendWalletTransaction, useWaasFeeOptions, useWallets, waitForTransactionReceipt } from '@0xsequence/connect';
import { Button, Card, ChevronRightIcon, CloseIcon, CopyIcon, GradientAvatar, NumericInput, Spinner, Text, TextInput } from '@0xsequence/design-system';
import { useClearCachedBalances, useGetCoinPrices, useGetExchangeRate, useGetSingleTokenBalance, useIndexerClient } from '@0xsequence/hooks';
import { useEffect, useRef, useState } from 'react';
import { encodeFunctionData, formatUnits, parseUnits, toHex, zeroAddress } from 'viem';
import { useChainId, useConfig, useConnection, usePublicClient, useSwitchChain, useWalletClient } from 'wagmi';
import { AllButActiveWalletSelect } from '../../components/Select/AllButActiveWalletSelect.js';
import { SendItemInfo } from '../../components/SendItemInfo.js';
import { TransactionConfirmation } from '../../components/TransactionConfirmation.js';
import { EVENT_SOURCE, EVENT_TYPES } from '../../constants/analytics.js';
import { ERC_20_ABI } from '../../constants/index.js';
import { useNavigationContext } from '../../contexts/Navigation.js';
import { useNavigation, useSettings } from '../../hooks/index.js';
import { computeBalanceFiat, isEthAddress, limitDecimals } from '../../utils/index.js';
export const SendCoin = ({ chainId, contractAddress }) => {
    const { clearCachedBalances } = useClearCachedBalances();
    const publicClient = usePublicClient({ chainId });
    const indexerClient = useIndexerClient(chainId);
    const { wallets } = useWallets();
    const { setNavigation } = useNavigation();
    const { setIsBackButtonEnabled } = useNavigationContext();
    const { analytics } = useAnalyticsContext();
    const { chains } = useConfig();
    const connectedChainId = useChainId();
    const { address: accountAddress = '', connector } = useConnection();
    const isConnectorSequenceBased = !!connector?._wallet?.isSequenceBased;
    const isCorrectChainId = connectedChainId === chainId;
    const { switchChainAsync } = useSwitchChain();
    const amountInputRef = useRef(null);
    const { fiatCurrency } = useSettings();
    const [amount, setAmount] = useState('0');
    const [toAddress, setToAddress] = useState('');
    const { data: walletClient } = useWalletClient();
    const [isSendTxnPending, setIsSendTxnPending] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [selectedFeeTokenAddress, setSelectedFeeTokenAddress] = useState(null);
    const [pendingV3FeeConfirmation, confirmV3FeeOption, rejectV3FeeOption] = useFeeOptions();
    const [pendingWaasFeeConfirmation, confirmWaasFeeOption, rejectWaasFeeOption] = useWaasFeeOptions();
    const { sendTransactionAsync: sendWalletTransactionAsync } = useSendWalletTransaction();
    const connectorType = connector?.type;
    const isWaasConnectorActive = connectorType === 'sequence-waas';
    const isSequenceV3ConnectorActive = connectorType === 'sequence-v3-wallet' || wallets.some(w => w.id === 'sequence-v3-wallet' && w.isActive);
    const activeFeeConfirmation = isWaasConnectorActive
        ? pendingWaasFeeConfirmation
        : isSequenceV3ConnectorActive
            ? pendingV3FeeConfirmation
            : undefined;
    const feeOptions = activeFeeConfirmation
        ? {
            options: activeFeeConfirmation.options,
            chainId: activeFeeConfirmation.chainId
        }
        : undefined;
    const isConfirmationVisible = Boolean(activeFeeConfirmation);
    const { data: tokenBalance, isLoading: isLoadingBalances } = useGetSingleTokenBalance({
        chainId,
        contractAddress,
        accountAddress
    });
    const nativeTokenInfo = getNativeTokenInfoByChainId(chainId, chains);
    const { data: coinPrices = [], isLoading: isLoadingCoinPrices } = useGetCoinPrices([
        {
            chainId,
            contractAddress
        }
    ]);
    const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = useGetExchangeRate(fiatCurrency.symbol);
    const isLoading = isLoadingBalances || isLoadingCoinPrices || isLoadingConversionRate;
    // Control back button when showing confirmation
    useEffect(() => {
        setIsBackButtonEnabled(!isConfirmationVisible);
    }, [isConfirmationVisible, setIsBackButtonEnabled]);
    useEffect(() => {
        if (!feeOptions?.options?.length) {
            setSelectedFeeTokenAddress(null);
        }
    }, [feeOptions?.options?.length]);
    if (isLoading) {
        return null;
    }
    const isNativeCoin = compareAddress(contractAddress, zeroAddress);
    const decimals = isNativeCoin ? nativeTokenInfo.decimals : tokenBalance?.contractInfo?.decimals || 18;
    const name = isNativeCoin ? nativeTokenInfo.name : tokenBalance?.contractInfo?.name || '';
    const imageUrl = isNativeCoin ? nativeTokenInfo.logoURI : tokenBalance?.contractInfo?.logoURI;
    const symbol = isNativeCoin ? nativeTokenInfo.symbol : tokenBalance?.contractInfo?.symbol || '';
    const amountToSendFormatted = amount === '' ? '0' : amount;
    const amountRaw = parseUnits(amountToSendFormatted, decimals);
    const amountToSendFiat = computeBalanceFiat({
        balance: {
            ...tokenBalance,
            balance: amountRaw.toString()
        },
        prices: coinPrices,
        conversionRate,
        decimals
    });
    const insufficientFunds = amountRaw > BigInt(tokenBalance?.balance || '0');
    const isNonZeroAmount = amountRaw > 0n;
    const handleChangeAmount = (ev) => {
        setErrorMsg(null);
        const { value } = ev.target;
        // Prevent value from having more decimals than the token supports
        const formattedValue = limitDecimals(value, decimals);
        setAmount(formattedValue);
    };
    const handleMax = () => {
        setErrorMsg(null);
        amountInputRef.current?.focus();
        const maxAmount = formatUnits(BigInt(tokenBalance?.balance || 0), decimals).toString();
        setAmount(maxAmount);
    };
    const handlePaste = async () => {
        setErrorMsg(null);
        const result = await navigator.clipboard.readText();
        setToAddress(result);
    };
    const handleToAddressClear = () => {
        setErrorMsg(null);
        setToAddress('');
    };
    const handleSendClick = async (e) => {
        setErrorMsg(null);
        e.preventDefault();
        if (!isCorrectChainId && !isConnectorSequenceBased) {
            await switchChainAsync({ chainId });
        }
        executeTransaction();
    };
    const executeTransaction = async () => {
        if (!isCorrectChainId && isConnectorSequenceBased) {
            await switchChainAsync({ chainId });
        }
        if (!walletClient && !isSequenceV3ConnectorActive) {
            console.error('Wallet client not found');
            setErrorMsg('Wallet client not available. Please ensure your wallet is connected.');
            setIsSendTxnPending(false);
            return;
        }
        setIsSendTxnPending(true);
        const sendAmount = parseUnits(amountToSendFormatted, decimals);
        let txHash;
        try {
            if (isNativeCoin) {
                if (isSequenceV3ConnectorActive) {
                    txHash = (await sendWalletTransactionAsync({
                        chainId,
                        transaction: {
                            to: toAddress,
                            value: BigInt(sendAmount.toString())
                        }
                    }));
                }
                else {
                    txHash = await walletClient.sendTransaction({
                        account: accountAddress,
                        to: toAddress,
                        value: BigInt(sendAmount.toString()),
                        chain: chains.find(c => c.id === chainId)
                    });
                }
            }
            else {
                const data = encodeFunctionData({ abi: ERC_20_ABI, functionName: 'transfer', args: [toAddress, toHex(sendAmount)] });
                if (isSequenceV3ConnectorActive) {
                    txHash = (await sendWalletTransactionAsync({
                        chainId,
                        transaction: {
                            to: tokenBalance?.contractAddress,
                            data
                        }
                    }));
                }
                else {
                    txHash = await walletClient.sendTransaction({
                        account: accountAddress,
                        to: tokenBalance?.contractAddress,
                        data,
                        chain: chains.find(c => c.id === chainId)
                    });
                }
            }
            // Handle successful transaction submission
            setIsBackButtonEnabled(true);
            if (txHash) {
                setNavigation({
                    location: 'home'
                });
                setIsSendTxnPending(false); // Set pending to false immediately after getting hash
                analytics?.track({
                    event: 'SEND_TRANSACTION_REQUEST',
                    props: {
                        walletClient: connector?._wallet?.id || 'unknown',
                        source: EVENT_SOURCE,
                        type: EVENT_TYPES.SEND_CURRENCY,
                        chainId: String(chainId),
                        origin: window.location.origin,
                        currencySymbol: symbol,
                        currencyAddress: contractAddress,
                        txHash: txHash
                    },
                    nums: {
                        currencyValue: Number(amountRaw),
                        currencyValueDecimal: Number(amountToSendFormatted)
                    }
                });
                // Wait for receipt in the background
                if (publicClient) {
                    waitForTransactionReceipt({
                        indexerClient,
                        txnHash: txHash,
                        publicClient,
                        confirmations: TRANSACTION_CONFIRMATIONS_DEFAULT
                    })
                        .then(() => {
                        clearCachedBalances();
                    })
                        .catch(error => {
                        console.error('Error waiting for transaction receipt:', error);
                    });
                }
            }
            else {
                // Handle case where txHash is unexpectedly undefined
                setIsSendTxnPending(false);
                setErrorMsg('Transaction submitted but no hash received.');
            }
        }
        catch (error) {
            console.error('Transaction failed:', error);
            setIsSendTxnPending(false);
            setIsBackButtonEnabled(true);
            setErrorMsg(error?.shortMessage || error?.message || 'An unknown error occurred.');
        }
    };
    const handleConfirmationSubmit = () => {
        if (!activeFeeConfirmation) {
            executeTransaction();
            return;
        }
        if (!selectedFeeTokenAddress) {
            return;
        }
        const selectedOption = activeFeeConfirmation.options.find(option => (option.token.contractAddress ?? zeroAddress) === selectedFeeTokenAddress);
        if (!selectedOption) {
            console.error('Unable to resolve the selected fee option.');
            return;
        }
        if (isWaasConnectorActive) {
            const feeTokenAddress = selectedFeeTokenAddress === zeroAddress ? null : selectedFeeTokenAddress;
            confirmWaasFeeOption(activeFeeConfirmation.id, feeTokenAddress);
            return;
        }
        if (!selectedOption.token.contractAddress) {
            console.error('Unable to resolve the selected fee option.');
            return;
        }
        confirmV3FeeOption(activeFeeConfirmation.id, selectedOption.token.contractAddress);
    };
    const handleConfirmationCancel = () => {
        if (activeFeeConfirmation) {
            if (isWaasConnectorActive) {
                rejectWaasFeeOption(activeFeeConfirmation.id);
            }
            else if (isSequenceV3ConnectorActive) {
                rejectV3FeeOption(activeFeeConfirmation.id);
            }
        }
        setSelectedFeeTokenAddress(null);
        setIsSendTxnPending(false);
    };
    return (_jsxs("form", { className: "flex px-4 pb-4 gap-2 flex-col", onSubmit: handleSendClick, children: [!isConfirmationVisible && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex bg-background-secondary rounded-xl p-4 gap-2 flex-col", children: [_jsx(SendItemInfo, { imageUrl: imageUrl, decimals: decimals, name: name, symbol: symbol, balance: tokenBalance?.balance || '0', fiatValue: computeBalanceFiat({
                                    balance: tokenBalance,
                                    prices: coinPrices,
                                    conversionRate,
                                    decimals
                                }), chainId: chainId }), _jsx(NumericInput, { ref: amountInputRef, name: "amount", value: amount, onChange: handleChangeAmount, controls: _jsxs(_Fragment, { children: [_jsx(Text, { className: "whitespace-nowrap", variant: "small", color: "muted", children: `~${fiatCurrency.sign}${amountToSendFiat}` }), _jsx(Button, { className: "shrink-0", size: "xs", shape: "square", onClick: handleMax, "data-id": "maxCoin", children: "Max" })] }) })] }), _jsxs("div", { className: "flex bg-background-secondary rounded-xl p-4 gap-2 flex-col", children: [_jsx(Text, { variant: "normal", color: "muted", children: "To" }), isEthAddress(toAddress) ? (_jsxs(Card, { className: "flex w-full flex-row justify-between items-center", clickable: true, onClick: handleToAddressClear, style: { height: '52px' }, children: [_jsxs("div", { className: "flex flex-row justify-center items-center gap-2", children: [_jsx(GradientAvatar, { size: "sm", address: toAddress }), _jsx(Text, { color: "primary", variant: "normal", children: `0x${truncateAtMiddle(toAddress.substring(2), 10)}` })] }), _jsx(CloseIcon, { className: "text-white", size: "sm" })] })) : (_jsxs(_Fragment, { children: [_jsx(TextInput, { value: toAddress, onChange: ev => setToAddress(ev.target.value), placeholder: `Wallet Address (0x...)`, name: "to-address", "data-1p-ignore": true, controls: _jsxs(Button, { className: "shrink-0", size: "xs", shape: "square", onClick: handlePaste, "data-id": "to-address", children: [_jsx(CopyIcon, {}), "Paste"] }) }), wallets.length > 1 && _jsx(AllButActiveWalletSelect, { onClick: setToAddress })] }))] }), errorMsg && (_jsx(Text, { variant: "normal", color: "negative", fontWeight: "bold", children: errorMsg })), _jsx("div", { className: "flex items-center justify-center mt-2", style: { height: '52px' }, children: isSendTxnPending ? (_jsx(Spinner, {})) : (_jsxs(Button, { className: "text-primary w-full", variant: "primary", size: "lg", type: "submit", disabled: !isNonZeroAmount || !isEthAddress(toAddress) || insufficientFunds || isSendTxnPending, children: ["Send", _jsx(ChevronRightIcon, {})] })) })] })), isConfirmationVisible && (_jsx(TransactionConfirmation, { name: name, symbol: symbol, imageUrl: imageUrl, amount: amountToSendFormatted, toAddress: toAddress, chainId: chainId, balance: tokenBalance?.balance || '0', decimals: decimals, fiatValue: amountToSendFiat, feeOptions: feeOptions, onSelectFeeOption: feeTokenAddress => {
                    setSelectedFeeTokenAddress(feeTokenAddress);
                }, isLoading: false, disabled: !isCorrectChainId && !isConnectorSequenceBased, onConfirm: handleConfirmationSubmit, onCancel: handleConfirmationCancel }))] }));
};
//# sourceMappingURL=SendCoin.js.map