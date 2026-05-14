"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaIconWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const widthClassMap = {
    '4xs': '16px',
    '2xs': '24px',
    sm: '32px',
    base: '44px',
    lg: '56px',
    '2lg': '64px',
    '3lg': '80px'
};
const MediaIconWrapper = ({ iconList, isAccount = false, size = 'base', shape = 'rounded' }) => {
    const firstThreeIcons = iconList.slice(0, 3);
    let partialWidth = 0;
    let shapeClass = 'rounded-lg';
    switch (size) {
        case '4xs':
            partialWidth = 8;
            shapeClass = 'rounded-sm';
            break;
        case '2xs':
            partialWidth = 12;
            shapeClass = 'rounded-md';
            break;
        case 'sm':
            partialWidth = 16;
            break;
        case 'base':
            partialWidth = 22;
            break;
        case 'lg':
            partialWidth = 28;
            break;
        case '2lg':
            partialWidth = 32;
            break;
        case '3lg':
            partialWidth = 40;
            break;
    }
    const width = firstThreeIcons.length * partialWidth + partialWidth;
    if (shape === 'rounded') {
        shapeClass = 'rounded-full';
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-row relative", style: { position: 'relative', width: `${width}px` }, children: firstThreeIcons.map((icon, index) => ((0, jsx_runtime_1.jsx)("div", { style: {
                position: 'absolute',
                top: '50%',
                left: `${index * partialWidth}px`,
                transform: 'translateY(-50%)'
            }, children: typeof icon === 'string' ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isAccount ? ((0, jsx_runtime_1.jsx)("div", { className: `flex items-center justify-center ${shapeClass} border bg-background-primary`, style: { width: `calc(${widthClassMap[size]} + 2px)`, height: `calc(${widthClassMap[size]} + 2px)` }, children: (0, jsx_runtime_1.jsx)(design_system_1.GradientAvatar, { address: icon, className: "w-full h-full" }) })) : ((0, jsx_runtime_1.jsx)("div", { className: `flex items-center justify-center ${shapeClass} border overflow-hidden`, style: {
                        width: `calc(${widthClassMap[size]} + 2px)`,
                        height: `calc(${widthClassMap[size]} + 2px)`
                    }, children: (0, jsx_runtime_1.jsx)("img", { src: icon, alt: "icon", style: { backgroundColor: 'lightgray' } }) })) })) : ((0, jsx_runtime_1.jsx)("div", { className: `flex items-center justify-center ${shapeClass} border bg-background-primary`, style: {
                    width: `calc(${widthClassMap[size]} + 2px)`,
                    height: `calc(${widthClassMap[size]} + 2px)`
                }, children: icon })) }, index))) }));
};
exports.MediaIconWrapper = MediaIconWrapper;
//# sourceMappingURL=MediaIconWrapper.js.map