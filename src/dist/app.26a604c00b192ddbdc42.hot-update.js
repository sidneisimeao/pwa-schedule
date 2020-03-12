webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ramais__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramais */ \"./src/assets/js/ramais.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./src/assets/js/debounce.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar groupByDepartments = _ramais__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reduce(function (department, currentValue) {\n  if (currentValue.departamento) {\n    department[currentValue.departamento] = [].concat(_toConsumableArray(department[currentValue.departamento] || []), [currentValue]);\n  }\n\n  return department;\n}, []);\nvar container = document.querySelector('#sha_temp_meta'); // for each department\n\nObject.keys(groupByDepartments).forEach(function (department) {\n  // div.row\n  var row = document.createElement('div');\n  row.classList.add('row'); // div.col-12\n\n  var colHeading = document.createElement('div');\n  colHeading.classList.add('col-12'); // span.headingDepartment\n\n  var headingDepartment = document.createElement('span');\n  headingDepartment.classList.add('heading-department');\n  headingDepartment.textContent = department; // div.col-12 > span.headingDepartment\n\n  colHeading.appendChild(headingDepartment); // div.row > div.col-12 > span.headingDepartment\n\n  row.appendChild(colHeading); // for each member\n\n  groupByDepartments[department].forEach(function (member) {\n    // div.col-12.col-sm-4.sha_tile\n    var colMember = document.createElement('div');\n    colMember.classList.add('col-12', 'col-sm-4', 'sha_tile'); // div\n\n    var div = document.createElement('div'); // div.tile_number\n\n    var spanNumber = document.createElement('span');\n    spanNumber.classList.add('tile_number');\n    spanNumber.textContent = member.ramal; // div.tile_info\n\n    var spanInfo = document.createElement('span');\n    spanInfo.classList.add('tile_info');\n    spanInfo.textContent = member.nome; // span\n\n    var spanDepartment = document.createElement('span');\n    spanDepartment.classList.add('department');\n    spanDepartment.textContent = member.departamento; // span > span\n\n    spanInfo.appendChild(spanDepartment); // div > tile_number+tile_info\n\n    div.appendChild(spanNumber);\n    div.appendChild(spanInfo); // div.col-12.col-sm-4.sha_tile > div\n\n    colMember.appendChild(div); // div.row > div.col-12.col-sm-4.sha_tile\n\n    row.appendChild(colMember);\n  });\n  container.appendChild(row);\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/debounce.js":
/*!***********************************!*\
  !*** ./src/assets/js/debounce.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(func, wait, immediate) {\n  var timeout;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/assets/js/debounce.js?");

/***/ })

})