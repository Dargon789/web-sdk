import { type FC } from 'react';
export interface FeeOption {
    token: FeeToken;
    to: string;
    value: string;
    gasLimit: number;
}
export interface FeeToken {
    chainId: number;
    name: string;
    symbol: string;
    decimals?: number;
    logoURL: string;
    contractAddress?: string;
    tokenID?: string;
}
export interface FeeOptionBalance {
    tokenName: string;
    decimals: number;
    balance: string;
}
export interface FeeOptionSelectorProps {
    txnFeeOptions: FeeOption[];
    feeOptionBalances: FeeOptionBalance[];
    selectedFeeOptionAddress: string | undefined;
    setSelectedFeeOptionAddress: (address: string) => void;
}
export declare const FeeOptionSelector: FC<FeeOptionSelectorProps>;
//# sourceMappingURL=FeeOptionSelector.d.ts.map