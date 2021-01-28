(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-sample"],{

/***/ "B4bC":
/*!***************************************!*\
  !*** ./src/components/app-sample.css ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":host {\n}\n\n:host:not(:defined) {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://src/components/app-sample.css"],"names":[],"mappings":"AAAA;AACA;;AAEA;EACE,aAAa;AACf","sourcesContent":[":host {\n}\n\n:host:not(:defined) {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "OF+d":
/*!****************************************!*\
  !*** ./src/components/app-sample.html ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

// Module
var code = "<label name=\"theme-switch\">\n  <input name=\"theme-switch\" type=\"checkbox\" value=\"false\">\n  Dark Mode\n</label>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "w9IG":
/*!**************************************!*\
  !*** ./src/components/app-sample.ts ***!
  \**************************************/
/*! exports provided: AppSample */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSample", function() { return AppSample; });
/* harmony import */ var _app_sample_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sample.html */ "OF+d");
/* harmony import */ var _app_sample_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_sample_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_sample_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sample.css */ "B4bC");


/******************** Build HTML/CSS ********************/
const templateElement = document.createElement('template');
templateElement.innerHTML = _app_sample_html__WEBPACK_IMPORTED_MODULE_0___default.a;
const styleElement = document.createElement('style');
styleElement.innerHTML = _app_sample_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
templateElement.content.insertBefore(styleElement, templateElement.content.firstChild);
class AppSample extends HTMLElement {
    constructor() {
        super();
        this._onThemeSwitch = () => {
            const switchOn = this._themeSwitchElement.checked;
            if (switchOn) {
                document.body.classList.replace('light', 'dark');
            }
            else {
                document.body.classList.replace('dark', 'light');
            }
        };
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));
        this._themeSwitchElement = shadowRoot.querySelector('input[name=theme-switch]');
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {
        this._themeSwitchElement.onchange = this._onThemeSwitch;
    }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) {
        // switch (name) {
        //     case:
        // }
    }
}


/***/ })

}]);
//# sourceMappingURL=app-sample-55a9596145ddd93f87ca.bundle.js.map