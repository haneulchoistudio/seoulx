import { AppProps } from "next/app";
import Layout from "~/components/layout";
import "~/styles/index.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
