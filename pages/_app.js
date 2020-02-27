import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Thai Vintage Whitchurch</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withGA("UA-159054916-1", Router)(MyApp);
