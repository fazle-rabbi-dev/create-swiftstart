import "@/styles/global-style.css";
import "@/styles/fonts.css";
import LoadingBar from "react-top-loading-bar";
import RouteLoader from "@/components/RouteLoader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  return (
    <>
      <LoadingBar
        color="#823bed"
        progress={progress}
        // waitingTime={400}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      <RouteLoader />
      <Component {...pageProps} />
    </>
  );
}
