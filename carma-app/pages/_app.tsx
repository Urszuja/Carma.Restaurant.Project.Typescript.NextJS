//import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import DataStoreProvider from "../components/DataStoreContext";
import theme from "../styles/theme";
import Head from "next/head";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DataStoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Carma Pizza</title>
          <meta name="description" content="best pizza in town" />
          <link rel="icon" href="/Icon.svg" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataStoreProvider>
  );
};

export default App;
