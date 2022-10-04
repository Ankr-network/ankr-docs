import "../styles/global.css";
import "nextra-theme-docs/style.css";
import { enableAdditionalLanguagesInPrism } from "../components/prism"

enableAdditionalLanguagesInPrism();

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default App;
