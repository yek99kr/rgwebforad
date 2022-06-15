import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script> */}
      {/* <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      > */}
      {/* <Menu /> */}
      <Component {...pageProps} key={router.asPath} router={router} />
      {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
