webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/view/header/nav.js":
/*!***************************************!*\
  !*** ./components/view/header/nav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _appbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appbar */ "./components/appbar.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../toolbar */ "./components/toolbar.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button */ "./components/button.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _reservation_modalrev__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reservation/modalrev */ "./components/reservation/modalrev.js");


var _jsxFileName = "D:\\Project - Git\\thaivintage-nextjs\\components\\view\\header\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var logo = "/images/logo.png";

var styles = function styles(theme) {
  var _rightLink;

  return {
    title: {
      fontSize: 24
    },
    placeholder: Object(_toolbar__WEBPACK_IMPORTED_MODULE_7__["styles"])(theme).root,
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
    right: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      flex: 1,
      display: "flex",
      justifyContent: "flex-end"
    }, theme.breakpoints.down("sm"), {
      justifyContent: "center"
    }),
    leftLink: {
      fontSize: 14,
      color: theme.palette.common.black,
      marginLeft: theme.spacing(2),
      padding: 5
    },
    rightLink: (_rightLink = {
      fontSize: 14,
      color: theme.palette.common.black,
      marginRight: theme.spacing(3),
      backgroundColor: "#fff",
      border: "1px solid #ff671f",
      padding: 5
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_rightLink, theme.breakpoints.down("sm"), {
      fontSize: 10,
      marginRight: theme.spacing(1)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_rightLink, "&:hover", {
      backgroundColor: "#ff671f"
    }), _rightLink),
    linkSecondary: {
      color: theme.palette.secondary.main
    },
    menuButton: {},
    imageSrc: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      weight: 100,
      height: 80
    }, theme.breakpoints.down("sm"), {
      weight: 100,
      height: 50
    })
  };
};

var Nav = function Nav(props) {
  var classes = props.classes;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return __jsx(_appbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__["default"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: classes.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "small",
    className: classes.leftLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "MENUS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "small",
    className: classes.leftLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "LOCATION")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "small",
    className: classes.leftLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "GALLERY")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "small",
    className: classes.leftLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "ABOUT")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "small",
    className: classes.leftLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "CONTACT US")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    className: classes.imageSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx("div", {
    className: classes.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_reservation_modalrev__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: "Book a Table",
    "class": classes.rightLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    size: "small",
    className: classes.rightLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Take AWAY")), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__["default"], {
    smUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "secondary",
    "aria-label": "menu",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "MENUS"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "LOCATION"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "GALLERY"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "ABOUT"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "CONTACT US"))), __jsx("div", {
    className: classes.placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }))));
};

Nav.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Nav));

/***/ })

})
//# sourceMappingURL=index.js.caf75b49dd671997e1be.hot-update.js.map