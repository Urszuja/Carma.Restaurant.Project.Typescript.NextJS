import "../styles/globals.css";
import type { AppProps } from "next/app";
import DataStoreProvider from "../components/DataStoreContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DataStoreProvider>
      <div id="carma">
        <Component {...pageProps} />
      </div>
    </DataStoreProvider>
  );
};

export default App;
