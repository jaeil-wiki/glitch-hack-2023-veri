import {configureChains, createClient} from 'wagmi'

import {jsonRpcProvider} from "wagmi/providers/jsonRpc";
import {publicProvider} from 'wagmi/providers/public'
import {MetaMaskConnector} from 'wagmi/connectors/metaMask'
import {localhost} from "wagmi/chains";

const {chains, provider, webSocketProvider} = configureChains(
    [localhost],
    [
        jsonRpcProvider({rpc: (chain) => ({http: `https://localhost:8545`})}),
    ]
)

// Set up client
export const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({chains}),
        new MetaMaskConnector({chains})
    ],
    provider,
    webSocketProvider,
})
