"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCollectible = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const connect_1 = require("@0xsequence/connect");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const react_1 = require("react");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const AllButActiveWalletSelect_js_1 = require("../../components/Select/AllButActiveWalletSelect.js");
const SendItemInfo_js_1 = require("../../components/SendItemInfo.js");
const TransactionConfirmation_js_1 = require("../../components/TransactionConfirmation.js");
const analytics_js_1 = require("../../constants/analytics.js");
const index_js_1 = require("../../constants/index.js");
const Navigation_js_1 = require("../../contexts/Navigation.js");
const index_js_2 = require("../../hooks/index.js");
const index_js_3 = require("../../utils/index.js");
const SendCollectible = ({ chainId, contractAddress, tokenId }) => {
    const [errorMsg, setErrorMsg] = (0, react_1.useState)(null);
    const { wallets } = (0, connect_1.useWallets)();
    const { setNavigation } = (0, index_js_2.useNavigation)();
    const { setIsBackButtonEnabled } = (0, Navigation_js_1.useNavigationContext)();
    const { analytics } = (0, connect_1.useAnalyticsContext)();
    const { chains } = (0, wagmi_1.useConfig)();
    const connectedChainId = (0, wagmi_1.useChainId)();
    const { address: accountAddress = '', connector } = (0, wagmi_1.useConnection)();
    const indexerClient = (0, hooks_1.useIndexerClient)(chainId);
    const publicClient = (0, wagmi_1.usePublicClient)({ chainId });
    const isConnectorSequenceBased = !!connector?._wallet?.isSequenceBased;
    const isCorrectChainId = connectedChainId === chainId;
    const { clearCachedBalances } = (0, hooks_1.useClearCachedBalances)();
    const { switchChainAsync } = (0, wagmi_1.useSwitchChain)();
    const amountInputRef = (0, react_1.useRef)(null);
    const [amount, setAmount] = (0, react_1.useState)('0');
    const [toAddress, setToAddress] = (0, react_1.useState)('');
    const [showAmountControls, setShowAmountControls] = (0, react_1.useState)(false);
    const { data: walletClient } = (0, wagmi_1.useWalletClient)();
    const [isSendTxnPending, setIsSendTxnPending] = (0, react_1.useState)(false);
    const [selectedFeeTokenAddress, setSelectedFeeTokenAddress] = (0, react_1.useState)(null);
    const [pendingV3FeeConfirmation, confirmV3FeeOption, rejectV3FeeOption] = (0, connect_1.useFeeOptions)();
    const [pendingWaasFeeConfirmation, confirmWaasFeeOption, rejectWaasFeeOption] = (0, connect_1.useWaasFeeOptions)();
    const { sendTransactionAsync: sendWalletTransactionAsync } = (0, connect_1.useSendWalletTransaction)();
    const connectorType = connector?.type;
    const isWaasConnectorActive = connectorType === 'sequence-waas';
    const isSequenceV3ConnectorActive = connectorType === 'sequence-v3-wallet' || wallets.some(wallet => wallet.id === 'sequence-v3-wallet' && wallet.isActive);
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
    const { data: tokenBalance, isLoading: isLoadingBalances } = (0, hooks_1.useGetSingleTokenBalance)({
        chainId,
        contractAddress,
        accountAddress,
        tokenId
    });
    let contractType;
    if (tokenBalance) {
        contractType = tokenBalance.contractType;
    }
    (0, react_1.useEffect)(() => {
        if (tokenBalance) {
            if (contractType === 'ERC721') {
                setAmount('1');
                setShowAmountControls(false);
            }
            else if (contractType === 'ERC1155') {
                if (Number((0, viem_1.formatUnits)(BigInt(tokenBalance?.balance || 0), decimals)) >= 1) {
                    setAmount('1');
                }
                setShowAmountControls(true);
            }
        }
    }, [tokenBalance]);
    (0, react_1.useEffect)(() => {
        setIsBackButtonEnabled(!isConfirmationVisible);
    }, [isConfirmationVisible, setIsBackButtonEnabled]);
    (0, react_1.useEffect)(() => {
        if (!feeOptions?.options?.length) {
            setSelectedFeeTokenAddress(null);
        }
    }, [feeOptions?.options?.length]);
    const isLoading = isLoadingBalances;
    if (isLoading) {
        return null;
    }
    const decimals = tokenBalance?.tokenMetadata?.decimals || 0;
    const name = tokenBalance?.tokenMetadata?.name || 'Unknown';
    const imageUrl = tokenBalance?.tokenMetadata?.image || tokenBalance?.contractInfo?.logoURI || '';
    const amountToSendFormatted = amount === '' ? '0' : amount;
    const amountRaw = (0, viem_1.parseUnits)(amountToSendFormatted, decimals);
    const insufficientFunds = amountRaw > BigInt(tokenBalance?.balance || '0');
    const isNonZeroAmount = amountRaw > 0n;
    const handleChangeAmount = (ev) => {
        const { value } = ev.target;
        // Prevent value from having more decimals than the token supports
        const formattedValue = (0, index_js_3.limitDecimals)(value, decimals);
        setAmount(formattedValue);
    };
    const handleSubtractOne = () => {
        setErrorMsg(null);
        amountInputRef.current?.focus();
        const decrementedAmount = Number(amount) - 1;
        const newAmount = Math.max(decrementedAmount, 0).toString();
        setAmount(newAmount);
    };
    const handleAddOne = () => {
        setErrorMsg(null);
        amountInputRef.current?.focus();
        const incrementedAmount = Number(amount) + 1;
        const maxAmount = Number((0, viem_1.formatUnits)(BigInt(tokenBalance?.balance || 0), decimals));
        const newAmount = Math.min(incrementedAmount, maxAmount).toString();
        setAmount(newAmount);
    };
    const handleMax = () => {
        setErrorMsg(null);
        amountInputRef.current?.focus();
        const maxAmount = (0, viem_1.formatUnits)(BigInt(tokenBalance?.balance || 0), decimals).toString();
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
    const handleConfirmationSubmit = () => {
        if (!activeFeeConfirmation) {
            executeTransaction();
            return;
        }
        if (!selectedFeeTokenAddress) {
            return;
        }
        const selectedOption = activeFeeConfirmation.options.find(option => (option.token.contractAddress ?? viem_1.zeroAddress) === selectedFeeTokenAddress);
        if (!selectedOption) {
            console.error('Unable to resolve the selected fee option.');
            return;
        }
        if (isWaasConnectorActive) {
            const feeTokenAddress = selectedFeeTokenAddress === viem_1.zeroAddress ? null : selectedFeeTokenAddress;
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
        const sendAmount = (0, viem_1.parseUnits)(amountToSendFormatted, decimals);
        let txHash;
        let txData;
        try {
            switch (contractType) {
                case 'ERC721':
                    txData = (0, viem_1.encodeFunctionData)({
                        abi: index_js_1.ERC_721_ABI,
                        functionName: 'safeTransferFrom',
                        args: [accountAddress, toAddress, tokenId]
                    });
                    if (isSequenceV3ConnectorActive) {
                        txHash = (await sendWalletTransactionAsync({
                            chainId,
                            transaction: {
                                to: tokenBalance.contractAddress,
                                data: txData
                            }
                        }));
                    }
                    else {
                        txHash = await walletClient.sendTransaction({
                            account: accountAddress,
                            to: tokenBalance.contractAddress,
                            data: txData,
                            chain: chains.find(c => c.id === chainId)
                        });
                    }
                    break;
                case 'ERC1155':
                default:
                    txData = (0, viem_1.encodeFunctionData)({
                        abi: index_js_1.ERC_1155_ABI,
                        functionName: 'safeBatchTransferFrom',
                        args: [accountAddress, toAddress, [tokenId], [(0, viem_1.toHex)(sendAmount)], (0, viem_1.toHex)(new Uint8Array())]
                    });
                    if (isSequenceV3ConnectorActive) {
                        txHash = (await sendWalletTransactionAsync({
                            chainId,
                            transaction: {
                                to: tokenBalance.contractAddress,
                                data: txData
                            }
                        }));
                    }
                    else {
                        txHash = await walletClient.sendTransaction({
                            account: accountAddress,
                            to: tokenBalance.contractAddress,
                            data: txData,
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
                        source: analytics_js_1.EVENT_SOURCE,
                        type: analytics_js_1.EVENT_TYPES.SEND_NFT,
                        chainId: String(chainId),
                        origin: window.location.origin,
                        collectibleAddress: contractAddress,
                        collectibleId: tokenId,
                        txHash: txHash
                    },
                    nums: {
                        collectibleAmount: Number(amountRaw),
                        collectibleAmountDecimal: Number(amountToSendFormatted)
                    }
                });
                // Wait for receipt in the background
                if (publicClient) {
                    (0, connect_1.waitForTransactionReceipt)({
                        indexerClient,
                        txnHash: txHash,
                        publicClient,
                        confirmations: connect_1.TRANSACTION_CONFIRMATIONS_DEFAULT
                    })
                        .then(() => {
                        clearCachedBalances();
                        console.log('Transaction confirmed and balances cleared:', txHash);
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
    const maxAmount = (0, viem_1.formatUnits)(BigInt(tokenBalance?.balance || 0), decimals).toString();
    const isMinimum = Number(amount) === 0;
    const isMaximum = Number(amount) >= Number(maxAmount);
    return ((0, jsx_runtime_1.jsxs)("form", { className: "flex px-4 pb-4 gap-2 flex-col", onSubmit: handleSendClick, children: [!isConfirmationVisible && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex bg-background-secondary rounded-xl p-4 gap-2 flex-col", children: [(0, jsx_runtime_1.jsx)(SendItemInfo_js_1.SendItemInfo, { imageUrl: imageUrl, showSquareImage: true, decimals: decimals, name: name, symbol: '', balance: tokenBalance?.balance || '0', chainId: chainId }), (0, jsx_runtime_1.jsx)(design_system_1.NumericInput, { ref: amountInputRef, name: "amount", value: amount, onChange: handleChangeAmount, disabled: !showAmountControls, controls: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showAmountControls && ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.Button, { disabled: isMinimum, size: "xs", onClick: handleSubtractOne, children: (0, jsx_runtime_1.jsx)(design_system_1.SubtractIcon, {}) }), (0, jsx_runtime_1.jsx)(design_system_1.Button, { disabled: isMaximum, size: "xs", onClick: handleAddOne, children: (0, jsx_runtime_1.jsx)(design_system_1.AddIcon, {}) }), (0, jsx_runtime_1.jsx)(design_system_1.Button, { className: "shrink-0", size: "xs", shape: "square", onClick: handleMax, "data-id": "maxCoin", children: "Max" })] })) }) }), insufficientFunds && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { className: "mt-2", variant: "normal", color: "negative", asChild: true, children: (0, jsx_runtime_1.jsx)("div", { children: "Insufficient Balance" }) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex bg-background-secondary rounded-xl p-4 gap-2 flex-col", children: [(0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "muted", children: "To" }), (0, index_js_3.isEthAddress)(toAddress) ? ((0, jsx_runtime_1.jsxs)(design_system_1.Card, { className: "flex w-full flex-row justify-between items-center", clickable: true, onClick: handleToAddressClear, style: { height: '52px' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-center items-center gap-2", children: [(0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { size: "sm", address: toAddress }), (0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", variant: "normal", children: `0x${(0, connect_1.truncateAtMiddle)(toAddress.substring(2), 10)}` })] }), (0, jsx_runtime_1.jsx)(design_system_1.CloseIcon, { className: "text-white", size: "sm" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(design_system_1.TextInput, { value: toAddress, onChange: ev => setToAddress(ev.target.value), placeholder: `Wallet Address (0x...)`, name: "to-address", "data-1p-ignore": true, controls: (0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "shrink-0", size: "xs", shape: "square", onClick: handlePaste, "data-id": "to-address", children: [(0, jsx_runtime_1.jsx)(design_system_1.CopyIcon, {}), "Paste"] }) }), wallets.length > 1 && (0, jsx_runtime_1.jsx)(AllButActiveWalletSelect_js_1.AllButActiveWalletSelect, { onClick: setToAddress })] }))] }), errorMsg && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "negative", fontWeight: "bold", children: errorMsg })), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center mt-2", style: { height: '52px' }, children: isSendTxnPending ? ((0, jsx_runtime_1.jsx)(design_system_1.Spinner, {})) : ((0, jsx_runtime_1.jsxs)(design_system_1.Button, { className: "text-primary w-full", variant: "primary", size: "lg", type: "submit", disabled: !isNonZeroAmount || !(0, index_js_3.isEthAddress)(toAddress) || insufficientFunds || isSendTxnPending, children: ["Send", (0, jsx_runtime_1.jsx)(design_system_1.ChevronRightIcon, {})] })) })] })), isConfirmationVisible && ((0, jsx_runtime_1.jsx)(TransactionConfirmation_js_1.TransactionConfirmation, { name: name, symbol: "", imageUrl: imageUrl, amount: amountToSendFormatted, toAddress: toAddress, showSquareImage: true, chainId: chainId, balance: tokenBalance?.balance || '0', decimals: decimals, feeOptions: feeOptions, onSelectFeeOption: feeTokenAddress => {
                    setSelectedFeeTokenAddress(feeTokenAddress);
                }, isLoading: false, disabled: !isCorrectChainId && !isConnectorSequenceBased, onConfirm: handleConfirmationSubmit, onCancel: handleConfirmationCancel }))] }));
};
exports.SendCollectible = SendCollectible;
//# sourceMappingURL=SendCollectible.js.map