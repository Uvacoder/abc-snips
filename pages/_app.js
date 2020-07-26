import Head from "components/head";
import NProgress from "components/nprogress";
import "toastify-js/src/toastify.css";
import "assets/raster2.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <NProgress></NProgress>

      <Component {...pageProps} />

      <style jsx global>
        {`
          :root {
            --font: "Inter", sans-serif;
          }

          body {
            font-family: var(--font);
            font-weight: 400;
          }

          .flex {
            display: flex;
          }

          .align-center {
            align-items: center;
          }

          .justify-center {
            justify-content: center;
          }

          .align-end {
            align-items: flex-end;
          }

          .justify-between {
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
}

export default App;
