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
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Custom Element Registration
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { AppSample } = yield __webpack_require__.e(/*! import() | app-sample */ "app-sample").then(__webpack_require__.bind(null, /*! ./components/app-sample */ "w9IG"));
    (_a = customElements.get('app-sample')) !== null && _a !== void 0 ? _a : customElements.define('app-sample', AppSample);
}))();
// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
            console.log(`SW registered: ${registration}`);
        })
            .catch((regError) => {
            console.error(`SW register failed: ${regError}`);
        });
    });
}


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDhCQUE4QjtBQUM5QixDQUFDLEdBQVMsRUFBRTs7SUFDUixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSw0SUFBc0UsQ0FBQztJQUVuRyxvQkFBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsbUNBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkYsQ0FBQyxFQUFDLEVBQUUsQ0FBQztBQUVMLHFCQUFxQjtBQUNyQixJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7SUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDakMsU0FBUyxDQUFDLGFBQWE7YUFDbEIsUUFBUSxDQUFDLG9CQUFvQixDQUFDO2FBQzlCLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoibWFpbi1iYmJkZThkMzI1OTYxMmJhYjgyOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDdXN0b20gRWxlbWVudCBSZWdpc3RyYXRpb25cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBBcHBTYW1wbGUgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFwcC1zYW1wbGVcIiAqLyAnLi9jb21wb25lbnRzL2FwcC1zYW1wbGUnKTtcblxuICAgIGN1c3RvbUVsZW1lbnRzLmdldCgnYXBwLXNhbXBsZScpID8/IGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNhbXBsZScsIEFwcFNhbXBsZSk7XG59KSgpO1xuXG4vLyBQV0EgU2VydmljZSBXb3JrZXJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgICAgICAucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgICAgICAudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNXIHJlZ2lzdGVyZWQ6ICR7cmVnaXN0cmF0aW9ufWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgocmVnRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTVyByZWdpc3RlciBmYWlsZWQ6ICR7cmVnRXJyb3J9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=