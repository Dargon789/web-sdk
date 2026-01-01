import { ConnectConfig, createConfig } from '@0xsequence/connect'
import { ChainId } from '@0xsequence/network'
import { zeroAddress } from 'viem'
import { cookieStorage, createStorage } from 'wagmi'

  export function App() {
    const projectAccessKey = "AQAAAAAAAJbd_5JOcE50AqglZCtvu51YlGI"
    const waasConfigKey = "eyJwcm9qZWN0SWQiOjM4NjIxLCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=" // Pass in your waasConfigKey
    const enableConfirmationModal = true // change to your preference
    const googleClientId = 'YOUR_GOOGLE_CLIENT_ID' // Google Client ID
    const appleClientId = 'YOUR_APPLE_CLIENT_ID' // Apple Client ID
    const appleRedirectURI = 'YOUR_APP_SCHEME://auth' // Apple Redirect URI
    const walletConnectProjectId = 'walletConnectProjectId' // Pass in your WalletConnect Project ID

    const config = createConfig('waas', {
      projectAccessKey,
      position: "center",
      defaultTheme: "dark",
      signIn: {
        projectName: "sequence.app",
      },
      defaultChainId: 421614,
      chainIds: [1, 10, 40, 41, 56, 97, 100, 137, 143, 1101, 1284, 1287, 1868, 1946, 1993, 5031, 6252, 8333, 8453, 10143, 19011, 24101, 28802, 33111, 33139, 40875, 42161, 42170, 42793, 43113, 43114, 50312, 80002, 81457, 84532, 127823, 128123, 421614, 660279, 747474, 5042002, 11155111, 11155420, 21000000, 37084624, 168587773, 1482601649, 37714555429],
      appName: "sequence.app",
      email: true,
      waasConfigKey,
      google: {
        clientId: googleClientId
      },
      apple: {
        clientId: appleClientId,
        redirectURI: appleRedirectURI
      },
      walletConnect: {
        projectId: walletConnectProjectId
      },
      coinbase: true,
      metaMask: true,
      wagmiConfig: {
        multiInjectedProviderDiscovery: true,
      },
      enableConfirmationModal
    })

export const isDebugMode = false

const projectAccessKey = 'AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI'

export const sponsoredContractAddresses: Record<number, `0x${string}`> = {
  [ChainId.ARBITRUM_NOVA]: '0x37470dac8a0255141745906c972e414b1409b470'
}

export const connectConfig: ConnectConfig = {
  projectAccessKey,
  defaultTheme: 'dark',
  signIn: {
    projectName: 'Sequence Web SDK Demo',
    useMock: isDebugMode
  },
  displayedAssets: [
    // Native token
    {
      contractAddress: zeroAddress,
      chainId: ChainId.ARBITRUM_NOVA
    },
    // Native token
    {
      contractAddress: zeroAddress,
      chainId: ChainId.ARBITRUM_SEPOLIA
    },
    // Waas demo NFT
    {
      contractAddress: '0x0d402c63cae0200f0723b3e6fa0914627a48462e',
      chainId: ChainId.ARBITRUM_NOVA
    },
    // Waas demo NFT
    {
      contractAddress: '0x0d402c63cae0200f0723b3e6fa0914627a48462e',
      chainId: ChainId.ARBITRUM_SEPOLIA
    },
    // Skyweaver assets
    {
      contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
      chainId: ChainId.POLYGON
    }
  ],
  readOnlyNetworks: [ChainId.OPTIMISM]
}

export const config = createConfig('waas', {
  ...connectConfig,
  appName: 'Sequence Web SDK Demo',
  chainIds: [
    ChainId.ARBITRUM_NOVA,
    ChainId.ARBITRUM_SEPOLIA,
    ChainId.POLYGON,
    ChainId.IMMUTABLE_ZKEVM,
    ChainId.IMMUTABLE_ZKEVM_TESTNET,
    ChainId.BASE_SEPOLIA,
    ChainId.BASE
  ],
  defaultChainId: ChainId.ARBITRUM_NOVA,

  // Waas specific config options
  waasConfigKey: 'eyJwcm9qZWN0SWQiOjE2ODE1LCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=',
  enableConfirmationModal: false,

  guest: true,
  email: true,
  google: {
    clientId: '970987756660-35a6tc48hvi8cev9cnknp0iugv9poa23.apps.googleusercontent.com'
  },
  epic: {
    authUrl: 'http://localhost:8787/login'
  },
  apple: {
    clientId: 'com.horizon.sequence.waas',
    redirectURI: 'http://localhost:3000'
  },
  walletConnect: {
    projectId: 'c65a6cb1aa83c4e24500130f23a437d8'
  },

  wagmiConfig: {
    // Next.js doesn't support localStorage in SSR
    storage: createStorage({ storage: cookieStorage }),
    ssr: true
  }
   return (
      <SequenceConnect config={config}>
        <MyPage />
      </SequenceConnect>
    );
}
