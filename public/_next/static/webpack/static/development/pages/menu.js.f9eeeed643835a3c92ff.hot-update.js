webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/view/location/applocation.js":
/*!*************************************************!*\
  !*** ./components/view/location/applocation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _tyrography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tyrography */ "./components/tyrography.js");
/* harmony import */ var _googleMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../googleMap */ "./components/googleMap.js");
var _jsxFileName = "D:\\Project - Git\\thaivintage-nextjs\\components\\view\\location\\applocation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      overflow: "hidden"
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
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1)
    }
  };
};

var AppLocation = function AppLocation(props) {
  var classes = props.classes;
  return __jsx("section", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: classes.mapSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_googleMap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ZlEgybYqVlX6oFQZ5FulqUlMMnyMqjA",
    loadingElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }),
    containerElement: __jsx("div", {
      style: {
        height: "400px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }),
    mapElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))));
};

AppLocation.prototype = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(AppLocation));

/***/ })

})
//# sourceMappingURL=menu.js.f9eeeed643835a3c92ff.hot-update.js.map