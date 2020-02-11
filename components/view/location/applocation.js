import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";
import Google from "../../googleMap";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
    marginBottom: theme.spacing(1)
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
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  },
  mapSrc: {
    width: "100%",
    height: 400,
    position: "relative",
    display: "block",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
});

const AppLocation = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.mapSrc}>
          <Google
            googleMapURL="https://maps.googleapis.com/maps/api/js?key="
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </Container>
    </section>
  );
};

AppLocation.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppLocation);
