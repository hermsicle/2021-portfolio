import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../layout/layout";
import {
  Landing,
  Projects,
  Technologies,
  About,
  Contact,
} from "../components/";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hermans Portfolio</title>
        <meta name="description" content="Welcome to my page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <Projects />
        <Technologies />
        <About />

        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
