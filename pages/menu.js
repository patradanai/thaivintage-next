import React from "react";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core/styles";
import HeroSub from "../components/herosub";
import Recommend from "../components/menu/recommend";
const styles = theme => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const Menu = props => {
  return (
    <div>
      <Layout>
        <HeroSub title="Menu" />
        <Recommend />
      </Layout>
      <style jsx>{``}</style>
    </div>
  );
};

export default withStyles(styles)(Menu);
