webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/view/intro/appintro.js":
/*!*******************************************!*\
  !*** ./components/view/intro/appintro.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _tyrography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tyrography */ "./components/tyrography.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");

var _jsxFileName = "D:\\Project - Git\\thaivintage-nextjs\\components\\view\\intro\\appintro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var styles = function styles(theme) {
  return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      position: "relative",
      //overflow: "hidden",
      alignItems: "center",
      backgroundColor: "#f09751 !important"
    }, theme.breakpoints.down("sm"), {
      overflow: "hidden"
    }),
    image: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pointerEvents: "none",
      position: "absolute",
      opacity: 0.5
    }, theme.breakpoints.up("sm"), {
      height: "66vh",
      minHeight: 450,
      maxHeight: 1300
    }),
    container: {
      display: "flex",
      position: "relative"
    },
    gridStory: {
      backgroundColor: "white"
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "27px"
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 70,
      fontWeight: 700,
      color: "#000",
      textAlign: "right",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2)
    }, theme.breakpoints.down("sm"), {
      textAlign: "center",
      fontSize: 70
    }),
    subtitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 32
    }, theme.breakpoints.down("sm"), {
      textAlign: "center"
    }),
    backdropIntro: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.1,
      zIndex: 1
    }
  }, "gridStory", {
    backgroundColor: "#f3f3f3"
  });
};

var AppIntro = function AppIntro(props) {
  var classes = props.classes;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-1358693100" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__["default"], {
    smUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1358693100" + " " + (classes.item || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("img", {
    src: "/images/Ala5.png",
    style: {
      marginTop: "80px",
      marginBottom: "80px",
      height: "50vh"
    },
    className: "jsx-1358693100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.gridStory,
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1358693100" + " " + (classes.item || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1358693100" + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.title, "titleStory") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginRight: 20
    },
    className: "jsx-1358693100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Our ", __jsx("p", {
    className: "jsx-1358693100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Story"))), __jsx(_tyrography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.subtitle,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Thai Vintage Whitchurch"), __jsx(_tyrography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Bringing Ancient Thai Food to Whitchurch. We welcome you to the Thai Vintage Restaurant. Tempted by an unrivaled range of authentic & imaginative fusion dishes. Our food is freshly prepared to the highest standards using only the best quality natural, freshest ingredients. No ghee, full fat dairy, processed meats, artificial colours or flavours are used. We only cook with sparing amounts of sunflower & olive oils and only use fresh chicken breast & the best cuts of meat. We are the healthy Thai takeaway!")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1358693100",
    __self: this
  }, ".titleStory.jsx-1358693100{font-family:\"Cinzel\",serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0IC0gR2l0XFx0aGFpdmludGFnZS1uZXh0anNcXGNvbXBvbmVudHNcXHZpZXdcXGludHJvXFxhcHBpbnRyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SGtCLEFBR3VDLDJCQUM5QiIsImZpbGUiOiJEOlxcUHJvamVjdCAtIEdpdFxcdGhhaXZpbnRhZ2UtbmV4dGpzXFxjb21wb25lbnRzXFx2aWV3XFxpbnRyb1xcYXBwaW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCIuLi8uLi90eXJvZ3JhcGh5XCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAvL292ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjA5NzUxICFpbXBvcnRhbnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgb3BhY2l0eTogMC41LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI2NnZoXCIsXHJcbiAgICAgIG1pbkhlaWdodDogNDUwLFxyXG4gICAgICBtYXhIZWlnaHQ6IDEzMDBcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcbiAgfSxcclxuICBncmlkU3Rvcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiXHJcbiAgfSxcclxuICBpdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcclxuICAgIGZvbnRTaXplOiAxNSxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFwiMjdweFwiXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IDcwLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGZvbnRTaXplOiA3MFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAzMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmFja2Ryb3BJbnRybzoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjEsXHJcbiAgICB6SW5kZXg6IDFcclxuICB9LFxyXG4gIGdyaWRTdG9yeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmM2YzZjNcIlxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBBcHBJbnRybyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9BbGE1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZFN0b3J5fSBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgXCJ0aXRsZVN0b3J5XCIpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgT3VyIDxwPlN0b3J5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoYWkgVmludGFnZSBXaGl0Y2h1cmNoXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIEJyaW5naW5nIEFuY2llbnQgVGhhaSBGb29kIHRvIFdoaXRjaHVyY2guIFdlIHdlbGNvbWUgeW91IHRvXHJcbiAgICAgICAgICAgICAgICAgIHRoZSBUaGFpIFZpbnRhZ2UgUmVzdGF1cmFudC4gVGVtcHRlZCBieSBhbiB1bnJpdmFsZWQgcmFuZ2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljICYgaW1hZ2luYXRpdmUgZnVzaW9uIGRpc2hlcy4gT3VyIGZvb2QgaXMgZnJlc2hseVxyXG4gICAgICAgICAgICAgICAgICBwcmVwYXJlZCB0byB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgdXNpbmcgb25seSB0aGUgYmVzdCBxdWFsaXR5XHJcbiAgICAgICAgICAgICAgICAgIG5hdHVyYWwsIGZyZXNoZXN0IGluZ3JlZGllbnRzLiBObyBnaGVlLCBmdWxsIGZhdCBkYWlyeSxcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkIG1lYXRzLCBhcnRpZmljaWFsIGNvbG91cnMgb3IgZmxhdm91cnMgYXJlIHVzZWQuIFdlXHJcbiAgICAgICAgICAgICAgICAgIG9ubHkgY29vayB3aXRoIHNwYXJpbmcgYW1vdW50cyBvZiBzdW5mbG93ZXIgJiBvbGl2ZSBvaWxzIGFuZFxyXG4gICAgICAgICAgICAgICAgICBvbmx5IHVzZSBmcmVzaCBjaGlja2VuIGJyZWFzdCAmIHRoZSBiZXN0IGN1dHMgb2YgbWVhdC4gV2UgYXJlXHJcbiAgICAgICAgICAgICAgICAgIHRoZSBoZWFsdGh5IFRoYWkgdGFrZWF3YXkhXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3BJbnRyb30gLz4gKi99XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC50aXRsZVN0b3J5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbFwiLCBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcEludHJvLnByb3RvdHlwZSA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBcHBJbnRybyk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Project - Git\\\\thaivintage-nextjs\\\\components\\\\view\\\\intro\\\\appintro.js */"));
};

AppIntro.prototype = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(AppIntro));

/***/ })

})
//# sourceMappingURL=index.js.ce22d65b638d2e27dd5e.hot-update.js.map