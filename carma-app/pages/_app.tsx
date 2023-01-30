import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import DataStoreProvider from "../components/DataStoreContext";
import { theme } from "../styles/theme";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalStyles from "../styles/GlobalStyles";

// eslint-disable-next-line
import "swiper/css/bundle";

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
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </DataStoreProvider>
  );
};

export default App;
