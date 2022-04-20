import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RGW Experiments</title>
        <meta name="description" content="RGW Experiments" />
      </Head>

      <HomePage />
    </div>
  );
}
