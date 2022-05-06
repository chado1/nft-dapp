import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider as WagmiProvider } from "wagmi";
import { WagmiClient } from "./utils/wagmiClient";
import NavBar from "@components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiProvider client={WagmiClient}>
        <NavBar />
        <Component {...pageProps} />
      </WagmiProvider>
    </ChakraProvider>
  );
}

export default MyApp;
