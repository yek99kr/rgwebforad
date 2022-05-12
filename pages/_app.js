import "../styles/globals.css";

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
    </div>
  );
}

export default MyApp;
