import React from "react";
import Layout from "../components/layout";
import Hero from "../components/view/header/hero";
import Intro from "../components/view/intro/appintro";
import Catagory from "../components/view/catagory/appcatagory";
import { loadDBFirebase } from "../lib/firebase";

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

// Home.getInitialProps = async () => {
//   let firebase = await loadDBFirebase();
//   let db = firebase.firestore();
//   let result = db
//     .collection("reservation")
//     .limit(10)
//     .get()
//     .then(snapshot => {
//       console.log(snapshot);
//       let data = [];
//       snapshot.forEach(doc => {
//         console.log(doc.id, "=>", doc.data());
//       });
//     })
//     .catch(err => {});
//   return { data: result };
// };

export default Home;
