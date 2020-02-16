import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Typography from "../tyrography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "./card";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    //overflow: "hidden",
    backgroundColor: "#f09751 !important"
  },
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "block",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 50
    }
  },
  menu: {
    display: "block",
    textAlign: "center",
    position: "relative",
    justifyContent: "center"
  },
  item: {
    display: "block",
    position: "relative",
    margin: theme.spacing(0)
  },
  button: {
    height: 60,
    border: "1px solid #000",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1)
    },
    "&:hover": {
      backgroundColor: "#fff"
    }
  }
});

const RecommendMenu = props => {
  const { classes } = props;

  const recommend = [
    {
      image: "/images/Ala1.png",
      title: "Steamed Sea Bass Lime & Chilli",
      details: "Steamed Sea Bass fillet with lime & chilli sauce"
    },
    {
      image: "/images/Ala2.png",
      title: "Steamed Sea Bass with soy sauce",
      details:
        "Soft texture Sea Bass fillets with mellow flavoured. Shitake mushroom, spring onion, ginger and light soy sauce."
    },
    {
      image: "/images/Ala3.png",
      title: "Crispy Sea Bass with Mango salad",
      details: "Crispy fried Sea Bass fillet with Thai herbs and mango salad."
    },
    {
      image: "/images/Ala4.png",
      title: "Lamb cutlets Pad Cha",
      details:
        "with aromatic spice from various Thai herbs (Kra chai, fresh peppercorn, lime leaves) "
    }
  ];

  const listMenu = [
    { name: "SIGNATURE MENU", link: "/menus/SIGNATURE.pdf" },
    { name: "A LA CARTE MENU", link: "/menus/ALACARTE.pdf" },
    { name: "STARTER MENU", link: "/menus/STARTER.pdf" },
    { name: "SET MENU", link: "/menus/SETMENU.pdf" },
    { name: "KID MENU", link: "/menus/KIDSMENU.pdf" },
    { name: "DESSERT&COFFEE MENU", link: "/menus/DESSERTS&COFFEE.pdf" },
    { name: "DRINKING MENU", link: "/menus/DRINKING.pdf" },
    { name: "ALL MENU", link: "/menus/ALLMENU.pdf" }
  ];
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Chef Recommended ...
        </Typography>
        <Grid container spacing={3}>
          {recommend.map((payload, index) => (
            <Grid item sm={3} key={index}>
              <Card
                image={payload.image}
                title={payload.title}
                details={payload.details}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" className={classes.title}>
          Our Menus
        </Typography>
        <div className={classes.menu}>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            orientation="horizontal"
          >
            <Grid container spacing={2}>
              {listMenu.map((payload, index) => (
                <Grid item xs className={classes.item}>
                  <Button
                    variant="outlined"
                    fullWidth
                    className={classes.button}
                    href={payload.link}
                    key={index}
                  >
                    {payload.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </ButtonGroup>
        </div>
      </Container>
    </section>
  );
};

RecommendMenu.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecommendMenu);
