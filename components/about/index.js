import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "../tyrography";

const logo = "/images/thaivintagewhitchurch-logo.png";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    backgroundColor: "#f09751"
  },
  container: {
    display: "flex",
    backgroundColor: "#f3f3f3",
    flexDirection: "column",
    padding: 50,
    marginTop: -20,
    marginBottom: -20
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      textAlign: "center"
    }
  },
  body: {
    fontSize: 35,
    margin: theme.spacing(3),
    fontFamily: "Cinzin",
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      fontSize: 20
    }
  }
});

const About = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Typography variant="h2">
            <span className={classes.title}>Thai Vintage Whitchurch</span>
          </Typography>
          <Typography variant="body1">
            <span className={classes.body}>
              &emsp;&emsp; Thai cuisine is the most likable and preferred
              cuisine. Thai chefs strive towards three main important features
              in their food i.e. balance, variety, and detail. Yes, with this
              three important feature our restaurant{" "}
              <span>“Thai Vintage Whitchurch”</span> also prepare and make sure
              the food should look as good as it tastes. The chefs there also
              add few traits that complement the Thai food such as colors,
              texture, appearance, smell. This makes the food more unique and
              spicy flavor of Thai food remains one of the top priority. Also,
              they do not forget to have ingredients with strong medical
              properties that are also added to the food.
            </span>
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="thaivintagewhitchurch-logo"
              style={{ width: 120, height: 120, margin: 30 }}
            />
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default withStyles(styles)(About);
