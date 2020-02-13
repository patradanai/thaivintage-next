import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const backgroundImage = "/images/16.png";

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      minHeight: 400,
      maxHeight: 1300
    }
  },
  backdrop: {},
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backgroundhero: {
    backgroundImage: `url(${backgroundImage})`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1
  },
  title: {
    fontSize: 100,
    fontWeight: 400,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      fontSize: 30
    }
  }
});

const HeroSub = props => {
  const { classes } = props;
  return (
    <section className={clsx(classes.root, classes.backgroundhero)}>
      <img src={backgroundImage} style={{ display: "None" }} />
      <Container className={classes.container}></Container>
    </section>
  );
};

HeroSub.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroSub);
