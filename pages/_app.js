import Head from "components/head";
import NProgress from "components/nprogress";
import "toastify-js/src/toastify.css";

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
        `}
      </style>
    </>
  );
}

export default App;
