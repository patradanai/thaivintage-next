import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";

const background = "/images/1491928.png";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden",
    alignItems: "center",
    position: "relative"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  },
  backgroundoffer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    opacity: 0.8
  }
});

const AppOffer = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <div className={classes.backgroundoffer} />
      <Container className={classes.container}></Container>
    </section>
  );
};

AppOffer.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppOffer);
