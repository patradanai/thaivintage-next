import React, { useState, useEffect, createContext } from "react";
import router from "next/router";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "../button";
import { mainListItems } from "./listitem";
import { loadDBFirebase } from "../../lib/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
export const { Provider, Consumer } = createContext();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="www.thaivintagewhitchurch.co.uk">
        Thai Vintage Whitchurch
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#e48c4ee0"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  button: {
    color: theme.palette.common.black,
    border: "2px solid #000",
    "&:hover": {
      backgroundColor: "white"
    }
  },
  imageDraw: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [flagCheck, setFlagCheck] = useState(false);
  const [authGoogle, setAuthGoogle] = useState(false);
  const [flagDraw, setFlagDraw] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const clientId =
    "468408425438-obcg1t2i7tbgh1089avslst12k5bs7vt.apps.googleusercontent.com";
  const GOOGLE_API_KEY = "AIzaSyBhH47ELc9gEXMVlraQSskoV7X7_01Dn_Q";
  const url = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const rule = "https://www.googleapis.com/auth/calendar";

  // Check Auth from Firebase Login
  useEffect(() => {
    if (authUser !== null && flagCheck === true) {
    } else if (authUser === null && flagCheck === true) {
      router.push("/login");
    }
  }, [authUser, flagCheck]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    let firebase = await loadDBFirebase();
    firebase.auth().onAuthStateChanged(result => {
      if (result) {
        setAuthUser(result.email);
        setFlagCheck(true);
        setLoading(true);
      } else {
        setAuthUser(null);
        setFlagCheck(true);
      }
    });
  };

  const userSignOut = async () => {
    let firebase = await loadDBFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => setAuthUser(null))
      .catch(err => console.log(err.message));
  };

  // Check Auth from Google Calendar

  useEffect(() => {
    initClient();
  }, []);

  const initClient = () => {
    gapi.load("client", () => {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY,
          clientId: clientId,
          discoveryDocs: url,
          scope: rule
        })
        .then(() => {
          // Listening Auth
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateStatus);
          setLoadingGoogle(true);
          // Check Auth
          if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
            handleAuthSignIn();
          } else {
            setAuthGoogle(true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  const updateStatus = data => {
    setAuthGoogle(data);
  };

  const handleAuthSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleAuthSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setFlagDraw(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setFlagDraw(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <Button className={classes.button} onClick={userSignOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {flagDraw ? (
          <div className={classes.imageDraw}>
            <img
              src="/images/thaivintagewhitchurch-logo.png"
              alt="thaivintagewhitchurch-logo"
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                marginTop: "-20%"
              }}
            ></img>
            <Typography
              variant="h5"
              color="secondary"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Welcome
            </Typography>
            {authUser}
          </div>
        ) : null}
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            spacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {loading ? (
              authUser ? (
                loadingGoogle ? (
                  authGoogle ? (
                    props.children
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        border: "1px solid",
                        padding: 20
                      }}
                    >
                      <h2>Please Login Google Autherication</h2>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: 50 }}
                        onClick={handleAuthSignIn}
                      >
                        Login Google
                      </Button>
                    </div>
                  )
                ) : (
                  <CircularProgress disableShrink />
                )
              ) : (
                <h5 style={{ textAlign: "center" }}>Redirect to Login page </h5>
              )
            ) : (
              <CircularProgress disableShrink />
            )}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
