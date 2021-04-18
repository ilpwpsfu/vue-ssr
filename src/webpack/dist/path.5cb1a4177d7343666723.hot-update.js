webpackHotUpdate("path",{

/***/ "./src/vue/router/index.js":
/*!*********************************!*\
  !*** ./src/vue/router/index.js ***!
  \*********************************/
/*! exports provided: createRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
function createRouter() {
  return new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
    mode: 'history',
    routes: [{
      path: '/',
      component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ "./src/vue/views/Home.vue"))
    }]
  });
}

/***/ })

})
//# sourceMappingURL=path.5cb1a4177d7343666723.hot-update.js.map