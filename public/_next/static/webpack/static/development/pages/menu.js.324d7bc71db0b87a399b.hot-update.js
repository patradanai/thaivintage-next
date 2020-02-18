webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/menu/recommend.js":
/*!**************************************!*\
  !*** ./components/menu/recommend.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _tyrography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tyrography */ "./components/tyrography.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card */ "./components/menu/card.js");

var _jsxFileName = "D:\\Project - Git\\thaivintage-nextjs\\components\\menu\\recommend.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var styles = function styles(theme) {
  var _button;

  return {
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
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      display: "block"
    }, theme.breakpoints.down("sm"), {
      textAlign: "center",
      fontSize: 50
    }),
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
    button: (_button = {
      height: 60,
      border: "1px solid #000"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, theme.breakpoints.down("sm"), {
      marginRight: theme.spacing(1)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "&:hover", {
      backgroundColor: "#fff"
    }), _button)
  };
};

var RecommendMenu = function RecommendMenu(props) {
  var classes = props.classes;
  var recommend = [{
    image: "/images/Ala1.png",
    title: "Steamed Sea Bass Lime & Chilli",
    details: "Steamed Sea Bass fillet with lime & chilli sauce"
  }, {
    image: "/images/Ala2.png",
    title: "Steamed Sea Bass with soy sauce",
    details: "Soft texture Sea Bass fillets with mellow flavoured. Shitake mushroom, spring onion, ginger and light soy sauce."
  }, {
    image: "/images/Ala3.png",
    title: "Crispy Sea Bass with Mango salad",
    details: "Crispy fried Sea Bass fillet with Thai herbs and mango salad."
  }, {
    image: "/images/Ala4.png",
    title: "Lamb cutlets Pad Cha",
    details: "with aromatic spice from various Thai herbs (Kra chai, fresh peppercorn, lime leaves) "
  }];
  var listMenu = [{
    name: "SIGNATURE MENU",
    link: "/menus/SIGNATURE.pdf"
  }, {
    name: "A LA CARTE MENU",
    link: "/menus/ALACARTE.pdf"
  }, {
    name: "STARTER MENU",
    link: "/menus/STARTER.pdf"
  }, {
    name: "SET MENU",
    link: "/menus/SETMENU.pdf"
  }, {
    name: "KID MENU",
    link: "/menus/KIDSMENU.pdf"
  }, {
    name: "DESSERT&COFFEE MENU",
    link: "/menus/DESSERTS&COFFEE.pdf"
  }, {
    name: "DRINKING MENU",
    link: "/menus/DRINKING.pdf"
  }, {
    name: "ALL MENU",
    link: "/menus/ALLMENU.pdf"
  }];
  return __jsx("section", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_tyrography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Chef Recommended ..."), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, recommend.map(function (payload, index) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      sm: 3,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
      image: payload.image,
      title: payload.title,
      details: payload.details,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }));
  })), __jsx(_tyrography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Our Menus"), __jsx("div", {
    className: classes.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "text",
    color: "primary",
    "aria-label": "text primary button group",
    orientation: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, listMenu.map(function (payload, index) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: true,
      className: classes.item,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "outlined",
      fullWidth: true,
      className: classes.button,
      href: payload.link,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, payload.name));
  }))))));
};

RecommendMenu.prototype = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(RecommendMenu));

/***/ })

})
//# sourceMappingURL=menu.js.324d7bc71db0b87a399b.hot-update.js.map