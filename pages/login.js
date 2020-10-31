import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { loadDBFirebase } from "../lib/firebase";
import Router from "next/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link href="/">Thai Vintage Whitchurch</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const logo = "/images/thaivintagewhitchurch-logo.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  logo: {
    margin: theme.spacing(3)
  }
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [token, setToken] = useState();
  const handleLogin = async event => {
    event.preventDefault();
    let firebase = await loadDBFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setToken(response);
      })
      .then(() => Router.push("/dashboard"))
      .catch(error => {
        setMessage(error.message);
        console.log(error);
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link href="/">
          <img
            src={logo}
            className={classes.logo}
            alt="thaivintagewhitchurch"
          />
        </Link>
        <Typography component="h1" variant="h5">
          Thai Vintage Whitchurch
        </Typography>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <h1>{(token, message)}</h1>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;
