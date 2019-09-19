import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import Main from "../components/Main";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* -=-=-=- START OF COMPONENTS -=-=-=- */}
    <div id="home">
      <Menu />
      <Main />
    </div>
    {/* -=-=-=- END OF COMPONENTS -=-=-=- */}
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      #home {
        display: flex;
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default Home;
