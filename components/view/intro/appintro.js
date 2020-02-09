import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  }
});

const AppIntro = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <div className={classes.item}>1</div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>2</div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>3</div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

AppIntro.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppIntro);
