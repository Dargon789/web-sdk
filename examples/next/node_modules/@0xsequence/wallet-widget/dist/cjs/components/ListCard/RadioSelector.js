"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioSelector = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const react_1 = require("motion/react");
const RadioSelector = (props) => {
    const { isSelected, className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: `${className} border-2 border-border-normal bg-background-muted rounded-full relative shrink-0 w-9 h-9`, children: (0, jsx_runtime_1.jsx)(react_1.motion.div
        // TODO: change color to violet-600
        , { 
            // TODO: change color to violet-600
            className: "flex bg-background-inverse absolute items-center justify-center rounded-full text-inverse w-9 h-9", initial: { opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }, animate: { opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }, transition: { ease: 'backOut' }, style: {
                top: '-2px',
                left: '-2px'
            }, children: (0, jsx_runtime_1.jsx)(design_system_1.CheckmarkIcon, {}) }) }));
};
exports.RadioSelector = RadioSelector;
//# sourceMappingURL=RadioSelector.js.map