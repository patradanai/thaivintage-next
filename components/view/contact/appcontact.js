import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../tyrography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  images: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap"
  },
  imageSrc: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  }
});

const Contact = props => {
  const { classes } = props;

  const images = [
    { url: "/images/facebook.png", title: "facebook" },
    { url: "/images/instagram.png", title: "instagram" },
    { url: "/images/twitter.png", title: "twitter" }
  ];
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <div className={classes.item}>
              <Typography variant="h5">OPENING HOURS</Typography>
              <Typography variant="body">
                Thuesday to Monday : 12:00 - 23:00
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>
              <Typography variant="h5">THAI VINTAGE</Typography>
              <Typography variant="body">Old Mill,</Typography>
              <Typography variant="body">Park Avenue,</Typography>
              <Typography variant="body">Whitchurch,</Typography>
              <Typography variant="body">SY13 1SH, London</Typography>
              <div className={classes.images}>
                {images.map(data => (
                  <div
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${data.url})`,
                      backgroundSize: 48
                    }}
                    key={data.titl}
                  ></div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.item}>
              <Typography variant="h5">CONTACT US</Typography>
              <Typography variant="body">+44 1948 661800</Typography>
              <Typography variant="body">Email</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

Contact.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
