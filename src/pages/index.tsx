import type { NextPage } from "next";
import Layout from "../components/Layout";
// import { useEffect } from "react";

const Home: NextPage = () => {
  
  return (
    <Layout>
      <main>
        <h1 id="homeHeading">Hi!- I&lsquo;m Ashok</h1>
        <hr />
        <div>
          <p>
            From a Computer Science Engineer to a Full stack Web Developer,
            bridged just by the passion to build amazing stuff & the love of
            code
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
