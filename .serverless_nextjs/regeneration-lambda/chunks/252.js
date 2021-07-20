exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 87175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52543);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);



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

/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(styles)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z));

/***/ }),

/***/ 77749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(65988);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(52543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(45258);
;// CONCATENATED MODULE: ./components/appbar.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: "#ffffffeb",
    textAlign: "center"
  }
});

const appbar_AppBar = props => {
  return /*#__PURE__*/jsx_runtime.jsx(AppBar/* default */.Z, _objectSpread({
    elevation: 0,
    position: "static"
  }, props));
};

/* harmony default export */ var appbar = ((0,withStyles/* default */.Z)(styles)(appbar_AppBar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(28358);
;// CONCATENATED MODULE: ./components/toolbar.js



const toolbar_styles = theme => ({
  root: {
    display: "flex",
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 100
    }
  }
});
/* harmony default export */ var toolbar = ((0,withStyles/* default */.Z)(toolbar_styles)(Toolbar/* default */.Z));
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(87175);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17812);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(48884);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 2 modules
var Hidden = __webpack_require__(82598);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js
var Menu_Menu = __webpack_require__(38396);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(85639);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(43832);
// EXTERNAL MODULE: ./components/reservation/modalrev.js + 2 modules
var modalrev = __webpack_require__(46405);
;// CONCATENATED MODULE: ./components/view/header/nav.js
















const logo = "/images/thaivintagewhitchurch-logo.png";

const nav_styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbar_styles(theme).root,
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  leftLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginLeft: theme.spacing(2),
    padding: 5
  },
  rightLink: {
    fontSize: 14,
    color: theme.palette.common.black,
    marginRight: theme.spacing(3),
    backgroundColor: "#fff",
    border: "1px solid #ff671f",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      marginRight: theme.spacing(1)
    },
    "&:hover": {
      backgroundColor: "#ff671f"
    }
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  menuButton: {},
  imageSrc: {
    weight: 100,
    height: 80,
    [theme.breakpoints.down("sm")]: {
      weight: 100,
      height: 50
    }
  }
});

const Nav = props => {
  const {
    classes
  } = props;
  const [anchorEl, setAnchorEl] = react.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/jsx_runtime.jsx(appbar, {
    position: "fixed",
    children: /*#__PURE__*/jsx_runtime.jsx(Container/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(toolbar, {
        className: classes.toolbar,
        children: [/*#__PURE__*/jsx_runtime.jsx(Hidden/* default */.Z, {
          smDown: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: classes.left,
            children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/menu",
              children: /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
                color: "primary",
                size: "small",
                className: classes.leftLink,
                children: "MENUS"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "#location",
              children: /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
                color: "primary",
                size: "small",
                className: classes.leftLink,
                children: "LOCATION"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/gallery",
              children: /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
                color: "primary",
                size: "small",
                className: classes.leftLink,
                children: "GALLERY"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/about",
              children: /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
                color: "primary",
                size: "small",
                className: classes.leftLink,
                children: "ABOUT"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "#contact",
              children: /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
                color: "primary",
                size: "small",
                className: classes.leftLink,
                children: "CONTACT US"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("img", {
            src: logo,
            className: classes.imageSrc,
            alt: "thaivintagewhitchurch"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: classes.right,
          children: [/*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
            variant: "contained",
            size: "small",
            className: classes.rightLink // href="https://thaivintagewhitchurch.setmore.com"
            ,
            onClick: () => window.open(`https://thaivintagewhitchurch.setmore.com`, "Popup", "location,status,scrollbars,resizable,width=600, height=600"),
            children: "Book a Table"
          }), /*#__PURE__*/jsx_runtime.jsx(components_button/* default */.Z, {
            variant: "contained",
            size: "small",
            className: classes.rightLink,
            href: "https://thai-vintage-restaurant.square.site/",
            children: "Take AWAY"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Hidden/* default */.Z, {
          mdUp: true,
          children: [/*#__PURE__*/jsx_runtime.jsx(IconButton/* default */.Z, {
            edge: "start",
            className: classes.menuButton,
            color: "secondary",
            "aria-label": "menu",
            onClick: handleClick,
            children: /*#__PURE__*/jsx_runtime.jsx(Menu/* default */.Z, {})
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Menu_Menu/* default */.Z, {
            id: "simple-menu",
            anchorEl: anchorEl,
            keepMounted: true,
            open: Boolean(anchorEl),
            onClose: handleClose,
            children: [/*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              onClick: handleClose,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                onClick: () => {
                  router.default.push("/menu");
                },
                children: "MENUS"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              onClick: handleClose,
              children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: "#location",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  style: {
                    textDecoration: "none",
                    color: "#000"
                  },
                  children: "LOCATION"
                })
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              onClick: handleClose,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                onClick: () => {
                  router.default.push("/gallery");
                },
                children: "GALLERY"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              onClick: handleClose,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                onClick: () => {
                  router.default.push("/about");
                },
                children: "ABOUT"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              onClick: handleClose,
              children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: "#contact",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  style: {
                    textDecoration: "none",
                    color: "#000"
                  },
                  children: "CONTACT US"
                })
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: classes.placeholder
        })]
      })
    })
  });
};

/* harmony default export */ var nav = ((0,withStyles/* default */.Z)(nav_styles)(Nav));
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(41749);
// EXTERNAL MODULE: ./components/tyrography.js
var tyrography = __webpack_require__(64812);
;// CONCATENATED MODULE: ./components/view/contact/appcontact.js









const appcontact_styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(0, 5),
    marginLeft: theme.spacing(2)
  },
  images: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageSrc: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    '&:hover': {
      opacity: 0.5
    }
  },
  Text: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    lineHeight: 3
  }
});

const Contact = props => {
  const {
    classes
  } = props;
  const images = [{
    url: '/images/facebook.png',
    title: 'facebook',
    link: 'https://www.facebook.com/Thai-Vintage-Whitchurch-Restaurant-100411281542289'
  }, {
    url: '/images/instagram.png',
    title: 'instagram',
    link: ''
  }, {
    url: '/images/twitter.png',
    title: 'twitter',
    link: ''
  }];
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime.jsx(Container/* default */.Z, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 5,
        children: [/*#__PURE__*/jsx_runtime.jsx(Grid/* default */.Z, {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h4",
              align: "center",
              component: "h2",
              children: "OPENING HOURS"
            }), /*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h5",
              align: "center",
              className: classes.Text,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("pre", {
                children: ["Open : Wed - Sunday ", /*#__PURE__*/jsx_runtime.jsx("br", {}), "12.00 pm - 11.00 pm"]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Grid/* default */.Z, {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h4",
              align: "center",
              component: "h2",
              children: "THAI VINTAGE WHITCHURCH"
            }), /*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h5",
              align: "center",
              className: classes.Text,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("pre", {
                children: ["Old Mill, ", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Park Avenue, ", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Whitchurch, ", /*#__PURE__*/jsx_runtime.jsx("br", {}), "SY13 1SH"]
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: classes.images,
              children: images.map((data, index) => /*#__PURE__*/jsx_runtime.jsx("a", {
                href: data.link,
                children: /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: classes.imageSrc,
                  style: {
                    backgroundImage: `url(${data.url})`,
                    backgroundSize: 48
                  }
                }, data.title)
              }, index))
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Grid/* default */.Z, {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h4",
              align: "center",
              children: "CONTACT US"
            }), /*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
              variant: "h5",
              className: classes.Text,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("pre", {
                children: ["+44 1948 661800", /*#__PURE__*/jsx_runtime.jsx("br", {}), "OR", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Email :", /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  href: "mailto:info@thaivintagewhitchurch.co.uk",
                  children: ["info", /*#__PURE__*/jsx_runtime.jsx("br", {}), "@thaivintagewhitchurch.co.uk"]
                })]
              })
            })]
          })
        })]
      })
    })
  });
};

Contact.prototype = {
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var appcontact = ((0,withStyles/* default */.Z)(appcontact_styles)(Contact));
;// CONCATENATED MODULE: ./components/view/offer/appoffer.js








const background = "/images/thaivintagewhitchurch-thai-cuisin-coffee-vegetable.png";

const appoffer_styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden",
    alignItems: "center",
    position: "relative"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "abolute",
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
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  },
  backgroundoffer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: 0.8
  }
});

const AppOffer = props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    id: "contact",
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      className: classes.container,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: classes.backgroundoffer
      }), /*#__PURE__*/jsx_runtime.jsx("img", {
        src: background,
        style: {
          display: "none"
        },
        alt: "thaivintagewhitchurch-thai-cuisin-coffee-vegetable"
      })]
    })
  });
};

AppOffer.prototype = {
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var appoffer = ((0,withStyles/* default */.Z)(appoffer_styles)(AppOffer));
;// CONCATENATED MODULE: ./components/view/footer/appfooter.js










const appfooter_styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#f09751",
    height: "100%"
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex"
  },
  iconsWrapper: {
    height: 50
  },
  icons: {
    display: "flex"
  },
  icon: {
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
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
});

const AppFooter = props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(tyrography/* default */.Z, {
    component: "footer",
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime.jsx(Container/* default */.Z, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Z, {
          item: true,
          xs: 6,
          className: classes.iconsWrapper,
          style: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 15,
            marginTop: 10
          },
          children: ["Copyright \xA9 Thai Vintage Whitchurch ", new Date().getFullYear()]
        }), /*#__PURE__*/jsx_runtime.jsx(Grid/* default */.Z, {
          item: true,
          xs: 6,
          className: classes.iconsWrapper,
          style: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 15,
            marginTop: 10
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/login",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              style: {
                textDecoration: "none",
                color: "black"
              },
              children: "Managed by Patradanai"
            })
          })
        })]
      })
    })
  });
};

AppFooter.prototype = {
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var appfooter = ((0,withStyles/* default */.Z)(appfooter_styles)(AppFooter));
// EXTERNAL MODULE: ./node_modules/react-google-maps/lib/index.js
var lib = __webpack_require__(33458);
;// CONCATENATED MODULE: ./components/googleMap.js




const {
  MarkerWithLabel
} = __webpack_require__(40509);

const MapGoogle = props => {
  return /*#__PURE__*/jsx_runtime.jsx(lib/* GoogleMap */.b6, {
    defaultZoom: 17,
    defaultCenter: {
      lat: 52.9681208,
      lng: -2.6858
    },
    children: /*#__PURE__*/jsx_runtime.jsx(MarkerWithLabel, {
      position: {
        lat: 52.9681208,
        lng: -2.6858
      },
      labelAnchor: new google.maps.Point(0, 0),
      labelStyle: {
        backgroundColor: "yellow",
        fontSize: "20px",
        padding: "16px",
        opacity: "0.5"
      },
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        children: "Thai Vintage Whitchurch"
      })
    })
  });
};

/* harmony default export */ var googleMap = ((0,lib/* withScriptjs */.WS)((0,lib/* withGoogleMap */.OI)(MapGoogle)));
;// CONCATENATED MODULE: ./components/view/location/applocation.js










const applocation_styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#e4c290"
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
  title: {
    marginBottom: theme.spacing(1)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  },
  mapSrc: {
    width: "100%",
    height: 400,
    position: "relative",
    display: "block",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
});

const AppLocation = props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      className: classes.container,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(tyrography/* default */.Z, {
        variant: "h5",
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          id: "location"
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          style: {
            textDecoration: "none",
            color: "black",
            fontSize: 25
          },
          href: "https://www.google.com/maps/place/Thai+Vintage+Whitchurch/@52.9681605,-2.6864069,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbf366d0ce8f023dd!8m2!3d52.9681597!4d-2.6858597",
          children: ">>> Click for Get Direction `Thai Vintage Whitchurch, Old Mill, Park Ave,`"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: classes.mapSrc,
        children: /*#__PURE__*/jsx_runtime.jsx(googleMap, {
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ZlEgybYqVlX6oFQZ5FulqUlMMnyMqjA",
          loadingElement: /*#__PURE__*/jsx_runtime.jsx("div", {
            style: {
              height: `100%`
            }
          }),
          containerElement: /*#__PURE__*/jsx_runtime.jsx("div", {
            style: {
              height: `400px`
            }
          }),
          mapElement: /*#__PURE__*/jsx_runtime.jsx("div", {
            style: {
              height: `100%`
            }
          })
        })
      })]
    })
  });
};

AppLocation.prototype = {
  classes: (prop_types_default()).object.isRequired
};
/* harmony default export */ var applocation = ((0,withStyles/* default */.Z)(applocation_styles)(AppLocation));
// EXTERNAL MODULE: ./node_modules/react-messenger-customer-chat/lib/index.js
var react_messenger_customer_chat_lib = __webpack_require__(24987);
var lib_default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat_lib);
;// CONCATENATED MODULE: ./components/layout.js











const Layout = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "jsx-1105223533" + " " + "Site",
      children: [/*#__PURE__*/jsx_runtime.jsx(nav, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "jsx-1105223533" + " " + "Site-content",
        children: props.children
      }), /*#__PURE__*/jsx_runtime.jsx(appoffer, {}), /*#__PURE__*/jsx_runtime.jsx(appcontact, {}), /*#__PURE__*/jsx_runtime.jsx(applocation, {}), /*#__PURE__*/jsx_runtime.jsx(appfooter, {}), /*#__PURE__*/jsx_runtime.jsx((lib_default()), {
        pageId: "100411281542289",
        appId: "505910363635859"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(style.default, {
      id: "1105223533",
      children: [".Site.jsx-1105223533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".Site-content.jsx-1105223533{-webkit-flex:1;-ms-flex:1;flex:1;}"]
    })]
  });
};

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 46405:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(87175);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(41120);
// EXTERNAL MODULE: ./node_modules/@date-io/date-fns/build/index.js
var build = __webpack_require__(8634);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__(81923);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.cjs.js
var dist_index_cjs = __webpack_require__(79867);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.cjs.js
var auth_dist_index_cjs = __webpack_require__(80513);
;// CONCATENATED MODULE: ./lib/firebase.js



const firebase_loadDBFirebase = () => {
  const config = {
    apiKey: "AIzaSyB1w1R1YpWx1oD_3FjZBwXQgs-S37oS0yA",
    authDomain: "thaivintagewhitchurch.firebaseapp.com",
    databaseURL: "https://thaivintagewhitchurch.firebaseio.com",
    projectId: "thaivintagewhitchurch",
    storageBucket: "thaivintagewhitchurch.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.auth();
  }

  return firebase;
}; // apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DATABASE_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// apiKey: "AIzaSyB1w1R1YpWx1oD_3FjZBwXQgs-S37oS0yA",
// authDomain: "thaivintagewhitchurch.firebaseapp.com",
// databaseURL: "https://thaivintagewhitchurch.firebaseio.com",
// projectId: "thaivintagewhitchurch",
// storageBucket: "thaivintagewhitchurch.appspot.com",
// messagingSenderId: "539053704455"
// EXTERNAL MODULE: ./components/tyrography.js
var tyrography = __webpack_require__(64812);
;// CONCATENATED MODULE: ./components/reservation/complete.js





const complete_image = "/images/complete.png";

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
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

const complete_Complete = props => {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx("img", {
      src: complete_image,
      className: classes.image
    }), /*#__PURE__*/_jsx(Tyrography, {
      variant: "h5",
      children: "Revervation Complete"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "outlined",
      size: "small",
      className: classes.button,
      onClick: handleClose,
      children: "Close"
    })]
  });
};

/* harmony default export */ var complete = ((/* unused pure expression or super */ null && (complete_Complete)));
;// CONCATENATED MODULE: ./components/reservation/modalrev.js



















const modalrev_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    "& > *": {
      margin: 0
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function FormDialog(props) {
  const {
    0: open,
    1: setOpen
  } = useState(false);
  const {
    0: complete,
    1: setComplete
  } = useState(false);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = useState(new Date(Date.now()));
  const {
    0: selectedTime,
    1: setSelectedTime
  } = useState("");
  const {
    0: name,
    1: setName
  } = useState("");
  const {
    0: surename,
    1: setSureName
  } = useState("");
  const {
    0: email,
    1: setEmail
  } = useState("");
  const {
    0: contact,
    1: setContact
  } = useState("");
  const {
    0: people,
    1: setPeople
  } = useState("");
  const {
    0: request,
    1: setRequest
  } = useState("");
  const classes = modalrev_useStyles();
  const times = ["12:00", "12:30", "13:00", "13.30", "14:00", "14:30", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  const handleSavetoDB = async event => {
    event.preventDefault();
    let firebase = await loadDBFirebase();
    let refDoc = firebase.firestore().collection("reservation");
    refDoc.add({
      name: name,
      surename: surename,
      email: email,
      contact: contact,
      date: selectedDate,
      time: selectedTime,
      people: people,
      request: request,
      confirm: "waiting"
    }).then(ref => {
      console.log("Document written with ID: ", ref.id);
      handleComplete();
    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });
  };

  const handleTimeChange = event => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleClickOpen = event => {
    event.preventDefault();
    setOpen(true);
  };

  const handleComplete = () => {
    setComplete(true);
  };

  const handleClose = () => {
    setOpen(false); // setComplete(false);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Button, {
      className: props.class,
      variant: "outlined",
      color: "primary",
      onClick: handleClickOpen,
      children: props.name
    }), /*#__PURE__*/_jsx(Dialog, {
      fullWidth: true,
      maxWidth: "sm",
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: complete ? /*#__PURE__*/_jsx(Complete, {
        close: handleClose
      }) : /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          id: "form-dialog-title",
          children: "BOOK A TABLE"
        }), /*#__PURE__*/_jsxs(DialogContent, {
          dividers: true,
          children: [/*#__PURE__*/_jsx(DialogContentText, {
            children: "A selection of our larger tables is available to book online, however if you would like to reserve a table for six people or more, we recommend calling our reservation team directly. Please call the restaurant on +44 1948 661800"
          }), /*#__PURE__*/_jsxs("form", {
            className: classes.root,
            onSubmit: handleSavetoDB,
            children: [/*#__PURE__*/_jsxs(Grid, {
              container: true,
              spacing: 0,
              children: [/*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 6,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  autoFocus: true,
                  required: true,
                  id: "outlined-required",
                  label: "Name",
                  type: "text",
                  value: name,
                  onChange: event => setName(event.target.value),
                  variant: "outlined",
                  InputLabelProps: {
                    shrink: true
                  }
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 6,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  id: "surename",
                  label: "Surename",
                  type: "text",
                  value: surename,
                  onChange: event => setSureName(event.target.value),
                  variant: "outlined",
                  InputLabelProps: {
                    shrink: true
                  }
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 6,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  required: true,
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  value: email,
                  onChange: event => setEmail(event.target.value),
                  variant: "outlined",
                  InputLabelProps: {
                    shrink: true
                  },
                  InputProps: {
                    startAdornment: /*#__PURE__*/_jsx(InputAdornment, {
                      position: "start",
                      children: /*#__PURE__*/_jsx(EmailIcon, {})
                    })
                  }
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 6,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  required: true,
                  id: "contact",
                  label: "Contact Number",
                  variant: "outlined",
                  type: "number",
                  value: contact,
                  onChange: event => setContact(event.target.value),
                  InputLabelProps: {
                    shrink: true
                  },
                  InputProps: {
                    startAdornment: /*#__PURE__*/_jsx(InputAdornment, {
                      position: "start",
                      children: /*#__PURE__*/_jsx(ContactPhoneIcon, {})
                    })
                  }
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 4,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(MuiPickersUtilsProvider, {
                  utils: DateFnsUtils,
                  children: /*#__PURE__*/_jsx(KeyboardDatePicker, {
                    disableToolbar: true,
                    required: true,
                    variant: "inline",
                    format: "MM/dd/yyyy",
                    margin: "normal",
                    id: "date-picker-inline",
                    label: "Date",
                    value: selectedDate,
                    onChange: handleDateChange,
                    KeyboardButtonProps: {
                      "aria-label": "change date"
                    }
                  })
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 4,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  id: "outlined-select-currency",
                  select: true,
                  required: true,
                  label: "Time",
                  value: selectedTime,
                  onChange: handleTimeChange,
                  variant: "outlined",
                  children: times.map((option, index) => /*#__PURE__*/_jsx(MenuItem, {
                    value: option,
                    children: option
                  }, index))
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                sm: 4,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  required: true,
                  id: "outlined-number",
                  label: "Number of Guest :",
                  type: "number",
                  value: people,
                  onChange: event => setPeople(event.target.value),
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "outlined"
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                xs: 12,
                className: classes.item,
                children: /*#__PURE__*/_jsx(TextField, {
                  id: "outlined-multiline-static",
                  label: "Special Requests :",
                  multiline: true,
                  rows: "4",
                  type: "text",
                  placeholder: "special requirement",
                  variant: "outlined",
                  value: request,
                  onChange: event => setRequest(event.target.value),
                  InputLabelProps: {
                    shrink: true
                  }
                })
              })]
            }), /*#__PURE__*/_jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "flex-end"
              },
              children: [/*#__PURE__*/_jsx(Button, {
                type: "submit",
                color: "primary",
                children: "Booking"
              }), /*#__PURE__*/_jsx(Button, {
                onClick: handleClose,
                color: "primary",
                children: "Cancel"
              })]
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ 64812:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57966);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52543);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93871);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22318);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const styles = theme => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: "block",
    marginTop: theme.spacing(0.5),
    background: "currentColor"
  }
});

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3"
};

const Typography = props => {
  const {
    children,
    classes,
    marked = false,
    variant
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "marked", "variant"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread(_objectSpread({
    variantMapping: variantMapping,
    variant: variant
  }, other), {}, {
    children: [children, marked ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: classes[`marked${(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(variant) + (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(marked)}`]
    }) : null]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles)(Typography));

/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;