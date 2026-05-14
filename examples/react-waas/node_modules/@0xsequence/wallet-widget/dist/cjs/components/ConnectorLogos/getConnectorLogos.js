"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectorLogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AppleLogo_js_1 = require("./AppleLogo.js");
const CoinbaseWalletLogo_js_1 = require("./CoinbaseWalletLogo.js");
const DiscordLogo_js_1 = require("./DiscordLogo.js");
const EmailLogo_js_1 = require("./EmailLogo.js");
const FacebookLogo_js_1 = require("./FacebookLogo.js");
const GoogleLogo_js_1 = require("./GoogleLogo.js");
const MetaMaskLogo_js_1 = require("./MetaMaskLogo.js");
const SequenceLogo_js_1 = require("./SequenceLogo.js");
const TwitchLogo_js_1 = require("./TwitchLogo.js");
const WalletConnectLogo_js_1 = require("./WalletConnectLogo.js");
const getConnectorLogo = (connectorId, isDarkMode = false) => {
    switch (connectorId) {
        case 'apple-waas':
            return (0, jsx_runtime_1.jsx)(AppleLogo_js_1.AppleLogo, { isDarkMode: isDarkMode });
        case 'email-waas':
            return (0, jsx_runtime_1.jsx)(EmailLogo_js_1.EmailLogo, { isDarkMode: isDarkMode });
        case 'google-waas':
            return (0, jsx_runtime_1.jsx)(GoogleLogo_js_1.GoogleLogo, {});
        case 'apple':
            return (0, jsx_runtime_1.jsx)(AppleLogo_js_1.AppleLogo, { isDarkMode: isDarkMode });
        case 'coinbase-wallet':
            return (0, jsx_runtime_1.jsx)(CoinbaseWalletLogo_js_1.CoinbaseWalletLogo, {});
        case 'discord':
            return (0, jsx_runtime_1.jsx)(DiscordLogo_js_1.DiscordLogo, { isDarkMode: isDarkMode });
        case 'email':
            return (0, jsx_runtime_1.jsx)(EmailLogo_js_1.EmailLogo, { isDarkMode: isDarkMode });
        case 'facebook':
            return (0, jsx_runtime_1.jsx)(FacebookLogo_js_1.FacebookLogo, {});
        case 'google':
            return (0, jsx_runtime_1.jsx)(GoogleLogo_js_1.GoogleLogo, {});
        case 'metamask-wallet':
            return (0, jsx_runtime_1.jsx)(MetaMaskLogo_js_1.MetaMaskLogo, {});
        case 'sequence':
            return (0, jsx_runtime_1.jsx)(SequenceLogo_js_1.SequenceLogo, {});
        case 'twitch':
            return (0, jsx_runtime_1.jsx)(TwitchLogo_js_1.TwitchLogo, { isDarkMode: isDarkMode });
        case 'wallet-connect':
            return (0, jsx_runtime_1.jsx)(WalletConnectLogo_js_1.WalletConnectLogo, {});
        default:
            return null;
    }
};
exports.getConnectorLogo = getConnectorLogo;
//# sourceMappingURL=getConnectorLogos.js.map