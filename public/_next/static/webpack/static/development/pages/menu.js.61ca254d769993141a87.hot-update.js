webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/reservation/modalrev.js":
/*!********************************************!*\
  !*** ./components/reservation/modalrev.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormDialog; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ContactPhone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ContactPhone */ "./node_modules/@material-ui/icons/ContactPhone.js");
/* harmony import */ var _material_ui_icons_ContactPhone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactPhone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./complete */ "./components/reservation/complete.js");


var _jsxFileName = "D:\\Project - Git\\thaivintage-nextjs\\components\\reservation\\modalrev.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
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
  };
});
function FormDialog(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      complete = _useState2[0],
      setComplete = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()())),
      selectedDate = _useState3[0],
      setSelectedDate = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      selectedTime = _useState4[0],
      setSelectedTime = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState5[0],
      setName = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      surename = _useState6[0],
      setSureName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState7[0],
      setEmail = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contact = _useState8[0],
      setContact = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      people = _useState9[0],
      setPeople = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      request = _useState10[0],
      setRequest = _useState10[1];

  var classes = useStyles();
  var times = ["12:00", "12:30", "13:00", "13.30", "14:00", "14:30", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  var handleSavetoDB = function handleSavetoDB(event) {
    var firebase, refDoc;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSavetoDB$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_firebase__WEBPACK_IMPORTED_MODULE_18__["loadDBFirebase"])());

          case 3:
            firebase = _context.sent;
            refDoc = firebase.firestore().collection("reservation");
            refDoc.add({
              name: name,
              surename: surename,
              email: email,
              contact: contact,
              date: selectedDate,
              time: selectedTime,
              people: people,
              request: request,
              confirm: false
            }).then(function (ref) {
              console.log("Document written with ID: ", ref.id);
              handleComplete();
            })["catch"](function (error) {
              console.error("Error adding document: ", error);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var handleTimeChange = function handleTimeChange(event) {
    setSelectedTime(event.target.value);
  };

  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date);
  };

  var handleClickOpen = function handleClickOpen(event) {
    event.preventDefault();
    setOpen(true);
  };

  var handleComplete = function handleComplete(event) {
    event.preventDefault();
    setComplete(true);
  };

  var handleClose = function handleClose() {
    setOpen(false); // setComplete(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: props["class"],
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, props.name), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    maxWidth: "sm",
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, complete ? __jsx(_complete__WEBPACK_IMPORTED_MODULE_19__["default"], {
    close: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Booking Details"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dividers: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "To subscribe to this website, please enter your email address here. We will send updates occasionally."), __jsx("form", {
    className: classes.root,
    onSubmit: handleSavetoDB,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    container: true,
    spacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    required: true,
    id: "outlined-required",
    label: "Name",
    type: "text",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "surename",
    label: "Surename",
    type: "text",
    value: surename,
    onChange: function onChange(event) {
      return setSureName(event.target.value);
    },
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    id: "email",
    label: "Email Address",
    type: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 6,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    id: "contact",
    label: "Contact Number",
    variant: "outlined",
    type: "text",
    value: contact,
    onChange: function onChange(event) {
      return setContact(event.target.value);
    },
    InputLabelProps: {
      shrink: true
    },
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx(_material_ui_icons_ContactPhone__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 4,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_16__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_17__["KeyboardDatePicker"], {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 4,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-select-currency",
    select: true,
    required: true,
    label: "Time",
    value: selectedTime,
    onChange: handleTimeChange,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, times.map(function (option, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, option);
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    sm: 4,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    id: "outlined-number",
    label: "Number of Guest :",
    type: "number",
    value: people,
    onChange: function onChange(event) {
      return setPeople(event.target.value);
    },
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
    item: true,
    xs: 12,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-multiline-static",
    label: "Special Requests :",
    multiline: true,
    rows: "4",
    type: "text",
    placeholder: "special requirement",
    variant: "outlined",
    value: request,
    onChange: function onChange(event) {
      return setRequest(event.target.value);
    },
    InputLabelProps: {
      shrink: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }))), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Booking"), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleClose,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Cancel")))))));
}

/***/ })

})
//# sourceMappingURL=menu.js.61ca254d769993141a87.hot-update.js.map