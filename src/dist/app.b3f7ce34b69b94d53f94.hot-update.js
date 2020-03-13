webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/assets/js/functions.js\");\n\n\nfetch('http://localhost:9000/data/data.json').then(function (response) {\n  if (response.status !== 200) {\n    console.log('Looks like there was a problem. Status Code: ' + response.status);\n    return;\n  } // Examine the text in the response\n\n\n  response.json().then(function (data) {\n    console.log(data);\n  });\n})[\"catch\"](function (err) {\n  console.log('Fetch Error :-S', err);\n});\nvar fecthData = Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(function (event) {\n  var search = event.target.value || '';\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"appendData\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"groupDataByDepartment\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"filterDataBySearch\"])(_data_data__WEBPACK_IMPORTED_MODULE_0__, search)));\n  return event.target;\n}, 1000);\n\nwindow.onload = function (event) {\n  return fecthData(event);\n};\n\ndocument.querySelector('#input-search').addEventListener('keyup', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearSearchString\"])(event));\n});\ndocument.querySelector('#btn-clear').addEventListener('click', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearSearchString\"])(event, true));\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

})