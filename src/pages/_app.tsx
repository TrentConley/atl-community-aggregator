import type { AppProps } from "next/app";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
