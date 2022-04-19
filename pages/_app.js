import "../styles/globals.css";
import { Loader, useProgress } from "@react-three/drei";

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

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      {/* <Loader /> */}
    </div>
  );
}

export default MyApp;
