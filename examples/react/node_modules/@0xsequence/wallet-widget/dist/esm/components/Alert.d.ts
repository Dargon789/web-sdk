import { Button } from '@0xsequence/design-system';
import React, { type ComponentProps } from 'react';
export type AlertProps = {
    title: string;
    description: string;
    secondaryDescription?: string;
    variant: 'negative' | 'warning' | 'positive';
    buttonProps?: ComponentProps<typeof Button>;
    children?: React.ReactNode;
};
export declare const Alert: ({ title, description, secondaryDescription, variant, buttonProps, children }: AlertProps) => JSX.Element;
//# sourceMappingURL=Alert.d.ts.map