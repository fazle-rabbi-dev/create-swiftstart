import { Html, Head, Main, NextScript } from "next/document";
import MetaData from "@/components/MetaData"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MetaData />
      </Head>
      <body>
        <main className="app">
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
