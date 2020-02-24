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
    overflow: "hidden",
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
      url: "/images/thaivintagewhitchurch-thai-curry.png",
      alt: "thaivintagewhitchurch-thai-curry",
      title: "A LA CARTE MENU",
      width: "40%",
      link: "/menus/ALACARTE.pdf"
    },
    {
      url: "/images/thaivintagewhitchurch-thai-cuisin-drinking.png",
      alt: "thaivintagewhitchurch-thai-cuisin-drinking",
      title: "Drinking",
      width: "30%",
      link: "/menus/DRINKING.pdf"
    },
    {
      url: "/images/thaivintagewhitchurch-thai-cuisin-setmenu.png",
      alt: "thaivintagewhitchurch-thai-cuisin-setmenu",
      title: "LUNCH&SET MENU",
      width: "30%",
      link: "/menus/SETMENU.pdf"
    },
    {
      url: "/images/thaivintagewhitchurch-thai-cuisin-setmenu-kid.png",
      alt: "thaivintagewhitchurch-thai-cuisin-setmenu-kid",
      title: "KIDS MENU",
      width: "38%",
      link: "/menus/KIDSMENU.pdf"
    },
    {
      url: "/images/thaivintagewhitchurch-thai-cuisin-dessert.png",
      alt: "thaivintagewhitchurch-thai-cuisin-dessert",
      title: "DESSERT MENU",
      width: "38%",
      link: "/menus/DESSERTS&COFFEE.pdf"
    },
    {
      url: "/images/thaivintagewhitchurch-thai-cuisin-coffee-tea.png",
      alt: "thaivintagewhitchurch-thai-cuisin-coffee-tea",
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
              // style={{
              //   backgroundImage: `url(${payload.url})`
              // }}
            >
              <img src={payload.url} alt={payload.alt}></img>
            </div>

            <a href={payload.link}>
              <div className={classes.imageBackdrop} />
            </a>
            <div className={classes.imageButton}>
              <a
                style={{ textDecoration: "none", color: "#ee9200" }}
                href={payload.link}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {payload.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </a>
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
