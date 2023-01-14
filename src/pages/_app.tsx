import { ChakraProvider } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
import type { AppProps } from "next/app";
import "../styles/global.css";

import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const { ToastContainer } = createStandaloneToast();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  );
}
