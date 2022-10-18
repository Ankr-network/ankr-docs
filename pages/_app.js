import "styles/global.css";
import "nextra-theme-docs/style.css";
import { useGtm } from "hooks";
import { enableAdditionalLanguagesInPrism } from "components"

enableAdditionalLanguagesInPrism();

function App({ Component, pageProps }) {
  useGtm(pageProps);
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default App;
