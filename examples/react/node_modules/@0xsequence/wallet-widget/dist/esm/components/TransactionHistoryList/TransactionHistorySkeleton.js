import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from '@0xsequence/design-system';
import React from 'react';
export const TransactionHistorySkeleton = () => {
    const getTransactionItem = () => {
        return (_jsxs("div", { className: "flex flex-col gap-2 w-full justify-between", children: [_jsxs("div", { className: "flex flex-row justify-between", children: [_jsx(Skeleton, { style: { width: '65px', height: '20px' } }), _jsx(Skeleton, { style: { width: '75px', height: '17px' } })] }), _jsxs("div", { className: "flex flex-row justify-between", children: [_jsx(Skeleton, { style: { width: '120px', height: '20px' } }), _jsx(Skeleton, { style: { width: '35px', height: '17px' } })] })] }));
    };
    return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(Skeleton, { style: { width: '70px', height: '17px' } }), _jsx("div", { className: "flex flex-col gap-2", children: Array(8)
                    .fill(null)
                    .map((_, index) => {
                    return (_jsx("div", { className: "flex rounded-xl p-4 gap-2 items-center justify-center flex-col bg-background-secondary", children: getTransactionItem() }, index));
                }) })] }));
};
//# sourceMappingURL=TransactionHistorySkeleton.js.map