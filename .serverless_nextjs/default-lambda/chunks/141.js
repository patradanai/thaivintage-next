exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 86141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ layout_Dashboard; }
});

// UNUSED EXPORTS: Consumer, Provider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(57966);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(41120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(75834);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(39636);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js
var Box = __webpack_require__(28889);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(45258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(28358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(62822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(55517);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(43832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(41749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(89659);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(48884);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(89875);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(52543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/button.js



const styles = theme => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: "none",
    "&:active, &:focus": {
      boxShadow: "none"
    }
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13)
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16)
  }
});

/* harmony default export */ var components_button = ((0,withStyles/* default */.Z)(styles)(Button/* default */.Z));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(50998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(46869);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(95757);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(96837);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Dashboard.js
var Dashboard = __webpack_require__(50442);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CalendarTodayTwoTone.js
var CalendarTodayTwoTone = __webpack_require__(83905);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Assignment.js
var Assignment = __webpack_require__(44152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/dashboard/listitem.js












const mainListItems = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
    href: "/dashboard",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.Z, {
      button: true,
      children: [/*#__PURE__*/jsx_runtime.jsx(ListItemIcon/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime.jsx(Dashboard/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime.jsx(ListItemText/* default */.Z, {
        primary: "Management Reserved"
      })]
    })
  }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
    href: "/dashboard/calendar",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.Z, {
      button: true,
      children: [/*#__PURE__*/jsx_runtime.jsx(ListItemIcon/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime.jsx(CalendarTodayTwoTone/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime.jsx(ListItemText/* default */.Z, {
        primary: "Calendars Reserved"
      })]
    })
  })]
});
const secondaryListItems = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime.jsx(ListSubheader/* default */.Z, {
    inset: true,
    children: "Saved reports"
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.Z, {
    button: true,
    children: [/*#__PURE__*/jsx_runtime.jsx(ListItemIcon/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime.jsx(Assignment/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime.jsx(ListItemText/* default */.Z, {
      primary: "Current month"
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.Z, {
    button: true,
    children: [/*#__PURE__*/jsx_runtime.jsx(ListItemIcon/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime.jsx(Assignment/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime.jsx(ListItemText/* default */.Z, {
      primary: "Last quarter"
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.Z, {
    button: true,
    children: [/*#__PURE__*/jsx_runtime.jsx(ListItemIcon/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime.jsx(Assignment/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime.jsx(ListItemText/* default */.Z, {
      primary: "Year-end sale"
    })]
  })]
});
// EXTERNAL MODULE: ./lib/firebase.js
var lib_firebase = __webpack_require__(75808);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(95477);
;// CONCATENATED MODULE: ./components/dashboard/layout.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const {
  Provider,
  Consumer
} = /*#__PURE__*/(0,react.createContext)();

function Copyright() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ["Copyright © ", /*#__PURE__*/jsx_runtime.jsx(Link/* default */.Z, {
      color: "inherit",
      href: "www.thaivintagewhitchurch.co.uk",
      children: "Thai Vintage Whitchurch"
    }), " ", new Date().getFullYear(), "."]
  });
}

const drawerWidth = 240;
const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed

  },
  toolbarIcon: _objectSpread({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px"
  }, theme.mixins.toolbar),
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
function layout_Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = react.useState(true);
  const {
    0: authUser,
    1: setAuthUser
  } = (0,react.useState)(null);
  const {
    0: flagCheck,
    1: setFlagCheck
  } = (0,react.useState)(false);
  const {
    0: authGoogle,
    1: setAuthGoogle
  } = (0,react.useState)(false);
  const {
    0: flagDraw,
    1: setFlagDraw
  } = (0,react.useState)(true);
  const {
    0: loading,
    1: setLoading
  } = (0,react.useState)(false);
  const {
    0: loadingGoogle,
    1: setLoadingGoogle
  } = (0,react.useState)(false);
  const clientId = "468408425438-obcg1t2i7tbgh1089avslst12k5bs7vt.apps.googleusercontent.com";
  const GOOGLE_API_KEY = "AIzaSyBhH47ELc9gEXMVlraQSskoV7X7_01Dn_Q";
  const url = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const rule = "https://www.googleapis.com/auth/calendar"; // Check Auth from Firebase Login

  (0,react.useEffect)(() => {
    if (authUser !== null && flagCheck === true) {} else if (authUser === null && flagCheck === true) {
      router.default.push("/login");
    }
  }, [authUser, flagCheck]);
  (0,react.useEffect)(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    let firebase = await (0,lib_firebase/* loadDBFirebase */.T)();
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
    let firebase = await (0,lib_firebase/* loadDBFirebase */.T)();
    firebase.auth().signOut().then(() => setAuthUser(null)).catch(err => console.log(err.message));
  }; // Check Auth from Google Calendar


  (0,react.useEffect)(() => {
    initClient();
  }, []);

  const initClient = () => {
    gapi.load("client", () => {
      gapi.client.init({
        apiKey: GOOGLE_API_KEY,
        clientId: clientId,
        discoveryDocs: url,
        scope: rule
      }).then(() => {
        // Listening Auth
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateStatus);
        setLoadingGoogle(true); // Check Auth

        if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
          handleAuthSignIn();
        } else {
          setAuthGoogle(true);
        }
      }).catch(err => {
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime.jsx(AppBar/* default */.Z, {
      position: "absolute",
      className: clsx_default()(classes.appBar, open && classes.appBarShift),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Toolbar/* default */.Z, {
        className: classes.toolbar,
        children: [/*#__PURE__*/jsx_runtime.jsx(IconButton/* default */.Z, {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: clsx_default()(classes.menuButton, open && classes.menuButtonHidden),
          children: /*#__PURE__*/jsx_runtime.jsx(Menu/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime.jsx(Typography/* default */.Z, {
          component: "h1",
          variant: "h6",
          color: "inherit",
          noWrap: true,
          className: classes.title
        }), /*#__PURE__*/jsx_runtime.jsx(components_button, {
          className: classes.button,
          onClick: userSignOut,
          children: "Logout"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Drawer/* default */.ZP, {
      variant: "permanent",
      classes: {
        paper: clsx_default()(classes.drawerPaper, !open && classes.drawerPaperClose)
      },
      open: open,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: classes.toolbarIcon,
        children: /*#__PURE__*/jsx_runtime.jsx(IconButton/* default */.Z, {
          onClick: handleDrawerClose,
          children: /*#__PURE__*/jsx_runtime.jsx(ChevronLeft/* default */.Z, {})
        })
      }), flagDraw ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classes.imageDraw,
        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/images/thaivintagewhitchurch-logo.png",
          alt: "thaivintagewhitchurch-logo",
          style: {
            width: 120,
            height: 120,
            borderRadius: "50%",
            overflow: "hidden",
            marginTop: "-20%"
          }
        }), /*#__PURE__*/jsx_runtime.jsx(Typography/* default */.Z, {
          variant: "h5",
          color: "secondary",
          style: {
            marginTop: 20,
            marginBottom: 20
          },
          children: "Welcome"
        }), authUser]
      }) : null, /*#__PURE__*/jsx_runtime.jsx(Divider/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(List/* default */.Z, {
        children: mainListItems
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
      className: classes.content,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: classes.appBarSpacer
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/jsx_runtime.jsx(Grid/* default */.Z, {
          container: true,
          spacing: 3,
          style: {
            display: "flex",
            justifyContent: "center"
          },
          children: loading ? authUser ? loadingGoogle ? authGoogle ? props.children : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              textAlign: "center",
              border: "1px solid",
              padding: 20
            },
            children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
              children: "Please Login Google Autherication"
            }), /*#__PURE__*/jsx_runtime.jsx(components_button, {
              variant: "contained",
              color: "secondary",
              style: {
                marginTop: 50
              },
              onClick: handleAuthSignIn,
              children: "Login Google"
            })]
          }) : /*#__PURE__*/jsx_runtime.jsx(CircularProgress/* default */.Z, {
            disableShrink: true
          }) : /*#__PURE__*/jsx_runtime.jsx("h5", {
            style: {
              textAlign: "center"
            },
            children: "Redirect to Login page "
          }) : /*#__PURE__*/jsx_runtime.jsx(CircularProgress/* default */.Z, {
            disableShrink: true
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Box/* default */.Z, {
          pt: 4,
          children: /*#__PURE__*/jsx_runtime.jsx(Copyright, {})
        })]
      })]
    })]
  });
}

/***/ })

};
;