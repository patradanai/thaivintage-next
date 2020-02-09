import React from "react";
import Nav from "../components/view/header/nav";
import Offer from "../components/view/offer/appoffer";
import Footer from "../components/view/footer/appfooter";

const Layout = props => {
  return (
    <React.Fragment>
      <div className="Site">
        <Nav />
        <div className="Site-content">{props.children}</div>
        <Offer />
        <Footer />
      </div>
      <style jsx>{`
        .Site {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        .Site-content {
          flex: 1;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
