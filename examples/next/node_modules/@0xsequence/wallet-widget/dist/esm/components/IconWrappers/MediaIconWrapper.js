import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { GradientAvatar } from '@0xsequence/design-system';
const widthClassMap = {
    '4xs': '16px',
    '2xs': '24px',
    sm: '32px',
    base: '44px',
    lg: '56px',
    '2lg': '64px',
    '3lg': '80px'
};
export const MediaIconWrapper = ({ iconList, isAccount = false, size = 'base', shape = 'rounded' }) => {
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
    return (_jsx("div", { className: "flex flex-row relative", style: { position: 'relative', width: `${width}px` }, children: firstThreeIcons.map((icon, index) => (_jsx("div", { style: {
                position: 'absolute',
                top: '50%',
                left: `${index * partialWidth}px`,
                transform: 'translateY(-50%)'
            }, children: typeof icon === 'string' ? (_jsx(_Fragment, { children: isAccount ? (_jsx("div", { className: `flex items-center justify-center ${shapeClass} border bg-background-primary`, style: { width: `calc(${widthClassMap[size]} + 2px)`, height: `calc(${widthClassMap[size]} + 2px)` }, children: _jsx(GradientAvatar, { address: icon, className: "w-full h-full" }) })) : (_jsx("div", { className: `flex items-center justify-center ${shapeClass} border overflow-hidden`, style: {
                        width: `calc(${widthClassMap[size]} + 2px)`,
                        height: `calc(${widthClassMap[size]} + 2px)`
                    }, children: _jsx("img", { src: icon, alt: "icon", style: { backgroundColor: 'lightgray' } }) })) })) : (_jsx("div", { className: `flex items-center justify-center ${shapeClass} border bg-background-primary`, style: {
                    width: `calc(${widthClassMap[size]} + 2px)`,
                    height: `calc(${widthClassMap[size]} + 2px)`
                }, children: icon })) }, index))) }));
};
//# sourceMappingURL=MediaIconWrapper.js.map