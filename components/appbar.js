import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    opacity: 0.5,
    textAlign: "center"
  }
});

const AppBar = props => {
  return <MuiAppBar elevation={0} position="static" {...props}></MuiAppBar>;
};

export default withStyles(styles)(AppBar);
