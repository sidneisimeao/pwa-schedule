webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ramais__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramais */ \"./src/assets/js/ramais.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar groupByDepartments = _ramais__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reduce(function (department, currentValue) {\n  if (currentValue.departamento) {\n    department[currentValue.departamento] = [].concat(_toConsumableArray(department[currentValue.departamento] || []), [currentValue]);\n  }\n\n  return department;\n}, []);\nvar container = document.querySelector('#sha_temp_meta');\nObject.keys(groupByDepartments).forEach(function (department) {\n  var row = document.createElement('div');\n  row.classList.add('row');\n  var colDepartment = document.createElement('div');\n  row.classList.add('col-12');\n  var colMemberInfo = document.createElement('div');\n  row.classList.add('col-12');\n  groupByDepartments[department].forEach(function (members) {});\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

})