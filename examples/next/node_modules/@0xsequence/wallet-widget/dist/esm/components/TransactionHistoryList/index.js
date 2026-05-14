import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner, Text } from '@0xsequence/design-system';
import { useMemo } from 'react';
import { NoResults } from '../NoResults.js';
import { TransactionHistoryItem } from './TransactionHistoryItem.js';
import { TransactionHistorySkeleton } from './TransactionHistorySkeleton.js';
export const TransactionHistoryList = ({ transactions, isLoading, isFetchingNextPage }) => {
    const transactionPeriods = [
        {
            id: 'today',
            label: 'Today'
        },
        {
            id: 'yesterday',
            label: 'Yesterday'
        },
        {
            id: 'week',
            label: 'This Week'
        },
        {
            id: 'month',
            label: 'This Month'
        },
        {
            id: 'year',
            label: 'This Year'
        },
        {
            id: 'past',
            label: 'Past'
        }
    ];
    const transactionsByTime = useMemo(() => {
        const todayThreshold = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        const yesterdayThreshold = new Date(new Date().setDate(new Date(todayThreshold).getDate() - 1)).getTime();
        const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
        const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
        const firstDayOfMonth = new Date(currentDate.setDate(1));
        const firstDayOfYear = new Date(currentDate.setMonth(0, 1));
        const weekThreshold = firstDayOfWeek.getTime();
        const monthThreshold = firstDayOfMonth.getTime();
        const yearThreshold = firstDayOfYear.getTime();
        const transactionsByTime = {
            today: [],
            yesterday: [],
            week: [],
            month: [],
            year: [],
            past: []
        };
        transactions.forEach(transaction => {
            const transactionTime = new Date(transaction.timestamp).getTime();
            if (transactionTime >= todayThreshold) {
                transactionsByTime.today.push(transaction);
            }
            else if (transactionTime >= yesterdayThreshold) {
                transactionsByTime.yesterday.push(transaction);
            }
            else if (transactionTime >= weekThreshold) {
                transactionsByTime.week.push(transaction);
            }
            else if (transactionTime >= monthThreshold) {
                transactionsByTime.month.push(transaction);
            }
            else if (transactionTime >= yearThreshold) {
                transactionsByTime.year.push(transaction);
            }
            else {
                transactionsByTime.past.push(transaction);
            }
        });
        return transactionsByTime;
    }, [transactions]);
    if (isLoading) {
        return (_jsx("div", { className: "flex flex-col gap-2", children: _jsx(TransactionHistorySkeleton, {}) }));
    }
    const TimeLabel = ({ label }) => {
        return (_jsx("div", { children: _jsx(Text, { variant: "normal", color: "muted", fontWeight: "medium", children: label }) }));
    };
    const TransactionsList = ({ transactions }) => {
        return (_jsx("div", { className: "flex flex-col gap-2", children: transactions.map((transaction, index) => {
                return (_jsx("div", { className: "flex flex-col", children: _jsx(TransactionHistoryItem, { transaction: transaction }) }, `${transaction.txnHash}-${index}`));
            }) }));
    };
    return (_jsxs("div", { className: "flex flex-col gap-5", children: [transactionPeriods.map(period => {
                const txs = transactionsByTime[period.id];
                if (txs.length === 0) {
                    return null;
                }
                return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(TimeLabel, { label: period.label }), _jsx(TransactionsList, { transactions: txs })] }, period.id));
            }), transactions.length === 0 && _jsx(NoResults, {}), isFetchingNextPage && (_jsx("div", { className: "flex m-4 items-center justify-center", children: _jsx(Spinner, {}) }))] }));
};
//# sourceMappingURL=index.js.map