﻿!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./src",t(t.s="./src/assets/js/app.js")}({"./src/assets/js/app.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/assets/js/functions.js");\n\nvar fecthData = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function (event) {\n  var search = event.target.value || \'\';\n  fetch(\'/data/data.json\').then(function (response) {\n    response.json().then(function (data) {\n      return Object(_functions__WEBPACK_IMPORTED_MODULE_0__["appendData"])(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["groupDataByDepartment"])(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["filterDataBySearch"])(data, search)));\n    });\n  })["catch"](function (err) {\n    console.log(err);\n  });\n  return event.target;\n}, 1000);\n\nwindow.onload = function (event) {\n  return fecthData(event);\n};\n\ndocument.querySelector(\'#input-search\').addEventListener(\'keyup\', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["clearSearchString"])(event));\n});\ndocument.querySelector(\'#btn-clear\').addEventListener(\'click\', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["clearSearchString"])(event, true));\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?')},"./src/assets/js/functions.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterDataBySearch\", function() { return filterDataBySearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupDataByDepartment\", function() { return groupDataByDepartment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendData\", function() { return appendData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSearchString\", function() { return clearSearchString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar filterDataBySearch = function filterDataBySearch(data, str) {\n  if (!str) {\n    return data;\n  }\n\n  var search = str.toLowerCase();\n  return data.filter(function (fields) {\n    // destructuring\n    var departamento = fields.departamento,\n        ramal = fields.ramal,\n        nome = fields.nome; // Regex\n\n    var myReg = new RegExp(search + '.*'); // Department search\n\n    var myMatch = String(departamento).toLowerCase().match(myReg); // if not match search in number\n\n    myMatch = myMatch || String(ramal).toLowerCase().match(myReg); // if not match search in name\n\n    myMatch = myMatch || String(nome).toLowerCase().match(myReg); // if match\n\n    if (myMatch) {\n      return true;\n    }\n  });\n};\nvar groupDataByDepartment = function groupDataByDepartment(data) {\n  return data.reduce(function (department, currentValue) {\n    if (currentValue.departamento) {\n      department[currentValue.departamento] = [].concat(_toConsumableArray(department[currentValue.departamento] || []), [currentValue]);\n    }\n\n    return department;\n  }, []);\n};\nvar appendData = function appendData(data) {\n  // Container\n  var container = document.querySelector('#sha_temp_meta'); // for each department\n\n  Object.keys(data).forEach(function (department) {\n    // div.row\n    var row = document.createElement('div');\n    row.classList.add('row'); // div.col-12\n\n    var colHeading = document.createElement('div');\n    colHeading.classList.add('col-12'); // span.headingDepartment\n\n    var headingDepartment = document.createElement('span');\n    headingDepartment.classList.add('heading-department');\n    headingDepartment.textContent = department; // div.col-12 > span.headingDepartment\n\n    colHeading.appendChild(headingDepartment); // div.row > div.col-12 > span.headingDepartment\n\n    row.appendChild(colHeading); // for each member\n\n    data[department].forEach(function (member) {\n      // div.col-12.col-sm-4.sha_tile\n      var colMember = document.createElement('div');\n      colMember.classList.add('col-12', 'col-sm-4', 'sha_tile'); // div\n\n      var div = document.createElement('div'); // div.tile_number\n\n      var spanNumber = document.createElement('span');\n      spanNumber.classList.add('tile_number');\n      spanNumber.textContent = member.ramal; // div.tile_info\n\n      var spanInfo = document.createElement('span');\n      spanInfo.classList.add('tile_info');\n      spanInfo.textContent = member.nome; // span\n\n      var spanDepartment = document.createElement('span');\n      spanDepartment.classList.add('department');\n      spanDepartment.textContent = member.departamento; // span > span\n\n      spanInfo.appendChild(spanDepartment); // div > tile_number+tile_info\n\n      div.appendChild(spanNumber);\n      div.appendChild(spanInfo); // div.col-12.col-sm-4.sha_tile > div\n\n      colMember.appendChild(div); // div.row > div.col-12.col-sm-4.sha_tile\n\n      row.appendChild(colMember);\n    });\n    container.appendChild(row);\n  });\n};\nvar clearSearchString = function clearSearchString(event) {\n  var clearInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  // Container\n  var container = document.querySelector('#sha_temp_meta');\n  container.innerHTML = '';\n\n  if (clearInput) {\n    var input = document.querySelector('#input-search');\n    input.value = '';\n  }\n\n  return event;\n};\nvar debounce = function debounce(func, wait, immediate) {\n  var timeout = null;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n};\n\n//# sourceURL=webpack:///./src/assets/js/functions.js?")}});
