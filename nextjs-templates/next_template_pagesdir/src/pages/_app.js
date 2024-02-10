import Head from "next/head";
import { Toaster } from "react-hot-toast";

import MetaData from "@/components/MetaData";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <MetaData />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
