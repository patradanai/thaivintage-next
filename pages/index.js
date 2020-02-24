import React from "react";
import Layout from "../components/layout";
import Hero from "../components/view/header/hero";
import Intro from "../components/view/intro/appintro";
import Catagory from "../components/view/catagory/appcatagory";

const Home = props => {
  return (
    <div>
      <Layout>
        <Hero />
        <Intro />
        <Catagory />
      </Layout>
      <style jsx>{``}</style>
    </div>
  );
};

export default Home;
