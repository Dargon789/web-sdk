import { jsx as _jsx } from "react/jsx-runtime";
import { AppleLogo } from './AppleLogo.js';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo.js';
import { DiscordLogo } from './DiscordLogo.js';
import { EmailLogo } from './EmailLogo.js';
import { FacebookLogo } from './FacebookLogo.js';
import { GoogleLogo } from './GoogleLogo.js';
import { MetaMaskLogo } from './MetaMaskLogo.js';
import { SequenceLogo } from './SequenceLogo.js';
import { TwitchLogo } from './TwitchLogo.js';
import { WalletConnectLogo } from './WalletConnectLogo.js';
export const getConnectorLogo = (connectorId, isDarkMode = false) => {
    switch (connectorId) {
        case 'apple-waas':
            return _jsx(AppleLogo, { isDarkMode: isDarkMode });
        case 'email-waas':
            return _jsx(EmailLogo, { isDarkMode: isDarkMode });
        case 'google-waas':
            return _jsx(GoogleLogo, {});
        case 'apple':
            return _jsx(AppleLogo, { isDarkMode: isDarkMode });
        case 'coinbase-wallet':
            return _jsx(CoinbaseWalletLogo, {});
        case 'discord':
            return _jsx(DiscordLogo, { isDarkMode: isDarkMode });
        case 'email':
            return _jsx(EmailLogo, { isDarkMode: isDarkMode });
        case 'facebook':
            return _jsx(FacebookLogo, {});
        case 'google':
            return _jsx(GoogleLogo, {});
        case 'metamask-wallet':
            return _jsx(MetaMaskLogo, {});
        case 'sequence':
            return _jsx(SequenceLogo, {});
        case 'twitch':
            return _jsx(TwitchLogo, { isDarkMode: isDarkMode });
        case 'wallet-connect':
            return _jsx(WalletConnectLogo, {});
        default:
            return null;
    }
};
//# sourceMappingURL=getConnectorLogos.js.map