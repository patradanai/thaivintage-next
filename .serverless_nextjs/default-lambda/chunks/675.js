exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 75808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ loadDBFirebase; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81923);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79867);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80513);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);



const loadDBFirebase = () => {
  const config = {
    apiKey: "AIzaSyB1w1R1YpWx1oD_3FjZBwXQgs-S37oS0yA",
    authDomain: "thaivintagewhitchurch.firebaseapp.com",
    databaseURL: "https://thaivintagewhitchurch.firebaseio.com",
    projectId: "thaivintagewhitchurch",
    storageBucket: "thaivintagewhitchurch.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
  }

  return (firebase_app__WEBPACK_IMPORTED_MODULE_0___default());
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

/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;