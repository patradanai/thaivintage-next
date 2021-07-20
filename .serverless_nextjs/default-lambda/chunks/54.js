exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 52054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57966);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52543);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43832);
/* harmony import */ var _components_tyrography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64812);








const backgroundImage = "/images/thaivintagewhitchurch-thai-cuisin-coffee-vegetable-food.png";

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    minHeight: 200,
    [theme.breakpoints.up("sm")]: {
      minHeight: 300,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backgroundhero: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1
  },
  imagebackground: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    // Average color of the background image.
    backgroundPosition: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: 400,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(15),
    color: theme.palette.common.black,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
      fontSize: 30
    }
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    zIndex: -1
  }
});

const HeroSub = props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: classes.root,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: backgroundImage,
      style: {
        display: "None"
      },
      alt: "thaivintagewhitchurch-thai-cuisin-coffee-vegetable-food"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.backdrop
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.backgroundhero, classes.imagebackground)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      className: classes.container,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tyrography__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        align: "center",
        variant: "h2",
        className: classes.title,
        children: props.title
      })
    })]
  });
};

HeroSub.prototype = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles)(HeroSub));

/***/ })

};
;