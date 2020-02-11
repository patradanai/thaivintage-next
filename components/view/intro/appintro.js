import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    //overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#f09751 !important",
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden"
    }
  },
  image: {
    pointerEvents: "none",
    position: "absolute",
    opacity: 0.5,
    [theme.breakpoints.up("sm")]: {
      height: "66vh",
      minHeight: 450,
      maxHeight: 1300
    }
  },
  container: {
    display: "flex",
    position: "relative"
  },
  gridStory: {
    backgroundColor: "white"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: "27px"
  },
  title: {
    fontSize: 70,
    fontWeight: 700,
    color: "#000",
    textAlign: "right",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 70
    }
  },
  subtitle: {
    fontSize: 32,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  backdropIntro: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    zIndex: 1
  },
  gridStory: {
    backgroundColor: "#f3f3f3"
  }
});

const AppIntro = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <div className={classes.item}>
                  <img
                    src="/images/Ala5.png"
                    style={{
                      marginTop: "80px",
                      marginBottom: "80px",
                      height: "50vh"
                    }}
                  />
                </div>
              </Grid>
            </Hidden>
            <Grid className={classes.gridStory} item xs={12} sm={6}>
              <div className={classes.item}>
                <div className={clsx(classes.title, "titleStory")}>
                  <div style={{ marginRight: 20 }}>
                    Our <p>Story</p>
                  </div>
                </div>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Thai Vintage Whitchurch
                </Typography>
                <Typography variant="h5" className={classes.item}>
                  Bringing Ancient Thai Food to Whitchurch. We welcome you to
                  the Thai Vintage Restaurant. Tempted by an unrivaled range of
                  authentic & imaginative fusion dishes. Our food is freshly
                  prepared to the highest standards using only the best quality
                  natural, freshest ingredients. No ghee, full fat dairy,
                  processed meats, artificial colours or flavours are used. We
                  only cook with sparing amounts of sunflower & olive oils and
                  only use fresh chicken breast & the best cuts of meat. We are
                  the healthy Thai takeaway!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
        {/* <div className={classes.backdropIntro} /> */}
      </section>
      <style jsx>{`
        .titleStory {
          font-family: "Cinzel", serif;
        }
      `}</style>
    </React.Fragment>
  );
};

AppIntro.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppIntro);
