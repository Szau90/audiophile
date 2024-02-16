import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import store from "../store";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <section className={manrope.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
    </Provider>
  );
}
