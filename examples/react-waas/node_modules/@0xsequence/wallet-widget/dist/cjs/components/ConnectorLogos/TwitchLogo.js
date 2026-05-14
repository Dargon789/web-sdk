"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitchLogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TwitchLogo = ({ isDarkMode }) => {
    const fillColor = isDarkMode ? 'white' : 'black';
    return ((0, jsx_runtime_1.jsx)("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 2400 2800", transform: "scale(0.80)", children: (0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsxs)("g", { id: "Layer_1-2", children: [(0, jsx_runtime_1.jsx)("path", { fill: fillColor, d: "M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600\r\n                  V1300z" }), (0, jsx_runtime_1.jsx)("rect", { width: "200", height: "600", x: "1700", y: "550", fill: fillColor }), (0, jsx_runtime_1.jsx)("rect", { width: "200", height: "600", x: "1150", y: "550", fill: fillColor })] }) }) }));
};
exports.TwitchLogo = TwitchLogo;
//# sourceMappingURL=TwitchLogo.js.map