import Head from "components/head";
import NProgress from "components/nprogress";
import "toastify-js/src/toastify.css";
import "assets/raster2.css";
import "styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <NProgress />

      <Component {...pageProps} />
    </>
  );
}

export default App;
