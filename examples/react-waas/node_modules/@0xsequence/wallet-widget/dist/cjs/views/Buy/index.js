"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buy = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _0xtrails_1 = require("0xtrails");
const connect_1 = require("@0xsequence/connect");
const hooks_1 = require("@0xsequence/hooks");
const wagmi_1 = require("wagmi");
const consts_js_1 = require("../../views/Swap/consts.js");
const useTrailsSequenceV3WalletSend_js_1 = require("../../views/Swap/useTrailsSequenceV3WalletSend.js");
const Buy = () => {
    const { address } = (0, wagmi_1.useAccount)();
    const config = (0, hooks_1.useConfig)();
    const { theme } = (0, connect_1.useTheme)();
    const { trailsCustomCSS } = (0, connect_1.useConnectConfigContext)();
    (0, useTrailsSequenceV3WalletSend_js_1.useTrailsSequenceV3WalletSend)();
    const trailsApiUrl = config.env.trailsApiUrl;
    const sequenceIndexerUrl = config.env.indexerUrl;
    const sequenceNodeGatewayUrl = config.env.nodeGatewayUrl;
    const sequenceApiUrl = config.env.apiUrl;
    const trailsTheme = typeof theme === 'string' && theme === 'light' ? 'light' : 'dark';
    const resolvedCustomCss = typeof trailsCustomCSS === 'string'
        ? trailsCustomCSS
        : trailsCustomCSS?.[trailsTheme] || (trailsTheme === 'dark' ? consts_js_1.TRAILS_CUSTOM_CSS : consts_js_1.TRAILS_CUSTOM_CSS_LIGHT);
    return ((0, jsx_runtime_1.jsx)(_0xtrails_1.TrailsWidget, { apiKey: config.projectAccessKey, trailsApiUrl: trailsApiUrl, sequenceIndexerUrl: sequenceIndexerUrl, sequenceNodeGatewayUrl: sequenceNodeGatewayUrl, appUrl: "https://sequence.app", sequenceApiUrl: sequenceApiUrl, renderInline: true, theme: trailsTheme, mode: "fund", toAddress: address || null, customCss: resolvedCustomCss, hideDisconnect: true, hideAddWallet: true }));
};
exports.Buy = Buy;
//# sourceMappingURL=index.js.map