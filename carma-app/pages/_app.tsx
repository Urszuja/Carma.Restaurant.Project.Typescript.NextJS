import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import DataStoreProvider from "../components/DataStoreContext";
import { theme } from "../styles/theme";
import Head from "next/head";
import Header from "../components/header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/footer/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DataStoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Carma Pizza</title>
          <meta name="description" content="best pizza in town" />
          <link rel="icon" href="/Icon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap"
            rel="stylesheet"></link>
        </Head>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </DataStoreProvider>
  );
};

export default App;
