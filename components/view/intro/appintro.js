import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";

const image = "/images/thaivintagewhitchurch-thai-curry.png";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    //overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#f09751",
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden"
    }
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      marginTop: theme.spacing(3)
    }
  },
  container: {
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: "27px",
    marginBottom: theme.spacing(2)
  },
  title: {
    display: "flex",
    fontSize: 70,
    fontWeight: 700,
    color: "#000",
    justifyContent: "flex-end",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      fontSize: 50
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
            <Grid item xs={12} md={6}>
              <div className={classes.image}>
                <img
                  src={image}
                  alt="thaivintagewhitchurch-thai-curry"
                  style={{
                    arginBottom: "80px"
                  }}
                />
              </div>
            </Grid>
            <Grid className={classes.gridStory} item xs={12} md={6}>
              <div className={classes.item}>
                <div className={classes.title}>
                  <Typography variant="h2">
                    <div className="titleStory" style={{ textAlign: "center" }}>
                      Our <p>Story</p>
                    </div>
                  </Typography>
                </div>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Thai Vintage Whitchurch
                </Typography>
                <Typography variant="h5" className={classes.item}>
                  <pre-line>
                    Bringing Ancient Thai Food to Whitchurch. We welcome you to
                    the Thai Vintage Restaurant. Tempted by an unrivaled range
                    of authentic & imaginative fusion dishes. Our food is
                    freshly prepared to the highest standards using only the
                    best quality natural, freshest ingredients. No ghee, full
                    fat dairy, processed meats, artificial colours or flavours
                    are used. We only cook with sparing amounts of sunflower &
                    olive oils and only use fresh chicken breast & the best cuts
                    of meat. We are the healthy Thai takeaway!
                  </pre-line>
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
