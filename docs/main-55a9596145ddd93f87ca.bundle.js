(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/main.ts ./src/style.css ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.ts */"zUnb");
module.exports = __webpack_require__(/*! ./src/style.css */"OMi8");


/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "WSEr");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/tracing */ "aI3+");


_sentry_browser__WEBPACK_IMPORTED_MODULE_0__[/* init */ "a"]({
    dsn: 'https://a6375ca77cde49b58b64c42aad5a46d1@o512486.ingest.sentry.io/5612779',
    integrations: [new _sentry_tracing__WEBPACK_IMPORTED_MODULE_1__[/* Integrations */ "a"].BrowserTracing()],
    tracesSampleRate: 1.0,
});
// Custom Element Registration
// Remove async function when top-level await is supported
(async () => {
    var _a;
    const { AppSample } = await Promise.all(/*! import() | app-sample */[__webpack_require__.e("vendors"), __webpack_require__.e("app-sample")]).then(__webpack_require__.bind(null, /*! ./components/app-sample */ "w9IG"));
    (_a = customElements.get('app-sample')) !== null && _a !== void 0 ? _a : customElements.define('app-sample', AppSample);
})();
// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('service-worker.js')
            .then((registration) => {
            console.log(`SW registered: ${registration}`);
        })
            .catch((regError) => {
            console.error(`SW register failed: ${regError}`);
        });
    });
}


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=main-55a9596145ddd93f87ca.bundle.js.map