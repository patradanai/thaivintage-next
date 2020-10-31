import React from "react";
import Button from "../button";
import Tyrography from "../tyrography";

const image = "/images/complete.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(5),
    widith: 100,
    height: 100,
    [theme.breakpoints.up("sm")]: {
      widith: 100,
      height: 200
    }
  },
  button: {
    margin: theme.spacing(3)
  }
}));

const Complete = props => {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  };
  return (
    <div className={classes.root}>
      <img src={image} className={classes.image} />
      <Tyrography variant="h5">Revervation Complete</Tyrography>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleClose}
      >
        Close
      </Button>
    </div>
  );
};

export default Complete;
