import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../../tyrography";
import HeroLayout from "../header/herolayout";
import Button from "../../button";

const backgroundImage = "/images/1492020.png";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    color: "#000",
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
      width: 80,
      height: 50
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
      fontSize: 40
    }
  },
  welcomeTitle: {
    fontSize: 100,
    fontWeight: 400,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      marginBottom: 0,
      fontSize: 45
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
        <div style={{ display: "inline" }}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/premium-themes/onepirate/sign-up/"
          >
            Book A Table
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/premium-themes/onepirate/sign-up/"
          >
            Take Away
          </Button>
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
