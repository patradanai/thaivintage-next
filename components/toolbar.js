import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
  root: {
    display: "flex",
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 100
    }
  }
});

export default withStyles(styles)(Toolbar);
