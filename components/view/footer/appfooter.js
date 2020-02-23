import React from "react";
import Proptype from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";
import Link from "next/Link";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#f09751",
    height: "100%"
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex"
  },
  iconsWrapper: {
    height: 50
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
});

const AppFooter = props => {
  const { classes } = props;
  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid
              className={classes.iconsWrapper}
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 15,
                marginTop: 10
              }}
            >
              Copyright © Thai Vintage Whitchurch {new Date().getFullYear()}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              className={classes.iconsWrapper}
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 15,
                marginTop: 10
              }}
            >
              <Link href="/login">
                <a style={{ textDecoration: "none", color: "black" }}>
                  Managed by Patradanai
                </a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

AppFooter.prototype = {
  classes: Proptype.object.isRequired
};

export default withStyles(styles)(AppFooter);
