import Head from "next/head";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RGW Experiments</title>
        <meta name="description" content="RGW Experiments" />
      </Head>
      <About></About>
    </div>
  );
}
