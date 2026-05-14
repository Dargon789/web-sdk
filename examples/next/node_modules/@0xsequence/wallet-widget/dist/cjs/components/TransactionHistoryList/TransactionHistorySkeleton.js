"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistorySkeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = __importDefault(require("react"));
const TransactionHistorySkeleton = () => {
    const getTransactionItem = () => {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 w-full justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '65px', height: '20px' } }), (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '75px', height: '17px' } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '120px', height: '20px' } }), (0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '35px', height: '17px' } })] })] }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)(design_system_1.Skeleton, { style: { width: '70px', height: '17px' } }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: Array(8)
                    .fill(null)
                    .map((_, index) => {
                    return ((0, jsx_runtime_1.jsx)("div", { className: "flex rounded-xl p-4 gap-2 items-center justify-center flex-col bg-background-secondary", children: getTransactionItem() }, index));
                }) })] }));
};
exports.TransactionHistorySkeleton = TransactionHistorySkeleton;
//# sourceMappingURL=TransactionHistorySkeleton.js.map