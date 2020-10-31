import React from "react";
import Layout from "../components/layout";
import HeroSub from "../components/herosub";
import Gallery from "../components/gallery";

const GallaryPage = () => (
  <div>
    <Layout>
      <HeroSub title="Gallery" />
      <Gallery />
    </Layout>
    <style jsx>{``}</style>
  </div>
);

export default GallaryPage;
