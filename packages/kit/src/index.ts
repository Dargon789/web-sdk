import React, { useState, useEffect } from 'react';
import { sequence } from '0xsequence';
import { ThemeProvider, Modal, Box, Text, useTheme as useTheme$1, ChevronLeftIcon, TextInput, Button, ChevronRightIcon, Divider, Card, vars, Image } from '@0xsequence/design-system';
import { AnimatePresence } from 'framer-motion';
import { useAccount, useConnect } from 'wagmi';
import { EMAIL_CONNECTOR_LOCAL_STORAGE_KEY } from '@0xsequence/kit-connectors';
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';
import { style, globalStyle } from '@vanilla-extract/css';
import { providers } from 'ethers';
import { Proof, ETHAuth } from '@0xsequence/ethauth';
import { SequenceAPIClient } from '@0xsequence/api';
import { SequenceIndexer } from '@0xsequence/indexer';
import { SequenceMetadata } from '@0xsequence/metadata';
import { networks, indexerURL } from '@0xsequence/network';
import '@0xsequence/design-system/styles.css';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__vanilla_filescope__.setFileScope("packages/kit/src/components/styles.css.ts", "kit");
const networkButton = style({
  maxWidth: '400px',
  width: '100%',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
}, "networkButton");
const clickable = style({
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
}, "clickable");
const walletLogoContainer = style({}, "walletLogoContainer");
globalStyle(`${walletLogoContainer} svg`, {
  height: '40px'
});
const walletLogoContainerExtended = style({}, "walletLogoContainerExtended");
globalStyle(`${walletLogoContainerExtended} svg`, {
  width: '30px'
});
const walletContent = style({}, "walletContent");

// Will affect the close button in the modal
globalStyle(`${walletContent} + button`, {
  backgroundColor: 'transparent'
});
globalStyle(`${walletContent} + button > svg`, {
  width: '20px',
  height: '20px'
});
__vanilla_filescope__.endFileScope();
const ExtendedWalletList = ({
  onConnect,
  connectors
}) => {
  const {
    theme
  } = useTheme$1();
  const {
    isPending
  } = useConnect();
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    gap: "2",
    marginTop: "5"
  }, connectors.map(connector => {
    const Logo = theme === 'dark' ? connector._wallet.logoDark : connector._wallet.logoLight;
    const walletName = connector._wallet.name;
    const connectorId = connector._wallet.id;
    return /*#__PURE__*/React.createElement(Box, {
      key: connectorId,
      as: "button",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      background: "backgroundSecondary",
      color: "text100",
      borderRadius: "md",
      padding: "4",
      style: {
        height: '60px'
      },
      className: networkButton,
      onClick: () => onConnect(connector)
    }, /*#__PURE__*/React.createElement(Text, {
      variant: "medium",
      color: "text100"
    }, walletName, isPending), /*#__PURE__*/React.createElement(Box, {
      justifyContent: "center",
      alignItems: "center",
      style: {
        backgroundColor: connector._wallet.iconBackground
      },
      borderRadius: "md",
      className: walletLogoContainerExtended
    }, /*#__PURE__*/React.createElement(Logo, null)));
  }));
};
const Banner = ({
  config: _config = {}
}) => {
  const {
    signIn = {}
  } = _config;
  const {
    logoUrl
  } = signIn;
  return /*#__PURE__*/React.createElement(React.Fragment, null, logoUrl && /*#__PURE__*/React.createElement(Box, {
    marginTop: "5",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Image, {
    src: logoUrl,
    style: {
      height: '110px'
    }
  })));
};
const LOCAL_STORAGE_PREFIX = '@kit';
const LOCAL_STORAGE_PREFIX_SETTINGS = 'settings';
const LOCAL_STORAGE_PREFIX_THEME = 'theme';
const LOCAL_STORAGE_PREFIX_ETHAUTH_PROOF = 'ethAuthProof';
const LOCAL_STORAGE_PREFIX_ETHAUTH_SETTINGS = 'ethAuthSettings';
const LOCAL_STORAGE_PREFIX_PROJECT_ACCESS_KEY = 'projectAccessKey';
let LocalStorageKey = /*#__PURE__*/function (LocalStorageKey) {
  LocalStorageKey["Settings"] = "@kit.settings";
  LocalStorageKey["Theme"] = "@kit.theme";
  LocalStorageKey["EthAuthProof"] = "@kit.ethAuthProof";
  LocalStorageKey["EthAuthSettings"] = "@kit.ethAuthSettings";
  LocalStorageKey["ProjectAccessKey"] = "@kit.projectAccessKey";
  return LocalStorageKey;
}({});
const defaultSignInOptions = {
  showEmailInput: true,
  walletAuthOptions: ['sequence', 'metamask', 'wallet-connect', 'coinbase-wallet'],
  socialAuthOptions: ['google', 'facebook', 'twitch', 'apple']
};

// Default session expiration of ETHAuth token (1 week)
const DEFAULT_SESSION_EXPIRATION = 60 * 60 * 24 * 7;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded = ["createConnector"];
const getKitConnectWallets = (projectAccessKey, wallets) => {
  localStorage.setItem(LocalStorageKey.ProjectAccessKey, projectAccessKey);
  const connectors = [];
  wallets.forEach(wallet => {
    const {
        createConnector
      } = wallet,
      metaProperties = _objectWithoutPropertiesLoose(wallet, _excluded);
    const walletProperties = _extends({}, metaProperties);
    const createConnectorOverride = config => {
      const connector = createConnector();
      const res = connector(config);
      res._wallet = _extends({}, walletProperties);
      return res;
    };
    connectors.push(createConnectorOverride);
  });
  return connectors;
};
const isEmailValid = email => {
  return /^\S+@\S+\.\S{2,}$/.test(email);
};
const nativeTokenInfos = {
  1: {
    name: 'Ethereum',
    symbol: 'ETH',
    logoURI: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
    decimals: 18,
    blockExplorerName: 'Etherscan',
    blockExplorerUrl: 'https://etherscan.io'
  },
  5: {
    name: 'Goerli',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
    blockExplorerName: 'Etherscan (Goerli)',
    blockExplorerUrl: 'https://goerli.etherscan.io'
  },
  10: {
    name: 'Optimism',
    symbol: 'OP',
    logoURI: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png',
    decimals: 18,
    blockExplorerName: 'Etherscan (Optimism)',
    blockExplorerUrl: 'https://optimistic.etherscan.io'
  },
  56: {
    name: 'BNB',
    symbol: 'BNB',
    logoURI: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
    decimals: 18,
    blockExplorerName: 'BscScan',
    blockExplorerUrl: 'https://bscscan.com'
  },
  100: {
    name: 'Gnosis',
    symbol: 'GNO',
    logoURI: 'https://assets.coingecko.com/coins/images/662/small/logo_square_simple_300px.png',
    decimals: 18,
    blockExplorerUrl: 'https://gnosisscan.io',
    blockExplorerName: 'Gnosis Scan'
  },
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
    logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
    decimals: 18,
    blockExplorerName: 'Polyscan',
    blockExplorerUrl: 'https://polygonscan.com'
  },
  1101: {
    name: 'Polygon zkEVM',
    symbol: 'ETH',
    logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
    decimals: 18,
    blockExplorerName: 'PolygonScan',
    blockExplorerUrl: 'https://zkevm.polygonscan.com'
  },
  42161: {
    name: 'Arbitrum',
    symbol: 'ARB',
    logoURI: 'https://assets.coingecko.com/asset_platforms/images/33/small/arbitrum-one.png',
    decimals: 18,
    blockExplorerName: 'Arbiscan',
    blockExplorerUrl: 'https://arbiscan.io'
  },
  43114: {
    name: 'Avalanche',
    symbol: 'AVAX',
    logoURI: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
    decimals: 18,
    blockExplorerName: 'Snowtrace',
    blockExplorerUrl: 'https://snowtrace.io'
  },
  80001: {
    name: 'Mumbai',
    symbol: 'MATIC',
    logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
    decimals: 18,
    blockExplorerName: 'Polyscan (Mumbai)',
    blockExplorerUrl: 'https://mumbai.polygonscan.com'
  }
};
const getChainIdList = () => {
  return Object.keys(nativeTokenInfos).map(chainId => parseInt(chainId));
};
const defaultNativeTokenInfo = (chainId, wagmiChains) => {
  const foundChain = wagmiChains.find(chain => chain.id === chainId);
  if (foundChain) {
    var _foundChain$blockExpl, _foundChain$blockExpl2;
    return {
      name: foundChain.name,
      symbol: foundChain.nativeCurrency.symbol,
      decimals: foundChain.nativeCurrency.decimals,
      logoURI: nativeTokenInfos[1].logoURI,
      blockExplorerName: (_foundChain$blockExpl = foundChain.blockExplorers) == null ? void 0 : _foundChain$blockExpl.default.name,
      blockExplorerUrl: (_foundChain$blockExpl2 = foundChain.blockExplorers) == null ? void 0 : _foundChain$blockExpl2.default.url
    };
  }
  return;
};
const getNativeTokenInfoByChainId = (chainId, wagmiChains) => {
  return nativeTokenInfos[chainId] || defaultNativeTokenInfo(chainId, wagmiChains) || nativeTokenInfos[1];
};

// https://medium.com/@rivoltafilippo/typing-react-context-to-avoid-an-undefined-default-value-2c7c5a7d5947

const createGenericContext = () => {
  // Create a context with a generic parameter or undefined
  const genericContext = /*#__PURE__*/React.createContext(undefined);

  // Check if the value provided to the context is defined or throw an error
  const useGenericContext = () => {
    const contextIsDefined = React.useContext(genericContext);
    if (!contextIsDefined) {
      throw new Error("useGenericContext must be used within a Provider");
    }
    return contextIsDefined;
  };
  return [useGenericContext, genericContext.Provider];
};
const getModalPositionCss = position => {
  switch (position) {
    case 'top-right':
      return {
        top: '0px',
        right: '0px'
      };
    case 'top-left':
      return {
        top: '0px',
        left: '0px'
      };
    case 'top-center':
      return {
        top: '0px'
      };
    case 'bottom-right':
      return {
        bottom: '0px',
        right: '0px'
      };
    case 'bottom-left':
      return {
        bottom: '0px',
        left: '0px'
      };
    case 'bottom-center':
      return {
        bottom: '0px'
      };
    case 'middle-right':
      return {
        right: '0px'
      };
    case 'middle-left':
      return {
        left: '0px'
      };
    case 'center':
    default:
      return {};
  }
};
const getChainColor = (chainId, mode = 'light') => {
  switch (chainId) {
    case 1:
      return mode === 'light' ? '#abf' : '#abf';
    case 137:
      return mode === 'light' ? '#c7a6ff' : '#c7a6ff';
    case 42161:
      return mode === 'light' ? '#52A7E6' : '#52A7E6';
    case 10:
      return mode === 'light' ? '#DB3132' : '#DB3132';
    case 56:
      return mode === 'light' ? '#CB9C1D' : '#EEB445';
    case 43114:
      return mode === 'light' ? '#E84142' : '#E84142';
    case 100:
      return mode === 'light' ? '#00193C' : '#D8E8FF';
    case 5:
      return mode === 'light' ? '#A77A00' : '#FFA700';
    case 80001:
      return mode === 'light' ? '#D68828' : '#FFA700';
    default:
      return mode === 'light' ? '#abf' : '#abf';
  }
};
const getChainBGColor = (chainId, mode = 'light') => {
  switch (chainId) {
    case 1:
      return mode === 'light' ? '#132362' : '#132362';
    case 137:
      return mode === 'light' ? '#350881' : '#350881';
    case 42161:
      return mode === 'light' ? '#EDF7FF' : '#0C3754';
    case 10:
      return mode === 'light' ? '#FFEAE9' : '#390B0C';
    case 56:
      return mode === 'light' ? '#FFE8AB' : '#554018';
    case 43114:
      return mode === 'light' ? '#FBDFDF' : '#390B0C';
    case 100:
      return mode === 'light' ? '#D8E8FF' : '#00193C';
    case 5:
      return mode === 'light' ? '#FFD871' : '#554018';
    case 80001:
      return mode === 'light' ? '#FFE8CD' : '#554018';
    default:
      return mode === 'light' ? '#132362' : '#132362';
  }
};
function walletClientToSigner(walletClient) {
  var _chain$contracts;
  const {
    account,
    chain,
    transport
  } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: (_chain$contracts = chain.contracts) == null || (_chain$contracts = _chain$contracts.ensRegistry) == null ? void 0 : _chain$contracts.address
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}
function publicClientToProvider(publicClient) {
  var _chain$contracts2;
  const {
    chain,
    transport
  } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: (_chain$contracts2 = chain.contracts) == null || (_chain$contracts2 = _chain$contracts2.ensRegistry) == null ? void 0 : _chain$contracts2.address
  };
  if (transport.type === 'fallback') return new providers.FallbackProvider(transport.transports.map(({
    value
  }) => new providers.JsonRpcProvider(value == null ? void 0 : value.url, network)));
  return new providers.JsonRpcProvider(transport.url, network);
}
const signEthAuthProof = async walletClient => {
  const proofInformation = localStorage.getItem(LocalStorageKey.EthAuthProof);
  // if proof information was generated and saved upon wallet connection, use that
  if (proofInformation) {
    const _proof = JSON.parse(proofInformation);
    return _proof;
  }

  // generate a new proof
  const proofSettingsFromStorage = localStorage.getItem(LocalStorageKey.EthAuthSettings);
  if (!proofSettingsFromStorage) {
    throw new Error('No ETHAuth settings found');
  }
  const proofSettings = JSON.parse(proofSettingsFromStorage);
  const walletAddress = walletClient.account.address;
  const proof = new Proof();
  proof.address = walletAddress;
  proof.claims.app = proofSettings.app || 'app';
  proof.claims.ogn = proofSettings.origin;
  proof.claims.n = proofSettings.nonce;
  proof.setExpiryIn(proofSettings.expiry ? Math.max(proofSettings.expiry, 200) : DEFAULT_SESSION_EXPIRATION);
  const typedData = proof.messageTypedData();
  typedData.domain.verifyingContract;
  const signer = walletClientToSigner(walletClient);
  const signature = await signer._signTypedData(typedData.domain, typedData.types, typedData.message);
  proof.signature = signature;
  const ethAuth = new ETHAuth();
  const proofString = await ethAuth.encodeProof(proof, true);
  return {
    typedData,
    proofString
  };
};
const validateEthProof = async (walletClient, publicClient, proof) => {
  const walletAddress = walletClient.account.address;
  const ethAuth = new ETHAuth();
  const decodedProof = await ethAuth.decodeProof(proof.proofString, true);
  const provider = publicClientToProvider(publicClient);
  const isValid = await sequence.utils.isValidTypedDataSignature(walletAddress, proof.typedData, decodedProof.signature, provider);
  return isValid;
};
const getNetworkConfigAndClients = chainID => {
  const network = networks[chainID];
  if (!network) {
    throw 'invalid network';
  }
  const projectAccessKey = localStorage.getItem(LocalStorageKey.ProjectAccessKey) || undefined;
  const metadataClient = new SequenceMetadata('https://metadata.sequence.app', projectAccessKey);
  const indexerClient = new SequenceIndexer(indexerURL(network.name), projectAccessKey);
  const apiClient = new SequenceAPIClient('https://api.sequence.app', projectAccessKey);
  return {
    network,
    metadataClient,
    indexerClient,
    apiClient
  };
};
const ConnectWalletContent = props => {
  const {
    isConnected
  } = useAccount();
  const {
    theme
  } = useTheme$1();
  const {
    config = {}
  } = props;
  const {
    signIn = {}
  } = config;
  const {
    showEmailInput = defaultSignInOptions.showEmailInput,
    socialAuthOptions = defaultSignInOptions.socialAuthOptions,
    walletAuthOptions = defaultSignInOptions.walletAuthOptions
  } = signIn;
  const {
    openConnectModal,
    setOpenConnectModal
  } = props;
  const [email, setEmail] = useState('');
  const {
    connectors: baseConnectors,
    connect
  } = useConnect();
  /* @ts-ignore-next-line */
  const connectors = baseConnectors.filter(c => !!(c != null && c._wallet));
  const [showExtendedList, setShowExtendedList] = useState(false);
  const mockConnector = connectors.find(connector => {
    return connector._wallet.id === 'mock';
  });
  const emailConnector = connectors.find(c => c._wallet.id === 'email');
  const walletConnectors = connectors.filter(connector => {
    const foundOption = walletAuthOptions.find(authOption => authOption === connector._wallet.id);
    return !!foundOption;
  }).sort((a, b) => {
    return walletAuthOptions.indexOf(a._wallet.id) - walletAuthOptions.indexOf(b._wallet.id);
  });
  const socialAuthConnectors = connectors.filter(connector => {
    const foundOption = socialAuthOptions.find(authOption => authOption === connector._wallet.id);
    return !!foundOption;
  }).sort((a, b) => {
    return socialAuthOptions.indexOf(a._wallet.id) - socialAuthOptions.indexOf(b._wallet.id);
  });
  walletConnectors.length > 4;
  const onChangeEmail = ev => {
    /* @ts-ignore-next-line */
    setEmail(ev.target.value);
  };
  useEffect(() => {
    if (isConnected && openConnectModal) {
      setOpenConnectModal(false);
    }
  }, [isConnected, openConnectModal]);
  const onConnect = connector => {
    if (signIn.useMock && mockConnector) {
      connect({
        connector: mockConnector
      });
      return;
    }
    if (connector._wallet.id === 'email') {
      const email = prompt('Auto-email login, please specify the email address:');
      localStorage.setItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY, email || '');
    }
    if (connector._wallet.id === 'metamask' && typeof window !== 'undefined') {
      var _window;
      const isMetamaskFound = !!((_window = window) != null && (_window = _window.ethereum) != null && _window._metamask);
      if (!isMetamaskFound) {
        window.open('https://metamask.io/download/');
        return;
      }
    }
    connect({
      connector
    });
  };
  const onConnectInlineEmail = e => {
    e.preventDefault();
    if (signIn.useMock && mockConnector) {
      connect({
        connector: mockConnector
      });
      return;
    }
    if (emailConnector) {
      localStorage.setItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY, email);
      connect({
        connector: emailConnector
      });
    }
  };
  if (showExtendedList) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
      as: "button",
      position: "absolute",
      style: {
        top: '20px'
      },
      onClick: () => setShowExtendedList(false),
      className: clickable
    }, /*#__PURE__*/React.createElement(ChevronLeftIcon, null)), /*#__PURE__*/React.createElement(ExtendedWalletList, {
      connectors: walletConnectors,
      onConnect: onConnect
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Banner, {
    config: config
  }), /*#__PURE__*/React.createElement(Box, {
    marginTop: "5"
  }, emailConnector && showEmailInput && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: onConnectInlineEmail
  }, /*#__PURE__*/React.createElement(TextInput
  /* @ts-ignore-next-line */, {
    onChange: onChangeEmail,
    value: email,
    name: "email",
    placeholder: "Enter email",
    "data-1p-ignore": true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: !isEmailValid(email),
    marginTop: "4",
    width: "full",
    label: "Continue",
    rightIcon: ChevronRightIcon
  }))), socialAuthConnectors.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, emailConnector && showEmailInput && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    style: {
      marginBottom: '-4px'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    color: "backgroundSecondary"
  })), /*#__PURE__*/React.createElement(Box, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "small",
    color: "text50"
  }, "or sign in via"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: "3",
    gap: "2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }, socialAuthConnectors.map(connector => {
    const Logo = theme === 'dark' ? connector._wallet.monochromeLogoDark : connector._wallet.monochromeLogoLight;
    return /*#__PURE__*/React.createElement(Card, {
      key: connector._wallet.id,
      className: clickable,
      justifyContent: "center",
      alignItems: "center",
      onClick: () => onConnect(connector),
      aspectRatio: "1/1",
      style: {
        width: `calc(25% - ${vars.space[2]})`
      }
    }, /*#__PURE__*/React.createElement(Box, {
      className: walletLogoContainer,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(Logo, null)));
  }))), walletConnectors.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, (emailConnector && showEmailInput || socialAuthConnectors.length > 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    style: {
      marginBottom: '-4px'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    color: "backgroundSecondary"
  })), /*#__PURE__*/React.createElement(Box, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "small",
    color: "text50"
  }, "or select a wallet"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: "3",
    gap: "2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }, walletConnectors.map(connector => {
    const Logo = theme === 'dark' ? connector._wallet.logoDark || connector._wallet.logoDark : connector._wallet.logoLight || connector._wallet.logoLight;
    return /*#__PURE__*/React.createElement(Card, {
      key: connector._wallet.id,
      className: clickable,
      justifyContent: "center",
      alignItems: "center",
      onClick: () => onConnect(connector),
      aspectRatio: "1/1",
      style: {
        width: `calc(25% - ${vars.space[2]})`
      }
    }, /*#__PURE__*/React.createElement(Box, {
      className: walletLogoContainer,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(Logo, null)));
  })))));
};
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
const SequenceLogo = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fill: "none"
    },
    id: "svg1316",
    version: "1.1",
    viewBox: "0 0 396 396"
  }, props), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,38)",
    id: "g1256",
    clipPath: "url(#clip0_5_131)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "g1254",
    clipPath: "url(#clip1_5_131)"
  }, /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "#111111"
    },
    id: "path1232",
    d: "M 0,67.5049 V 250.165 c 0,37.282 30.1402,67.505 67.32,67.505 h 261.36 c 37.18,0 67.32,-30.223 67.32,-67.505 V 67.5049 C 396,30.223 365.86,0 328.68,0 H 67.32 C 30.1402,0 0,30.223 0,67.5049 Z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint0_linear_5_13"
    },
    id: "path1234",
    d: "M 0,67.5049 V 250.165 c 0,37.282 30.1402,67.505 67.32,67.505 h 261.36 c 37.18,0 67.32,-30.223 67.32,-67.505 V 67.5049 C 396,30.223 365.86,0 328.68,0 H 67.32 C 30.1402,0 0,30.223 0,67.5049 Z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint1_linear_5_131"
    },
    id: "path1236",
    d: "m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint2_linear_5_131)"
    },
    id: "path1238",
    d: "m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint3_linear_5_131)"
    },
    id: "path1240",
    d: "m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint4_linear_5_131)"
    },
    id: "path1242",
    d: "m 98.9999,238.126 c 0,-10.965 -8.8648,-19.854 -19.8,-19.854 -10.9352,0 -19.8,8.889 -19.8,19.854 0,10.966 8.8648,19.855 19.8,19.855 10.9352,0 19.8,-8.889 19.8,-19.855 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint5_linear_5_131)"
    },
    id: "path1244",
    d: "m 336.6,158.835 c 0,-10.965 -8.865,-19.854 -19.8,-19.854 -10.935,0 -19.8,8.889 -19.8,19.854 0,10.965 8.865,19.855 19.8,19.855 10.935,0 19.8,-8.89 19.8,-19.855 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint6_linear_5_131)"
    },
    id: "path1246",
    d: "m 336.6,158.835 c 0,-10.965 -8.865,-19.854 -19.8,-19.854 -10.935,0 -19.8,8.889 -19.8,19.854 0,10.965 8.865,19.855 19.8,19.855 10.935,0 19.8,-8.89 19.8,-19.855 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint7_linear_5_131)"
    },
    id: "path1248",
    d: "M 316.8,59.5632 H 158.4 c -10.935,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.865,19.8544 19.8,19.8544 h 158.4 c 10.935,0 19.8,-8.8892 19.8,-19.8544 0,-10.9653 -8.865,-19.8544 -19.8,-19.8544 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint8_linear_5_131)"
    },
    id: "path1250",
    d: "M 316.8,218.272 H 158.4 c -10.935,0 -19.8,8.889 -19.8,19.854 0,10.966 8.865,19.855 19.8,19.855 h 158.4 c 10.935,0 19.8,-8.889 19.8,-19.855 0,-10.965 -8.865,-19.854 -19.8,-19.854 z"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "url(#paint9_linear_5_131)"
    },
    id: "path1252",
    d: "M 237.6,138.981 H 79.2 c -10.9352,0 -19.8,8.889 -19.8,19.854 0,10.965 8.8648,19.855 19.8,19.855 h 158.4 c 10.935,0 19.8,-8.89 19.8,-19.855 0,-10.965 -8.865,-19.854 -19.8,-19.854 z"
  }))), /*#__PURE__*/React.createElement("defs", {
    id: "defs1314"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "318",
    x2: "198",
    y1: "4.0585401e-05",
    x1: "198",
    id: "paint0_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1258",
    stopColor: "#1D273D"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1260",
    stopColor: "#0D0F13",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "63",
    x2: "92.5",
    y1: "99",
    x1: "65.5",
    id: "paint1_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1263",
    stopColor: "#4462FE"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1265",
    stopColor: "#7D69FA",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "97.591103",
    x2: "96.137703",
    y1: "99.291199",
    x1: "62.879902",
    id: "paint2_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1268",
    stopColor: "#3757FD"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1270",
    stopColor: "#6980FA",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "97.591103",
    x2: "96.137703",
    y1: "99.291199",
    x1: "62.879902",
    id: "paint3_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1273",
    stopColor: "#2447FF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1275",
    stopColor: "#6980FA",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "223.5",
    x2: "91.5",
    y1: "251.5",
    x1: "65",
    id: "paint4_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1278",
    stopColor: "#BC3EE6"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1280",
    stopColor: "#D972F1",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "146",
    x2: "329.5",
    y1: "172",
    x1: "305",
    id: "paint5_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1283",
    stopColor: "#29BDFF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1285",
    stopColor: "#96E7FB",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "176.772",
    x2: "334.56699",
    y1: "178.418",
    x1: "300.17999",
    id: "paint6_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1288",
    stopColor: "#23BBFF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1290",
    stopColor: "#85E7FF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "60",
    x2: "317.5",
    y1: "99",
    x1: "154.5",
    id: "paint7_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1293",
    stopColor: "#23BBFF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1295",
    stopColor: "#85E7FF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "218",
    x2: "312.5",
    y1: "258",
    x1: "156",
    id: "paint8_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1298",
    stopColor: "#2447FF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1300",
    stopColor: "#6980FA",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    gradientUnits: "userSpaceOnUse",
    y2: "139",
    x2: "235.5",
    y1: "179",
    x1: "86.000099",
    id: "paint9_linear_5_131"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "stop1303",
    stopColor: "#6634FF"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "stop1305",
    stopColor: "#9C6DFF",
    offset: "1"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5_131"
  }, /*#__PURE__*/React.createElement("rect", {
    style: {
      fill: "#ffffff"
    },
    y: "0",
    x: "0",
    id: "rect1308",
    height: "317.67001",
    width: "396"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip1_5_131"
  }, /*#__PURE__*/React.createElement("rect", {
    style: {
      fill: "#ffffff"
    },
    y: "0",
    x: "0",
    id: "rect1311",
    height: "317.67001",
    width: "396"
  })))));
};
const [useAnalyticsContext, AnalyticsContextProvider] = createGenericContext();
const [useConnectModalContext, ConnectModalContextProvider] = createGenericContext();
const [useThemeContext, ThemeContextProvider] = createGenericContext();
const [useWalletConfigContext, WalletConfigContextProvider] = createGenericContext();
const THEMES = {
  dark: 'dark',
  light: 'light'
};
const KitProvider = props => {
  const {
    config,
    children
  } = props;
  const {
    defaultTheme = 'dark',
    signIn = {},
    position = 'center',
    displayedAssets: displayedAssetsSetting = [],
    ethAuth = {},
    disableAnalytics = false
  } = config;
  const defaultAppName = signIn.projectName || 'app';
  const {
    expiry = DEFAULT_SESSION_EXPIRATION,
    app = defaultAppName,
    origin = location.origin,
    nonce
  } = ethAuth;
  const {
    projectName
  } = signIn;
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const [theme, setTheme] = useState(defaultTheme || THEMES.dark);
  const [modalPosition, setModalPosition] = useState(position);
  const [displayedAssets, setDisplayedAssets] = useState(displayedAssetsSetting);
  const [analytics, setAnalytics] = useState();
  const {
    address,
    isConnected
  } = useAccount();
  const setupAnalytics = projectAccessKey => {
    const s = sequence.initWallet(projectAccessKey);
    const sequenceAnalytics = s.client.analytics;
    setAnalytics(sequenceAnalytics);
  };
  useEffect(() => {
    if (!isConnected) {
      analytics == null || analytics.reset();
      return;
    }
    if (address) {
      analytics == null || analytics.identify(address.toLowerCase());
    }
  }, [analytics, address, isConnected]);
  const poweredBySequenceOnClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://sequence.xyz');
    }
  };
  useEffect(() => {
    const projectAccessKey = localStorage.getItem(LocalStorageKey.ProjectAccessKey) || '';
    if (!disableAnalytics) {
      setupAnalytics(projectAccessKey);
    }
  }, []);
  useEffect(() => {
    if (theme !== defaultTheme) {
      setTheme(defaultTheme);
    }
  }, [defaultTheme]);
  useEffect(() => {
    if (modalPosition !== position) {
      setModalPosition(position);
    }
  }, [position]);

  // Write data in local storage for retrieval in connectors
  useEffect(() => {
    // Theme
    // TODO: set the sequence theme once it is added to connect options
    if (typeof theme === 'object') ;else {
      localStorage.setItem(LocalStorageKey.Theme, theme);
    }
    // EthAuth
    // note: keep an eye out for potential race-conditions, though they shouldn't occur.
    // If there are race conditions, the settings could be a function executed prior to being passed to wagmi
    localStorage.setItem(LocalStorageKey.EthAuthSettings, JSON.stringify({
      expiry,
      app,
      origin,
      nonce
    }));
  }, [theme, ethAuth]);
  useEffect(() => {
    setDisplayedAssets(displayedAssets);
  }, [displayedAssetsSetting]);
  return /*#__PURE__*/React.createElement(ThemeContextProvider, {
    value: {
      theme,
      setTheme,
      position: modalPosition,
      setPosition: setModalPosition
    }
  }, /*#__PURE__*/React.createElement(ConnectModalContextProvider, {
    value: {
      setOpenConnectModal,
      openConnectModalState: openConnectModal
    }
  }, /*#__PURE__*/React.createElement(WalletConfigContextProvider, {
    value: {
      setDisplayedAssets,
      displayedAssets
    }
  }, /*#__PURE__*/React.createElement(AnalyticsContextProvider, {
    value: {
      setAnalytics,
      analytics
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "kit-provider"
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    root: "#kit-provider",
    scope: "kit",
    theme: theme
  }, /*#__PURE__*/React.createElement(AnimatePresence, null, openConnectModal && /*#__PURE__*/React.createElement(Modal, {
    scroll: false,
    backdropColor: "backgroundBackdrop",
    size: "sm",
    contentProps: {
      style: _extends({
        maxWidth: '364px'
      }, getModalPositionCss(position))
    },
    onClose: () => setOpenConnectModal(false)
  }, /*#__PURE__*/React.createElement(Box, {
    padding: "4",
    className: walletContent
  }, /*#__PURE__*/React.createElement(Box, {
    justifyContent: "center",
    color: "text100",
    alignItems: "center",
    fontWeight: "medium",
    style: {
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(Text, null, "Sign in ", projectName ? `to ${projectName}` : '')), /*#__PURE__*/React.createElement(ConnectWalletContent, _extends({
    openConnectModal: openConnectModal,
    setOpenConnectModal: setOpenConnectModal
  }, props)), /*#__PURE__*/React.createElement(Box, {
    onClick: poweredBySequenceOnClick,
    className: clickable,
    gap: "1",
    marginTop: "2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: "small",
    color: "text100"
  }, "Powered by Sequence"), /*#__PURE__*/React.createElement(Box, {
    height: "5",
    width: "5"
  }, /*#__PURE__*/React.createElement(SequenceLogo, null)))))))), children))));
};
const useOpenConnectModal = () => {
  const {
    setOpenConnectModal,
    openConnectModalState
  } = useConnectModalContext();
  return {
    setOpenConnectModal,
    openConnectModalState
  };
};
const useTheme = () => {
  const {
    setTheme,
    theme,
    position,
    setPosition
  } = useThemeContext();
  return {
    setTheme,
    theme,
    position,
    setPosition
  };
};
const useWalletSettings = () => {
  const {
    setDisplayedAssets,
    displayedAssets
  } = useWalletConfigContext();
  return {
    displayedAssets,
    setDisplayedAssets
  };
};

export { AnalyticsContextProvider, ConnectModalContextProvider, DEFAULT_SESSION_EXPIRATION, KitProvider, LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_PREFIX_ETHAUTH_PROOF, LOCAL_STORAGE_PREFIX_ETHAUTH_SETTINGS, LOCAL_STORAGE_PREFIX_PROJECT_ACCESS_KEY, LOCAL_STORAGE_PREFIX_SETTINGS, LOCAL_STORAGE_PREFIX_THEME, LocalStorageKey, THEMES, ThemeContextProvider, WalletConfigContextProvider, createGenericContext, defaultNativeTokenInfo, defaultSignInOptions, getChainBGColor, getChainColor, getChainIdList, getKitConnectWallets, getModalPositionCss, getNativeTokenInfoByChainId, getNetworkConfigAndClients, isEmailValid, nativeTokenInfos, publicClientToProvider, signEthAuthProof, useAnalyticsContext, useConnectModalContext, useOpenConnectModal, useTheme, useThemeContext, useWalletConfigContext, useWalletSettings, validateEthProof, walletClientToSigner };
