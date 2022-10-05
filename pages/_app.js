import "../styles/global.css";
import "nextra-theme-docs/style.css";
import { useGtm } from "../src/hooks/useGtm";
import { enableAdditionalLanguagesInPrism } from "../components/prism"

enableAdditionalLanguagesInPrism();

function App({ Component, pageProps }) {
  useGtm(pageProps);
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default App;
