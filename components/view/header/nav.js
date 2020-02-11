import React from "react";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Appbar from "../../appbar";
import Toolbar, { styles as toolbarStyles } from "../../toolbar";

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
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 14,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  logo: {
    weight: 25,
    height: 25,
    backgroundImage: `url(${logo})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <Appbar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}></div>
        <div className={classes.right}>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href="/premium-themes/onepirate/sign-in/"
          >
            {"MENUS"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href="/premium-themes/onepirate/sign-up/"
          >
            {"LOCATION"}
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"GALLARY"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"ABOUT"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"CONTACT US"}
            </Link>
          </Link>
        </div>
        <div className={classes.placeholder} />
      </Toolbar>
    </Appbar>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
