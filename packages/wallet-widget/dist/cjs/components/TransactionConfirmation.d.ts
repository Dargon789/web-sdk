import { type FeeOption } from './FeeOptionSelector.js';
interface TransactionConfirmationProps {
    name: string;
    symbol: string;
    imageUrl?: string;
    amount: string;
    toAddress: string;
    showSquareImage?: boolean;
    fiatValue?: string;
    chainId: number;
    balance: string;
    decimals: number;
    feeOptions?: {
        options: FeeOption[];
        chainId: number;
    };
    disabled?: boolean;
    onSelectFeeOption?: (feeTokenAddress: string | null) => void;
    isLoading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare const TransactionConfirmation: ({ name, symbol, imageUrl, amount, toAddress, showSquareImage, fiatValue, chainId, balance, decimals, feeOptions, onSelectFeeOption, isLoading, disabled, onConfirm, onCancel }: TransactionConfirmationProps) => JSX.Element;
export {};
//# sourceMappingURL=TransactionConfirmation.d.ts.map