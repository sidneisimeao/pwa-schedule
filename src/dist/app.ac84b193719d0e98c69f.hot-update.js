webpackHotUpdate("app",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/assets/js/functions.js\");\n\nvar fecthData = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(function (event) {\n  var search = event.target.value || '';\n  fetch('/data/data.json').then(function (response) {\n    console.log(response);\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"appendData\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"groupDataByDepartment\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"filterDataBySearch\"])(response, search)));\n  })[\"catch\"](function (err) {\n    console.log(err);\n  });\n  return event.target;\n}, 1000);\n\nwindow.onload = function (event) {\n  return fecthData(event);\n};\n\ndocument.querySelector('#input-search').addEventListener('keyup', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"clearSearchString\"])(event));\n});\ndocument.querySelector('#btn-clear').addEventListener('click', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"clearSearchString\"])(event, true));\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/functions.js":
/*!************************************!*\
  !*** ./src/assets/js/functions.js ***!
  \************************************/
/*! exports provided: filterDataBySearch, groupDataByDepartment, appendData, clearSearchString, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterDataBySearch\", function() { return filterDataBySearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupDataByDepartment\", function() { return groupDataByDepartment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendData\", function() { return appendData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSearchString\", function() { return clearSearchString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\nvar filterDataBySearch = function filterDataBySearch(data, str) {\n  if (!str) {\n    return data;\n  }\n\n  var search = str.toLowerCase();\n  return data.filter(function (fields) {\n    // destructuring\n    var departamento = fields.departamento,\n        ramal = fields.ramal,\n        nome = fields.nome; // Regex\n\n    var myReg = new RegExp(search + '.*'); // Department search\n\n    var myMatch = String(departamento).toLowerCase().match(myReg); // if not match search in number\n\n    myMatch = myMatch || String(ramal).toLowerCase().match(myReg); // if not match search in name\n\n    myMatch = myMatch || String(nome).toLowerCase().match(myReg); // if match\n\n    if (myMatch) {\n      return true;\n    }\n  });\n};\nvar groupDataByDepartment = function groupDataByDepartment(data) {\n  return data.reduce(function (department, currentValue) {\n    if (currentValue.departamento) {\n      department[currentValue.departamento] = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(department[currentValue.departamento] || []), [currentValue]);\n    }\n\n    return department;\n  }, []);\n};\nvar appendData = function appendData(data) {\n  // Container\n  var container = document.querySelector('#sha_temp_meta'); // for each department\n\n  Object.keys(data).forEach(function (department) {\n    // div.row\n    var row = document.createElement('div');\n    row.classList.add('row'); // div.col-12\n\n    var colHeading = document.createElement('div');\n    colHeading.classList.add('col-12'); // span.headingDepartment\n\n    var headingDepartment = document.createElement('span');\n    headingDepartment.classList.add('heading-department');\n    headingDepartment.textContent = department; // div.col-12 > span.headingDepartment\n\n    colHeading.appendChild(headingDepartment); // div.row > div.col-12 > span.headingDepartment\n\n    row.appendChild(colHeading); // for each member\n\n    data[department].forEach(function (member) {\n      // div.col-12.col-sm-4.sha_tile\n      var colMember = document.createElement('div');\n      colMember.classList.add('col-12', 'col-sm-4', 'sha_tile'); // div\n\n      var div = document.createElement('div'); // div.tile_number\n\n      var spanNumber = document.createElement('span');\n      spanNumber.classList.add('tile_number');\n      spanNumber.textContent = member.ramal; // div.tile_info\n\n      var spanInfo = document.createElement('span');\n      spanInfo.classList.add('tile_info');\n      spanInfo.textContent = member.nome; // span\n\n      var spanDepartment = document.createElement('span');\n      spanDepartment.classList.add('department');\n      spanDepartment.textContent = member.departamento; // span > span\n\n      spanInfo.appendChild(spanDepartment); // div > tile_number+tile_info\n\n      div.appendChild(spanNumber);\n      div.appendChild(spanInfo); // div.col-12.col-sm-4.sha_tile > div\n\n      colMember.appendChild(div); // div.row > div.col-12.col-sm-4.sha_tile\n\n      row.appendChild(colMember);\n    });\n    container.appendChild(row);\n  });\n};\nvar clearSearchString = function clearSearchString(event) {\n  var clearInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  // Container\n  var container = document.querySelector('#sha_temp_meta');\n  container.innerHTML = '';\n\n  if (clearInput) {\n    var input = document.querySelector('#input-search');\n    input.value = '';\n  }\n\n  return event;\n};\nfunction debounce(func, wait, immediate) {\n  var timeout = null;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/assets/js/functions.js?");

/***/ })

})