import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    color: "#ee9200",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.1
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "1px solid currentColor",
      color: "white"
    }
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

const AppCatagory = props => {
  const { classes } = props;

  const images = [
    {
      url: "/images/Ala5.png",
      title: "A LA CARTE MENU",
      width: "40%",
      link: "/menus/ALACARTE.pdf"
    },
    {
      url: "/images/Drink2.png",
      title: "Drinking",
      width: "20%",
      link: "/menus/DRINKING.pdf"
    },
    {
      url: "/images/set3.png",
      title: "LUNCH&SET MENU",
      width: "40%",
      link: "/menus/SETMENU.pdf"
    },
    {
      url: "/images/kidset3.png",
      title: "KIDS MENU",
      width: "38%",
      link: "/menus/KIDSMENU.pdf"
    },
    {
      url: "/images/dessert1.png",
      title: "DESSERT MENU",
      width: "38%",
      link: "/menus/DESSERTS&COFFEE.pdf"
    },
    {
      url: "/images/tea1.png",
      title: "COFFEE AND TEA",
      width: "24%",
      link: "/menus/DESSERTS&COFFEE.pdf"
    }
  ];
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map(payload => (
          <ButtonBase
            key={payload.title}
            className={classes.imageWrapper}
            style={{
              width: payload.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${payload.url})`
              }}
            />

            <a href={payload.link}>
              <div className={classes.imageBackdrop} />
            </a>
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {payload.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
};

AppCatagory.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppCatagory);
