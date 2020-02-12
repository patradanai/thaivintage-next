import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
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

const logo = "/images/logo.png";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1
  },
  leftLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginLeft: theme.spacing(3)
  },
  rightLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginRight: theme.spacing(3),
    backgroundColor: "#fff",
    border: "1px solid #ff671f",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      marginRight: theme.spacing(1)
    },
    "&:hover": {
      backgroundColor: "#ff671f"
    }
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  menuButton: {},
  imageSrc: {
    weight: 100,
    height: 80,
    [theme.breakpoints.down("sm")]: {
      weight: 100,
      height: 50
    }
  }
});

const Nav = props => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Appbar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Hidden smDown>
          <div className={classes.left}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.leftLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"MENUS"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.leftLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"LOCATION"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.leftLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"GALLERY"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.leftLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"ABOUT"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.leftLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"CONTACT US"}
            </Link>
          </div>
        </Hidden>
        <img src={logo} className={classes.imageSrc} />
        <div className={classes.right}>
          <Button variant="contained" className={classes.rightLink}>
            Take away
          </Button>
          <Button variant="contained" className={classes.rightLink}>
            Book a Table
          </Button>
        </div>
        <Hidden smUp>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Hidden>
        <div className={classes.placeholder} />
      </Toolbar>
    </Appbar>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
