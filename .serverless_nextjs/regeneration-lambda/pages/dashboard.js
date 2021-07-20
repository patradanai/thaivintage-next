/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 42616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/dashboard/layout.js + 2 modules
var layout = __webpack_require__(86141);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./lib/firebase.js
var lib_firebase = __webpack_require__(75808);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(52543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(41120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(59693);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(82302);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(99613);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(88222);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(56847);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(83750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(57394);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(57966);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(93871);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
;// CONCATENATED MODULE: ./components/tyrography.js



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

const tyrography_Typography = props => {
  const {
    children,
    classes,
    marked = false,
    variant
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "marked", "variant"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, _objectSpread(_objectSpread({
    variantMapping: variantMapping,
    variant: variant
  }, other), {}, {
    children: [children, marked ? /*#__PURE__*/jsx_runtime.jsx("span", {
      className: classes[`marked${(0,capitalize/* default */.Z)(variant) + (0,capitalize/* default */.Z)(marked)}`]
    }) : null]
  }));
};

/* harmony default export */ var tyrography = ((0,withStyles/* default */.Z)(styles)(tyrography_Typography));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js + 1 modules
var TablePagination = __webpack_require__(61657);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(79895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(85639);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(64436);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 2 modules
var Select = __webpack_require__(65250);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js
var InputLabel = __webpack_require__(96394);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(41598);
// EXTERNAL MODULE: ./node_modules/@date-io/date-fns/build/index.js
var build = __webpack_require__(8634);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(88995);
// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/dist/material-ui-pickers.js
var material_ui_pickers = __webpack_require__(11838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52663);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(66083);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(29525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(66856);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17812);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(80366);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/notistack/dist/index.js
var dist = __webpack_require__(83714);
;// CONCATENATED MODULE: ./components/dashboard/reservation/modalReserve.js



function modalReserve_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modalReserve_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modalReserve_ownKeys(Object(source), true).forEach(function (key) { modalReserve_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modalReserve_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modalReserve_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modalReserve_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modalReserve_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modalReserve_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






















const modalReserve_styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const modalReserve_DialogTitle = (0,withStyles/* default */.Z)(modalReserve_styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = modalReserve_objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, modalReserve_objectSpread(modalReserve_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/jsx_runtime.jsx(tyrography, {
      variant: "h6",
      children: children
    }), onClose ? /*#__PURE__*/jsx_runtime.jsx(IconButton/* default */.Z, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/jsx_runtime.jsx(Close/* default */.Z, {})
    }) : null]
  }));
});
const modalReserve_DialogContent = (0,withStyles/* default */.Z)(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(DialogContent/* default */.Z);
const modalReserve_DialogActions = (0,withStyles/* default */.Z)(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(DialogActions/* default */.Z);

const ReserveDialogs = props => {
  const {
    0: open,
    1: setOpen
  } = (0,react.useState)(false);
  const {
    enqueueSnackbar
  } = (0,dist.useSnackbar)();

  const handleClickVariant = (variant, data) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`SUCCESS ${data}`, {
      variant
    });
  };

  const handleClickOpen = event => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = event => {
    event.preventDefault();
    setOpen(false);
  };

  const updateFirebase = async event => {
    event.preventDefault();
    firebaseConfirm();
  }; // Add Calendar and Confirm


  const firebaseConfirm = async () => {
    const firebase = await (0,lib_firebase/* loadDBFirebase */.T)();
    gapi.client.calendar.events.insert({
      calendarId: "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
      resource: {
        summary: `${props.name} | ${props.email}`,
        location: "Old Mill Park Avenue Park Avenue, Whitchurch SY13 1SH, United Kingdom",
        description: `Name : ${props.name}, Email : ${props.email}, People : ${props.numberGuest}, Remark : ${props.remark} `,
        start: {
          dateTime: `${props.reserveDate}T${props.reserveTime}:00.000Z`,
          timeZone: "Europe/London"
        },
        end: {
          dateTime: `${props.reserveDate}T${props.reserveTime}:00.000Z`,
          timeZone: "Europe/London"
        }
      }
    }).then(res => {
      handleClickVariant("success", "ADD CALENDAR");
      firebase.firestore().collection("reservation").doc(props.id).update({
        confirm: "confirm",
        calendarId: res.result["id"]
      }).then(res => {
        axios_default().post("https://thaivintagewhitchurch-268910.appspot.com/api", {
          email: props.email,
          name: props.name,
          people: props.numberGuest,
          timeReserve: props.reserveDate,
          dateReserve: props.reserveTime
        });
      }).then(() => {
        handleClickVariant("success", "ACCEPT & EMAIL");
      }).catch(err => {
        handleClickVariant("error", "ERROR SYSTEM");
      });
    }).catch(err => {
      handleClickVariant("error", "ERROR ADD CALENDAR");
    });
  }; // Deleted Calendar


  const deleteCalendar = async () => {
    const firebase = await (0,lib_firebase/* loadDBFirebase */.T)();
    gapi.client.calendar.events.delete({
      calendarId: "thaivintagewhitchurch.co.uk_ert6u9r95pcadm2d73fsr1f78k@group.calendar.google.com",
      eventId: props.calendar
    }).then(res => {
      handleClickVariant("warning", "| DELETED");
      firebase.firestore().collection("reservation").doc(props.id).update({
        confirm: "cancel"
      }).then(() => {
        handleClickVariant("success", "CANCEL A RESERVED");
      }).catch(err => {
        handleClickVariant("error", "ERROR SYSTEM");
      });
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
      variant: "outlined",
      color: "primary",
      onClick: handleClickOpen,
      children: "Open"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open,
      children: [/*#__PURE__*/jsx_runtime.jsx(modalReserve_DialogTitle, {
        id: "customized-dialog-title",
        onClose: handleClose,
        children: "Reserve Details"
      }), /*#__PURE__*/jsx_runtime.jsx(modalReserve_DialogContent, {
        dividers: true,
        children: /*#__PURE__*/jsx_runtime.jsx(TableContainer/* default */.Z, {
          component: Paper/* default */.Z,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            style: {
              width: "100%"
            },
            "aria-label": "simple table",
            children: [/*#__PURE__*/jsx_runtime.jsx(TableHead/* default */.Z, {
              children: /*#__PURE__*/jsx_runtime.jsx(TableRow/* default */.Z, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Reserve Number"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.id
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Guest Name"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.name
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "E-Mail"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.email
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Contact Number"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.contact
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Number of Guest"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.numberGuest
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Reserve Date"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.reserveDate
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Reserve Time"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.reserveTime
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Promotion"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Promotion"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Reserve Status"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.reserveStatus
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: "Remark"
                }), /*#__PURE__*/jsx_runtime.jsx(TableCell/* default */.Z, {
                  children: props.remark
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(modalReserve_DialogActions, {
        children: props.reserveStatus === "Waiting" ? /*#__PURE__*/jsx_runtime.jsx("div", {
          children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
            autoFocus: true,
            onClick: updateFirebase,
            variant: "outlined",
            color: "primary",
            style: {
              backgroundColor: "green",
              margin: 5
            },
            children: "Accept"
          })
        }) : props.reserveStatus === "Confirmed" ? /*#__PURE__*/jsx_runtime.jsx("div", {
          children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
            autoFocus: true,
            onClick: deleteCalendar,
            variant: "outlined",
            color: "primary",
            style: {
              backgroundColor: "#f09751",
              margin: 5
            },
            children: "Cancel Reserve"
          })
        }) : null
      })]
    })]
  });
};

/* harmony default export */ var modalReserve = (ReserveDialogs);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(5582);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.js
var core = __webpack_require__(58189);
// EXTERNAL MODULE: ./node_modules/react-csv/index.js
var react_csv = __webpack_require__(83461);
;// CONCATENATED MODULE: ./components/dashboard/reservation/index.js

























const StyledTableCell = (0,withStyles/* default */.Z)(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 12
  },
  body: {
    fontSize: 14
  }
}))(TableCell/* default */.Z);
const StyledTableRow = (0,withStyles/* default */.Z)(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow/* default */.Z);
const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  table: {
    width: 1280
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));
const BootstrapInput = (0,withStyles/* default */.Z)(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase/* default */.Z);
const mainStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    marginTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(2)
  },
  reservationBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  headerTable: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    margin: theme.spacing(1)
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  button: {
    marginTop: theme.spacing(3)
  }
}));

const ReserveDashboard = props => {
  const {
    0: page,
    1: setPage
  } = (0,react.useState)(0);
  const {
    0: rowsPerPage,
    1: setRowsPerPage
  } = (0,react.useState)(10);
  const {
    0: filterPayload,
    1: setFilterPayload
  } = (0,react.useState)([]);
  const {
    0: statusPayload,
    1: setStatusPayload
  } = (0,react.useState)([]);
  const {
    0: csvDownload,
    1: setCsvDownload
  } = (0,react.useState)([]);
  const {
    0: clear,
    1: setClear
  } = (0,react.useState)(false);
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react.useState)("");
  const {
    0: status,
    1: setStatus
  } = (0,react.useState)("Waiting");
  const classes = useStyles();
  const styles = mainStyles();
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    setCsvDownload([...filterPayload]);
  }, [filterPayload]);
  (0,react.useEffect)(() => {
    let filter = [...statusPayload];
    setFilterPayload(filter.slice(rowsPerPage * page, rowsPerPage * (page + 1)));
  }, [page, rowsPerPage, statusPayload]);
  (0,react.useEffect)(() => {
    const data = [...statusPayload];
    let search = [];

    if (data.length > 0) {
      search = data.filter(data => {
        return data.name.toLowerCase().includes(searchValue.toLowerCase()) || data.email.toLowerCase().includes(searchValue.toLowerCase()) || data.contact.toLowerCase().includes(searchValue.toLowerCase()) || data.reserveDate.toLowerCase().includes(searchValue.toLowerCase()) || data.reserveTime.toLowerCase().includes(searchValue.toLowerCase());
      });
    } // Set for Payload


    setFilterPayload(search); // Set fot CSV

    setCsvDownload(search);
  }, [searchValue]);
  (0,react.useEffect)(() => {
    const data = [...statusPayload];
    let filter = [];

    if (data.length > 0 && selectedDate != null) {
      filter = data.filter(data => {
        return data.reserveDate === moment_default()(selectedDate, "llll").format("YYYY-MM-DD");
      }); // Set for Payload

      setFilterPayload(filter); // Set fot CSV

      setCsvDownload(payout);
    }
  }, [selectedDate]);
  (0,react.useEffect)(() => {
    const result = [...props.data];
    let payout = [];

    if (result.length > 0) {
      payout = result.filter(data => {
        return data.reserveStatus.includes(status === "All" ? "" : status);
      });
    } // Set for Payload


    setStatusPayload(payout); // Set fot CSV

    setCsvDownload(payout);
  }, [status, props.data, clear]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeStatus = event => {
    event.preventDefault();
    setSelectedDate(null);
    setStatus(event.target.value);
  };

  const handleClearFilter = event => {
    event.preventDefault();
    setSearchValue("");
    setSelectedDate(null);
    setStatus("Waiting");
    setClear(!clear);
  };

  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: styles.root,
      children: [/*#__PURE__*/jsx_runtime.jsx(tyrography, {
        variant: "h4",
        className: styles.title,
        children: "Reservation Management"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.reservationBox,
        children: [/*#__PURE__*/jsx_runtime.jsx(tyrography, {
          variant: "h5",
          className: styles.title,
          children: "Reserve Status :"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
          className: styles.margin,
          children: [/*#__PURE__*/jsx_runtime.jsx(InputLabel/* default */.Z, {
            id: "demo-customized-select-label",
            children: "Reserve Status"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* default */.Z, {
            labelId: "demo-customized-select-label",
            id: "demo-customized-select",
            input: /*#__PURE__*/jsx_runtime.jsx(BootstrapInput, {}),
            style: {
              width: 250
            },
            placeholder: "Reserve Status",
            value: status,
            onChange: handleChangeStatus,
            children: [/*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              value: "All",
              children: /*#__PURE__*/jsx_runtime.jsx("em", {
                children: "All"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              value: "Waiting",
              children: /*#__PURE__*/jsx_runtime.jsx("em", {
                children: "Waiting Confirm"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              value: "Confirmed",
              children: /*#__PURE__*/jsx_runtime.jsx("em", {
                children: "Confirmed"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(MenuItem/* default */.Z, {
              value: "Cancel",
              children: /*#__PURE__*/jsx_runtime.jsx("em", {
                children: "Reserve Cancel"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(core.Button, {
          variant: "outlined",
          size: "large",
          color: "secondary",
          className: styles.button,
          onClick: handleClearFilter,
          children: "Clear Filter"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.reservationBox,
        children: [/*#__PURE__*/jsx_runtime.jsx(tyrography, {
          variant: "h5",
          className: styles.title,
          children: "Reserve Date :"
        }), /*#__PURE__*/jsx_runtime.jsx(material_ui_pickers/* MuiPickersUtilsProvider */.is, {
          utils: (build_default()),
          children: /*#__PURE__*/jsx_runtime.jsx(material_ui_pickers/* KeyboardDatePicker */.eU, {
            margin: "normal",
            id: "date-picker-dialog",
            label: "Date picker dialog",
            format: "MM/dd/yyyy",
            value: selectedDate,
            onChange: handleDateChange,
            KeyboardButtonProps: {
              "aria-label": "change date"
            },
            style: {
              marginLeft: 30
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: styles.paper,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.headerTable,
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: styles.headerTitle,
            children: /*#__PURE__*/jsx_runtime.jsx(tyrography, {
              variant: "h4",
              children: "Thai Vintage Whitchurch"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(core.Button, {
            variant: "outlined",
            color: "inherit",
            children: /*#__PURE__*/jsx_runtime.jsx(react_csv.CSVLink, {
              data: csvDownload,
              style: {
                textDecoration: "none",
                color: "#000"
              },
              children: "Download CSV"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: styles.search,
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: styles.searchIcon,
              children: /*#__PURE__*/jsx_runtime.jsx(Search/* default */.Z, {})
            }), /*#__PURE__*/jsx_runtime.jsx(InputBase/* default */.Z, {
              placeholder: "Search\u2026",
              classes: {
                root: styles.inputRoot,
                input: styles.inputInput
              },
              inputProps: {
                "aria-label": "search"
              },
              value: searchValue,
              onChange: event => setSearchValue(event.target.value)
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(TableContainer/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            className: classes.table,
            "aria-label": "customized table",
            children: [/*#__PURE__*/jsx_runtime.jsx(TableHead/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                children: [/*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  children: "Management"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  children: "Reserve No"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Guest Name"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "E-Mail"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Contact No."
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Guest No."
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Reserve Date"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Reserve Time"
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: "Reserve Status"
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(TableBody/* default */.Z, {
              children: filterPayload.map(row => /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledTableRow, {
                children: [/*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  component: "th",
                  scope: "row",
                  children: /*#__PURE__*/jsx_runtime.jsx(modalReserve, {
                    id: row.id,
                    name: row.name,
                    email: row.email,
                    contact: row.contact,
                    numberGuest: row.guestno,
                    reserveDate: row.reserveDate,
                    reserveTime: row.reserveTime,
                    reserveStatus: row.reserveStatus,
                    remark: row.request
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  component: "th",
                  scope: "row",
                  children: row.id
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.name
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.email
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.contact
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.guestno
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.reserveDate
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: row.reserveTime
                }), /*#__PURE__*/jsx_runtime.jsx(StyledTableCell, {
                  align: "right",
                  children: /*#__PURE__*/jsx_runtime.jsx(core.Button, {
                    variant: "outlined",
                    disabled: true,
                    children: row.reserveStatus
                  })
                })]
              }, row.name))
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(TablePagination/* default */.Z, {
          rowsPerPageOptions: [5, 10, 25],
          component: "div",
          count: statusPayload.length,
          rowsPerPage: rowsPerPage,
          page: page,
          onChangePage: handleChangePage,
          onChangeRowsPerPage: handleChangeRowsPerPage
        })]
      })]
    })
  });
};

/* harmony default export */ var reservation = (ReserveDashboard);
;// CONCATENATED MODULE: ./pages/dashboard/index.js


function dashboard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dashboard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dashboard_ownKeys(Object(source), true).forEach(function (key) { dashboard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dashboard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dashboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const DashboardPage = props => {
  const {
    0: reserved,
    1: setReserved
  } = (0,react.useState)([]); // Listen Event from Firebase

  (0,react.useEffect)(() => {
    let db = (0,lib_firebase/* loadDBFirebase */.T)().firestore();
    let unsubscribe = db.collection("reservation").orderBy("date", "asc").onSnapshot(snapshot => {
      let updateList = [];
      snapshot.forEach(data => {
        updateList.push({
          id: data.id,
          name: data.data().name,
          email: data.data().email,
          contact: data.data().contact,
          guestno: data.data().people,
          reserveDate: moment_default()(data.data().date.seconds, "X").format("YYYY-MM-DD"),
          reserveTime: data.data().time,
          promotion: "",
          reserveStatus: data.data().confirm === "confirm" ? "Confirmed" : data.data().confirm === "waiting" ? "Waiting" : "Canceled",
          request: data.data().request,
          calendar: data.data().calendarId
        });
      });
      const mergeList = [...reserved, ...updateList];
      setReserved(mergeList);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Get Data from getInitialProps

  (0,react.useEffect)(() => {
    const data = [...props.payload];
    const updateList = [];
    data.forEach(data => updateList.push({
      id: data.id,
      name: data.name,
      email: data.email,
      contact: data.contact,
      guestno: data.people,
      reserveDate: moment_default()(data.date.seconds, "X").format("YYYY-MM-DD"),
      reserveTime: data.time,
      promotion: "",
      reserveStatus: data.confirm === "confirm" ? "Confirmed" : data.confirm === "waiting" ? "Waiting Confirm" : "Cancel",
      request: data.request,
      calendar: data.calendarId
    }));
    setReserved(updateList);
  }, [props.payload]);
  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(layout/* default */.ZP, {
      children: /*#__PURE__*/jsx_runtime.jsx(reservation, {
        data: reserved
      })
    })
  });
}; // Get Install Connect from Firebase


DashboardPage.getInitialProps = async () => {
  let firebase = await (0,lib_firebase/* loadDBFirebase */.T)();
  let db = firebase.firestore();
  let data = [];
  const result = await db.collection("reservation").orderBy("date", "asc").get().then(snapshot => {
    snapshot.forEach(doc => {
      data.push(dashboard_objectSpread({
        id: doc.id
      }, doc.data()));
    });
  }).catch(err => {});
  return {
    payload: data
  };
};

/* harmony default export */ var dashboard = (DashboardPage);

/***/ }),

/***/ 85287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(53789)

      const appMod = __webpack_require__(7672)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(42616)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/dashboard",
        buildId: "oWaCu_6iAA3MFN56xrw_Z",
        escapedBuildId: "oWaCu_6iAA3MFN56xrw_Z",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"e47fbcbf6a43e7ade431adbbdfe25ca3",previewModeSigningKey:"283074804785012d2810b9fc932966ac05bb0d5d1703190d3e558190878d659f",previewModeEncryptionKey:"9f6d8a28c7f4c8025a6a21d62836c0d814af1a1ce22a74a589f7f75482bcb640"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ (function(module) {

module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 63129:
/***/ (function(module) {

module.exports = require("child_process");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 40881:
/***/ (function(module) {

module.exports = require("dns");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 97565:
/***/ (function(module) {

module.exports = require("http2");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

module.exports = require("net");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ (function(module) {

module.exports = require("tls");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [66,15,24,396,303,802,597,83,93,189,923,225,294,170,675,141], function() { return __webpack_require__(85287); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap","content":"@font-face{font-family:'Playfair Display SC';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/playfairdisplaysc/v10/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbkMFg.woff) format('woff')}@font-face{font-family:'Playfair Display SC';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/playfairdisplaysc/v10/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lb0MEOE1I4otKg.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Playfair Display SC';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/playfairdisplaysc/v10/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbYMEOE1I4otKg.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Playfair Display SC';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/playfairdisplaysc/v10/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbcMEOE1I4otKg.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Playfair Display SC';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/playfairdisplaysc/v10/ke85OhoaMkR6-hSn7kbHVoFf7ZfgMPr_lbkMEOE1I4o.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"},{"url":"https://fonts.googleapis.com/css?family=Cinzel&display=swap","content":"@font-face{font-family:'Cinzel';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cinzel/v11/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfY3lCw.woff) format('woff')}@font-face{font-family:'Cinzel';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cinzel/v11/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfYPlC2xcZqTFU3AS.woff) format('woff');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cinzel';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cinzel/v11/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfY3lC2xcZqTFUw.woff) format('woff');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"},{"url":"https://fonts.googleapis.com/css?family=Great+Vibes&display=swap","content":"@font-face{font-family:'Great Vibes';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/greatvibes/v8/RWmMoKWR9v4ksMfaWd_JN9XFiaI.woff) format('woff')}@font-face{font-family:'Great Vibes';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/greatvibes/v8/RWmMoKWR9v4ksMfaWd_JN9XLiaQoDmlrMlY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Great Vibes';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/greatvibes/v8/RWmMoKWR9v4ksMfaWd_JN9XFiaQoDmlr.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"},{"url":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","content":"@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc-.woff) format('woff')}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff')}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc-.woff) format('woff')}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc-.woff) format('woff')}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			26: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(66);
/******/ 			__webpack_require__.e(15);
/******/ 			__webpack_require__.e(24);
/******/ 			__webpack_require__.e(396);
/******/ 			__webpack_require__.e(303);
/******/ 			__webpack_require__.e(802);
/******/ 			__webpack_require__.e(597);
/******/ 			__webpack_require__.e(83);
/******/ 			__webpack_require__.e(93);
/******/ 			__webpack_require__.e(189);
/******/ 			__webpack_require__.e(923);
/******/ 			__webpack_require__.e(225);
/******/ 			__webpack_require__.e(294);
/******/ 			__webpack_require__.e(170);
/******/ 			__webpack_require__.e(675);
/******/ 			__webpack_require__.e(141);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;