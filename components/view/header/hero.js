import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../../tyrography";
import HeroLayout from "../header/herolayout";
import Button from "../../button";
import ModalRev from "../../reservation/modalrev";
import { Grid } from "@material-ui/core";

const backgroundImage = "/images/1492020.png";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    color: "#000",
    fontSize: 15,
    minWidth: 300,
    marginLeft: 25,
    marginRight: 25,
    textAlign: "center",
    backgroundColor: "#ff671f",
    border: "1px solid #ff671f",
    "&:hover": {
      border: "1px solid #ff671f",
      backgroundColor: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
      width: 80
    }
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
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
  },
  welcomeTitle: {
    fontSize: 100,
    fontWeight: 400,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      marginBottom: 0,
      fontSize: 30
    }
  },
  bottomHeader: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  }
});

const Hero = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <HeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <div className={clsx(classes.welcomeTitle, "welcome")}>Welcome to</div>
        <Typography
          color="inherit"
          align="center"
          variant="subtitle1"
          className={classes.title}
        >
          THAI VINTAGE Whitchurch
        </Typography>
        <div className={classes.bottomHeader}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <ModalRev
                name="Book A Table"
                class={classes.button}
                other='size="large" color="secondary" variant="contained" component="a"'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
              >
                Take Away
              </Button>
            </Grid>
          </Grid>
        </div>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
      </HeroLayout>
      <style jsx>{`
        .welcome {
          font-family: "Great Vibes", cursive;
          text-align: center;
          margin-top: 50px;
          margin-bottom: 0px;
          font-weight: 400;
          color: #ee9200;
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
