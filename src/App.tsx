import React from 'react';
import NavBar from "./components/NavBar";
import {RootRouter} from "./routes";
import {RouterProvider} from "react-router-dom";
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {localhost} from "wagmi/chains";
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";
import {MetaMaskConnector} from '@wagmi/connectors/metaMask'
import {ConnectKitProvider} from "connectkit";
import {useColorMode, useColorModeValue} from "@chakra-ui/react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins;
    }
`;

const {chains, provider, webSocketProvider} = configureChains(
    [localhost],
    [jsonRpcProvider({rpc: (chain) => ({http: `https://localhost:8545`})}),],
)

// Set up client
const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({chains}),
    ],
    provider,
    webSocketProvider,
})

function App() {
    const {colorMode} = useColorMode();
    const connectButtonColor = useColorModeValue('#E2E8F0', '#2D3748');

    return (
        <WagmiConfig client={client}>
            <GlobalStyle/>
            <ConnectKitProvider
                customTheme={{
                    "--ck-connectbutton-background": connectButtonColor,
                    "--ck-font-family": 'Pretendard',
                    "--ck-font-size": '1em',
                    "--ck-border-radius": 12,
                }}
                mode={colorMode}
                options={{
                    overlayBlur: 3,
                    disclaimer: (
                        <>
                            By connecting your wallet you agree to the{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://en.wikipedia.org/wiki/Terms_of_service"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://en.wikipedia.org/wiki/Privacy_policy"
                            >
                                Privacy Policy
                            </a>
                        </>
                    ),
                }
                }>
                <RouterProvider router={RootRouter}/>
            </ConnectKitProvider>
        </WagmiConfig>
    );
}

export default App;
