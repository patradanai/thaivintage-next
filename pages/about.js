import React from "react";
import Layout from "../components/layout";
import HeroSub from "../components/herosub";
import About from "../components/about/index";
const AboutPage = () => {
  return (
    <Layout>
      <HeroSub title="About" />
      <About />
    </Layout>
  );
};

export default AboutPage;
