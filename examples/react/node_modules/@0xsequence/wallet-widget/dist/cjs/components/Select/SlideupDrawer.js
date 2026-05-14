"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideupDrawer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("motion/react");
const react_2 = require("react");
const react_dom_1 = __importDefault(require("react-dom"));
const index_js_1 = require("../../constants/index.js");
const WalletContentRef_js_1 = require("../../contexts/WalletContentRef.js");
const SlideupDrawer = ({ header, children, footer, onClose }) => {
    const [walletContentHeight, setWalletContentHeight] = (0, react_2.useState)(0);
    const walletContentRef = (0, react_2.useContext)(WalletContentRef_js_1.WalletContentRefContext);
    (0, react_2.useEffect)(() => {
        const rect = walletContentRef?.current?.getBoundingClientRect();
        if (rect) {
            setWalletContentHeight(rect.height);
        }
    }, [walletContentRef]);
    if (!walletContentRef.current) {
        return null;
    }
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 0.6 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(38, 38, 38, 1)',
                    zIndex: 30
                }, onClick: e => {
                    e.stopPropagation();
                    onClose();
                } }, "modal-background"), (0, jsx_runtime_1.jsx)(react_1.motion.div, { initial: { y: '100%', opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: '100%', opacity: 0 }, transition: { duration: 0.2, ease: 'easeOut' }, drag: "y", dragConstraints: { top: 0, bottom: 0 }, onDragEnd: (event, info) => {
                    if (info.offset.y > 100) {
                        onClose();
                    }
                }, style: {
                    maxWidth: index_js_1.WALLET_WIDTH,
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 30
                }, onClick: e => e.stopPropagation(), children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-background-primary p-0 rounded-xl", style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row justify-start p-4", children: header }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-none bg-background-primary px-4 pb-4", style: { height: 'auto', maxHeight: `calc(${walletContentHeight}px / 2)`, overflowY: 'auto' }, children: children }), footer && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(design_system_1.Separator, { className: "my-0" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row justify-start p-4", children: footer })] }))] }) }, "modal-content")] }), walletContentRef.current);
};
exports.SlideupDrawer = SlideupDrawer;
//# sourceMappingURL=SlideupDrawer.js.map