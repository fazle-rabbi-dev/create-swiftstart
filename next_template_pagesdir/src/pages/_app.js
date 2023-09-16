import "@/styles/global-style.css";
import "@/styles/fonts.css";
import LoadingBar from "react-top-loading-bar";
import RouteLoader from "@/components/Test"

export default function MyApp({ Component, pageProps }) {
  return(
      <>
        <RouteLoader />
        <Component {...pageProps} />
      </>
    )
}