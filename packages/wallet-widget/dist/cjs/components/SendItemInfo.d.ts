interface SendItemInfoProps {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    imageUrl?: string;
    fiatValue?: string;
    chainId: number;
    showSquareImage?: boolean;
    balanceSuffix?: string;
}
export declare const SendItemInfoSkeleton: () => JSX.Element;
export declare const SendItemInfo: ({ imageUrl, name, decimals, balance, symbol, fiatValue, chainId, showSquareImage, balanceSuffix }: SendItemInfoProps) => JSX.Element;
export {};
//# sourceMappingURL=SendItemInfo.d.ts.map