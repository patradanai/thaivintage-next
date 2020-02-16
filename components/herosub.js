import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "../components/tyrography";

const backgroundImage = "/images/1491917.png";

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    minHeight: 200,
    [theme.breakpoints.up("sm")]: {
      minHeight: 300,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backgroundhero: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1
  },
  imagebackground: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: 400,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(15),
    color: theme.palette.common.black,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      fontSize: 30
    }
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    zIndex: -1
  }
});

const HeroSub = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <img src={backgroundImage} style={{ display: "None" }} />
      <div className={classes.backdrop} />
      <div className={clsx(classes.backgroundhero, classes.imagebackground)} />
      <Container className={classes.container}>
        <Typography align="center" variant="h2" className={classes.title}>
          {props.title}
        </Typography>
      </Container>
    </section>
  );
};

HeroSub.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroSub);
