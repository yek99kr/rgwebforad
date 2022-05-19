import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

// function Progress() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

// const renderMethod = module.hot ? React.render : React.hydrate;
// renderMethod(
//   <BrowserRouter>
//     <RoutersController data={data} routes={routes} />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} router={router} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
