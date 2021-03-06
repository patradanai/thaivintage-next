import React from "react";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Appbar from "../../appbar";
import Toolbar, { styles as toolbarStyles } from "../../toolbar";
import Button from "../../button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import ModalRev from "../../reservation/modalrev";

const logo = "/images/thaivintagewhitchurch-logo.png";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  leftLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginLeft: theme.spacing(2),
    padding: 5,
  },
  rightLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginRight: theme.spacing(3),
    backgroundColor: "#fff",
    border: "1px solid #ff671f",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      marginRight: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: "#ff671f",
    },
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  menuButton: {},
  imageSrc: {
    weight: 100,
    height: 80,
    [theme.breakpoints.down("sm")]: {
      weight: 100,
      height: 50,
    },
  },
});

const Nav = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Appbar position="fixed">
      <Container>
        <Toolbar className={classes.toolbar}>
          <Hidden smDown>
            <div className={classes.left}>
              <Link href="/menu">
                <Button
                  color="primary"
                  size="small"
                  className={classes.leftLink}
                >
                  {"MENUS"}
                </Button>
              </Link>
              <Link href="#location">
                <Button
                  color="primary"
                  size="small"
                  className={classes.leftLink}
                >
                  {"LOCATION"}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  color="primary"
                  size="small"
                  className={classes.leftLink}
                >
                  {"GALLERY"}
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  color="primary"
                  size="small"
                  className={classes.leftLink}
                >
                  {"ABOUT"}
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  color="primary"
                  size="small"
                  className={classes.leftLink}
                >
                  {"CONTACT US"}
                </Button>
              </Link>
            </div>
          </Hidden>
          <Link href="/">
            <img
              src={logo}
              className={classes.imageSrc}
              alt="thaivintagewhitchurch"
            />
          </Link>
          <div className={classes.right}>
            {/* <ModalRev name="Book a Table" class={classes.rightLink} /> */}
            <Button
              variant="contained"
              size="small"
              className={classes.rightLink}
              // href="https://thaivintagewhitchurch.setmore.com"
              onClick={() =>
                window.open(
                  `https://thaivintagewhitchurch.setmore.com`,
                  "Popup",
                  "location,status,scrollbars,resizable,width=600, height=600"
                )
              }
            >
              Book a Table
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.rightLink}
              href="https://thai-vintage-restaurant.square.site/"
            >
              Take AWAY
            </Button>
          </div>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <a
                  onClick={() => {
                    Router.push("/menu");
                  }}
                >
                  MENUS
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="#location">
                  <a style={{ textDecoration: "none", color: "#000" }}>
                    LOCATION
                  </a>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  onClick={() => {
                    Router.push("/gallery");
                  }}
                >
                  GALLERY
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  onClick={() => {
                    Router.push("/about");
                  }}
                >
                  ABOUT
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="#contact">
                  <a style={{ textDecoration: "none", color: "#000" }}>
                    CONTACT US
                  </a>
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <div className={classes.placeholder} />
        </Toolbar>
      </Container>
    </Appbar>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
