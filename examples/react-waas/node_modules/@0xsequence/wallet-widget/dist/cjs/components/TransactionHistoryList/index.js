"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("react");
const NoResults_js_1 = require("../NoResults.js");
const TransactionHistoryItem_js_1 = require("./TransactionHistoryItem.js");
const TransactionHistorySkeleton_js_1 = require("./TransactionHistorySkeleton.js");
const TransactionHistoryList = ({ transactions, isLoading, isFetchingNextPage }) => {
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
    const transactionsByTime = (0, react_1.useMemo)(() => {
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
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: (0, jsx_runtime_1.jsx)(TransactionHistorySkeleton_js_1.TransactionHistorySkeleton, {}) }));
    }
    const TimeLabel = ({ label }) => {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(design_system_1.Text, { variant: "normal", color: "muted", fontWeight: "medium", children: label }) }));
    };
    const TransactionsList = ({ transactions }) => {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: transactions.map((transaction, index) => {
                return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col", children: (0, jsx_runtime_1.jsx)(TransactionHistoryItem_js_1.TransactionHistoryItem, { transaction: transaction }) }, `${transaction.txnHash}-${index}`));
            }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-5", children: [transactionPeriods.map(period => {
                const txs = transactionsByTime[period.id];
                if (txs.length === 0) {
                    return null;
                }
                return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)(TimeLabel, { label: period.label }), (0, jsx_runtime_1.jsx)(TransactionsList, { transactions: txs })] }, period.id));
            }), transactions.length === 0 && (0, jsx_runtime_1.jsx)(NoResults_js_1.NoResults, {}), isFetchingNextPage && ((0, jsx_runtime_1.jsx)("div", { className: "flex m-4 items-center justify-center", children: (0, jsx_runtime_1.jsx)(design_system_1.Spinner, {}) }))] }));
};
exports.TransactionHistoryList = TransactionHistoryList;
//# sourceMappingURL=index.js.map