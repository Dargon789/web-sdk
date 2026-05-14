export interface FiatCurrency {
    decimals: number;
    name: {
        message: string;
    };
    sign: string;
    symbol: string;
}
export declare const supportedFiatCurrencies: FiatCurrency[];
export declare const defaultFiatCurrency: FiatCurrency;
//# sourceMappingURL=currency.d.ts.map