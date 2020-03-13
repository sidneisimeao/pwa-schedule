webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/assets/js/functions.js\");\n\nvar fecthData = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(function (event) {\n  var search = event.target.value || '';\n  fetch('/data/data.json').then(function (response) {})[\"catch\"](function (err) {\n    console.log(err);\n  });\n  return event.target;\n}, 1000);\n\nwindow.onload = function (event) {\n  return fecthData(event);\n};\n\ndocument.querySelector('#input-search').addEventListener('keyup', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"clearSearchString\"])(event));\n});\ndocument.querySelector('#btn-clear').addEventListener('click', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"clearSearchString\"])(event, true));\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

})