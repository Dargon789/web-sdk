"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollbarWidth = void 0;
const react_1 = require("react");
/**
 * Hook that returns the browser's scrollbar width based on the user agent.
 * Specifically handles Chrome-based browsers differently from others.
 *
 * @returns {string} The scrollbar width as a CSS pixel value:
 * - Returns '13px' for Chrome-based browsers (Chrome, Chromium, Chrome iOS)
 * - Returns '0px' for all other browsers
 */
const useScrollbarWidth = () => {
    const [scrollbarWidth, setScrollbarWidth] = (0, react_1.useState)('0px');
    (0, react_1.useEffect)(() => {
        setScrollbarWidth(navigator.userAgent.match(/chrome|chromium|crios/i) ? '13px' : '0px');
    }, []);
    return scrollbarWidth;
};
exports.useScrollbarWidth = useScrollbarWidth;
//# sourceMappingURL=useScrollbarWidth.js.map