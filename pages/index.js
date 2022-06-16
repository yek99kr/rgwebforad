import HomePage from "../components/HomePage";
import Head from "../components/Head";

export default function Home({ router }) {
  return (
    <div>
      <Head />
      <HomePage router={router} />
    </div>
  );
}
