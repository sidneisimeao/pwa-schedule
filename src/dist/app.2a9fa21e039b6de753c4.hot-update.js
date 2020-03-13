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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.json\");\nvar _data_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/data */ \"./src/data/data.json\", 1);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/assets/js/functions.js\");\n\n\nvar fecthData = Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(function (event) {\n  var search = event.target.value || '';\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"appendData\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"groupDataByDepartment\"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"filterDataBySearch\"])(_data_data__WEBPACK_IMPORTED_MODULE_0__, search)));\n  return event.target;\n}, 1000);\n\nwindow.onload = function (event) {\n  return fecthData(event);\n};\n\ndocument.querySelector('#input-search').addEventListener('keyup', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearSearchString\"])(event));\n});\ndocument.querySelector('#btn-clear').addEventListener('click', function (event) {\n  return fecthData(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearSearchString\"])(event, true));\n});\nfetch('/data/data.json').then(function (response) {\n  console.log(response);\n})[\"catch\"](function (err) {\n  console.log(err);\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/functions.js":
/*!************************************!*\
  !*** ./src/assets/js/functions.js ***!
  \************************************/
/*! exports provided: filterDataBySearch, groupDataByDepartment, appendData, clearSearchString, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterDataBySearch\", function() { return filterDataBySearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupDataByDepartment\", function() { return groupDataByDepartment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendData\", function() { return appendData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSearchString\", function() { return clearSearchString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\nvar filterDataBySearch = function filterDataBySearch(data, str) {\n  if (!str) {\n    return data;\n  }\n\n  var search = str.toLowerCase();\n  return data.filter(function (fields) {\n    // destructuring\n    var departamento = fields.departamento,\n        ramal = fields.ramal,\n        nome = fields.nome; // Regex\n\n    var myReg = new RegExp(search + '.*'); // Department search\n\n    var myMatch = String(departamento).toLowerCase().match(myReg); // if not match search in number\n\n    myMatch = myMatch || String(ramal).toLowerCase().match(myReg); // if not match search in name\n\n    myMatch = myMatch || String(nome).toLowerCase().match(myReg); // if match\n\n    if (myMatch) {\n      return true;\n    }\n  });\n};\nvar groupDataByDepartment = function groupDataByDepartment(data) {\n  return data.reduce(function (department, currentValue) {\n    if (currentValue.departamento) {\n      department[currentValue.departamento] = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(department[currentValue.departamento] || []), [currentValue]);\n    }\n\n    return department;\n  }, []);\n};\nvar appendData = function appendData(data) {\n  // Container\n  var container = document.querySelector('#sha_temp_meta'); // for each department\n\n  Object.keys(data).forEach(function (department) {\n    // div.row\n    var row = document.createElement('div');\n    row.classList.add('row'); // div.col-12\n\n    var colHeading = document.createElement('div');\n    colHeading.classList.add('col-12'); // span.headingDepartment\n\n    var headingDepartment = document.createElement('span');\n    headingDepartment.classList.add('heading-department');\n    headingDepartment.textContent = department; // div.col-12 > span.headingDepartment\n\n    colHeading.appendChild(headingDepartment); // div.row > div.col-12 > span.headingDepartment\n\n    row.appendChild(colHeading); // for each member\n\n    data[department].forEach(function (member) {\n      // div.col-12.col-sm-4.sha_tile\n      var colMember = document.createElement('div');\n      colMember.classList.add('col-12', 'col-sm-4', 'sha_tile'); // div\n\n      var div = document.createElement('div'); // div.tile_number\n\n      var spanNumber = document.createElement('span');\n      spanNumber.classList.add('tile_number');\n      spanNumber.textContent = member.ramal; // div.tile_info\n\n      var spanInfo = document.createElement('span');\n      spanInfo.classList.add('tile_info');\n      spanInfo.textContent = member.nome; // span\n\n      var spanDepartment = document.createElement('span');\n      spanDepartment.classList.add('department');\n      spanDepartment.textContent = member.departamento; // span > span\n\n      spanInfo.appendChild(spanDepartment); // div > tile_number+tile_info\n\n      div.appendChild(spanNumber);\n      div.appendChild(spanInfo); // div.col-12.col-sm-4.sha_tile > div\n\n      colMember.appendChild(div); // div.row > div.col-12.col-sm-4.sha_tile\n\n      row.appendChild(colMember);\n    });\n    container.appendChild(row);\n  });\n};\nvar clearSearchString = function clearSearchString(event) {\n  var clearInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  // Container\n  var container = document.querySelector('#sha_temp_meta');\n  container.innerHTML = '';\n\n  if (clearInput) {\n    var input = document.querySelector('#input-search');\n    input.value = '';\n  }\n\n  return event;\n};\nfunction debounce(func, wait, immediate) {\n  var timeout = null;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/assets/js/functions.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"departamento\\\":\\\"ASSUNTOS ESPECIAIS\\\",\\\"nome\\\":\\\"Adelaide\\\",\\\"ramal\\\":8417},{\\\"departamento\\\":\\\"VENDAS EXTERNAS\\\",\\\"nome\\\":\\\"Adriana\\\",\\\"ramal\\\":8405},{\\\"departamento\\\":\\\"VENDAS EXTERNAS\\\",\\\"nome\\\":\\\"Alana\\\",\\\"ramal\\\":8546},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Alessandra Franchi\\\",\\\"ramal\\\":8402},{\\\"departamento\\\":\\\"RH\\\",\\\"nome\\\":\\\"Alex Lemes\\\",\\\"ramal\\\":8447},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"Alex Nascimento\\\",\\\"ramal\\\":8500},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Alexandre Vilas Boas\\\",\\\"ramal\\\":8433},{\\\"departamento\\\":\\\"VENDAS\\\",\\\"nome\\\":\\\"Aliandro\\\",\\\"ramal\\\":8438},{\\\"departamento\\\":\\\"JURIDICO\\\",\\\"nome\\\":\\\"Alice\\\",\\\"ramal\\\":8453},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"Aloizio\\\",\\\"ramal\\\":8430},{\\\"departamento\\\":\\\"DP\\\",\\\"nome\\\":\\\"Amanda\\\",\\\"ramal\\\":8446},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"Amanda\\\",\\\"ramal\\\":8462},{\\\"departamento\\\":\\\"CONTABILIDADE\\\",\\\"nome\\\":\\\"Ana Ferreira\\\",\\\"ramal\\\":8418},{\\\"departamento\\\":\\\"CONTABILIDADE\\\",\\\"nome\\\":\\\"Ana Flavia\\\",\\\"ramal\\\":8587},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Ana Metidieri\\\",\\\"ramal\\\":8585},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"André\\\",\\\"ramal\\\":8498},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Andressa\\\",\\\"ramal\\\":8595},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Andreza\\\",\\\"ramal\\\":8494},{\\\"departamento\\\":\\\"DP\\\",\\\"nome\\\":\\\"Angela\\\",\\\"ramal\\\":8445},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Benedito\\\",\\\"ramal\\\":8476},{\\\"departamento\\\":\\\"CONTROLADORIA\\\",\\\"nome\\\":\\\"Bruna\\\",\\\"ramal\\\":8436},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Carla\\\",\\\"ramal\\\":8594},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Caroline\\\",\\\"ramal\\\":8531},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Cecilía\\\",\\\"ramal\\\":8467},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Cesár Rossi\\\",\\\"ramal\\\":8439},{\\\"departamento\\\":\\\"PROJETOS TI\\\",\\\"nome\\\":\\\"Cintia\\\",\\\"ramal\\\":8499},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"Claudia\\\",\\\"ramal\\\":8441},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Claudia Lemes\\\",\\\"ramal\\\":8510},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Clovis\\\",\\\"ramal\\\":8477},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Cristiane\\\",\\\"ramal\\\":8522},{\\\"departamento\\\":\\\"COMEX\\\",\\\"nome\\\":\\\"Daiana\\\",\\\"ramal\\\":8463},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Daniel\\\",\\\"ramal\\\":8423},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Daniel Radaeli\\\",\\\"ramal\\\":8403},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Danielle\\\",\\\"ramal\\\":8435},{\\\"departamento\\\":\\\"RECEPÇÂO\\\",\\\"nome\\\":\\\"Edna\\\",\\\"ramal\\\":8399},{\\\"departamento\\\":\\\"CONTROLADORIA\\\",\\\"nome\\\":\\\"Diziane Cardosos\\\",\\\"ramal\\\":8518},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Douglas\\\",\\\"ramal\\\":8497},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Dulce\\\",\\\"ramal\\\":8415},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Ebert\\\",\\\"ramal\\\":8593},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Edgar\\\",\\\"ramal\\\":8484},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Elaine\\\",\\\"ramal\\\":8528},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Eliana Vasconcelos\\\",\\\"ramal\\\":8416},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Evelyn\\\",\\\"ramal\\\":8588},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Expedicao\\\",\\\"ramal\\\":8478},{\\\"departamento\\\":\\\"E-COMMERCE\\\",\\\"nome\\\":\\\"Fabiana\\\",\\\"ramal\\\":8485},{\\\"departamento\\\":\\\"FATURAMENTO\\\",\\\"nome\\\":\\\"Fabio Santos\\\",\\\"ramal\\\":8460},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Fernanda\\\",\\\"ramal\\\":8599},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Fernando Villas Boas\\\",\\\"ramal\\\":8422},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Francielle\\\",\\\"ramal\\\":8544},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Francine\\\",\\\"ramal\\\":8527},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Geisa\\\",\\\"ramal\\\":8421},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Geizebel\\\",\\\"ramal\\\":8542},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Geomara\\\",\\\"ramal\\\":8526},{\\\"departamento\\\":\\\"CONTABILIDADE\\\",\\\"nome\\\":\\\"Gisele Miguel\\\",\\\"ramal\\\":8419},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Giulia\\\",\\\"ramal\\\":8524},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"Grace Kelly\\\",\\\"ramal\\\":8426},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Grazielle\\\",\\\"ramal\\\":8473},{\\\"departamento\\\":\\\"PROJETOS TI\\\",\\\"nome\\\":\\\"Helder\\\",\\\"ramal\\\":8424},{\\\"departamento\\\":\\\"CREDITO\\\",\\\"nome\\\":\\\"Hyandra\\\",\\\"ramal\\\":8469},{\\\"departamento\\\":\\\"COMEX\\\",\\\"nome\\\":\\\"Isabelle\\\",\\\"ramal\\\":8596},{\\\"departamento\\\":\\\"PROJETOS TI\\\",\\\"nome\\\":\\\"Ivan\\\",\\\"ramal\\\":8579},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Jamille\\\",\\\"ramal\\\":8474},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Janaina\\\",\\\"ramal\\\":8512},{\\\"departamento\\\":\\\"FATURAMENTO\\\",\\\"nome\\\":\\\"Jenifer Marques\\\",\\\"ramal\\\":8529},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Joao Batista\\\",\\\"ramal\\\":8443},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Joao Duarte\\\",\\\"ramal\\\":8412},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"João Gabriel\\\",\\\"ramal\\\":8425},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Jonas\\\",\\\"ramal\\\":8507},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Josiane\\\",\\\"ramal\\\":8547},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Joyce\\\",\\\"ramal\\\":8543},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Juliana\\\",\\\"ramal\\\":8523},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Junior\\\",\\\"ramal\\\":8598},{\\\"departamento\\\":\\\"\\\",\\\"nome\\\":\\\"\\\",\\\"ramal\\\":null},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Kamilla\\\",\\\"ramal\\\":8589},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Karina\\\",\\\"ramal\\\":8566},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Laynara\\\",\\\"ramal\\\":8540},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Leandro\\\",\\\"ramal\\\":8549},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Leonardo Severini\\\",\\\"ramal\\\":8407},{\\\"departamento\\\":\\\"TRADE\\\",\\\"nome\\\":\\\"Leticia\\\",\\\"ramal\\\":8597},{\\\"departamento\\\":\\\"CONTABILIDADE\\\",\\\"nome\\\":\\\"Leticia Miranda\\\",\\\"ramal\\\":8586},{\\\"departamento\\\":\\\"FATURAMENTO\\\",\\\"nome\\\":\\\"Liliane\\\",\\\"ramal\\\":8535},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Liliane\\\",\\\"ramal\\\":8480},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"Luan\\\",\\\"ramal\\\":8429},{\\\"departamento\\\":\\\"VENDAS BALCAO\\\",\\\"nome\\\":\\\"Lucatelli\\\",\\\"ramal\\\":8454},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Lucia\\\",\\\"ramal\\\":8456},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Luiz\\\",\\\"ramal\\\":8434},{\\\"departamento\\\":\\\"JURIDICO\\\",\\\"nome\\\":\\\"Luiza\\\",\\\"ramal\\\":8449},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Manoel Jr.\\\",\\\"ramal\\\":8483},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"Marcelo\\\",\\\"ramal\\\":8577},{\\\"departamento\\\":\\\"CONTROLADORIA\\\",\\\"nome\\\":\\\"Marcilayne Cassemiro\\\",\\\"ramal\\\":8495},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Marcos\\\",\\\"ramal\\\":8479},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Marcos Guidi\\\",\\\"ramal\\\":8408},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Maria Lucia\\\",\\\"ramal\\\":8420},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Mariana\\\",\\\"ramal\\\":8514},{\\\"departamento\\\":\\\"TRADE\\\",\\\"nome\\\":\\\"Mariana\\\",\\\"ramal\\\":8431},{\\\"departamento\\\":\\\"DP\\\",\\\"nome\\\":\\\"Mariane\\\",\\\"ramal\\\":8525},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Marilia\\\",\\\"ramal\\\":8513},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Mayra\\\",\\\"ramal\\\":8532},{\\\"departamento\\\":\\\"RH\\\",\\\"nome\\\":\\\"Michele\\\",\\\"ramal\\\":8444},{\\\"departamento\\\":\\\"TRADE\\\",\\\"nome\\\":\\\"Michele\\\",\\\"ramal\\\":8466},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Milena\\\",\\\"ramal\\\":8592},{\\\"departamento\\\":\\\"FINANCEIRO\\\",\\\"nome\\\":\\\"Munique\\\",\\\"ramal\\\":8413},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Nayara\\\",\\\"ramal\\\":8530},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Nicole\\\",\\\"ramal\\\":8516},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Nilton\\\",\\\"ramal\\\":8428},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Paloma\\\",\\\"ramal\\\":8538},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Paula\\\",\\\"ramal\\\":8550},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Poliana\\\",\\\"ramal\\\":8584},{\\\"departamento\\\":\\\"PORTARIA\\\",\\\"nome\\\":\\\"Portaria\\\",\\\"ramal\\\":8489},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Rafaella\\\",\\\"ramal\\\":8442},{\\\"departamento\\\":\\\"\\\",\\\"nome\\\":\\\"\\\",\\\"ramal\\\":null},{\\\"departamento\\\":\\\"REFEITORIO\\\",\\\"nome\\\":\\\"Refeitório\\\",\\\"ramal\\\":8487},{\\\"departamento\\\":\\\"TI\\\",\\\"nome\\\":\\\"Renan\\\",\\\"ramal\\\":8578},{\\\"departamento\\\":\\\"CREDITO\\\",\\\"nome\\\":\\\"Roane\\\",\\\"ramal\\\":8427},{\\\"departamento\\\":\\\"LOGISTICA\\\",\\\"nome\\\":\\\"Rogerio\\\",\\\"ramal\\\":8459},{\\\"departamento\\\":\\\"CREDITO\\\",\\\"nome\\\":\\\"Rose\\\",\\\"ramal\\\":8491},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Rose\\\",\\\"ramal\\\":8521},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Rubiana\\\",\\\"ramal\\\":8580},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"Samantha\\\",\\\"ramal\\\":8465},{\\\"departamento\\\":\\\"CREDITO\\\",\\\"nome\\\":\\\"Sarah\\\",\\\"ramal\\\":8461},{\\\"departamento\\\":\\\"VENDAS ADM\\\",\\\"nome\\\":\\\"Sebastião\\\",\\\"ramal\\\":8468},{\\\"departamento\\\":\\\"PROJETOS TI\\\",\\\"nome\\\":\\\"Sidney\\\",\\\"ramal\\\":8534},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Sr. Manoel\\\",\\\"ramal\\\":8411},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Suane\\\",\\\"ramal\\\":8450},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Suzana\\\",\\\"ramal\\\":8548},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Taismilaine\\\",\\\"ramal\\\":8437},{\\\"departamento\\\":\\\"SAM\\\",\\\"nome\\\":\\\"Talisson\\\",\\\"ramal\\\":8471},{\\\"departamento\\\":\\\"COMPRAS\\\",\\\"nome\\\":\\\"Tatiane\\\",\\\"ramal\\\":8404},{\\\"departamento\\\":\\\"RH\\\",\\\"nome\\\":\\\"Técnico Segurança\\\",\\\"ramal\\\":8486},{\\\"departamento\\\":\\\"E-COMMERCE\\\",\\\"nome\\\":\\\"Thais\\\",\\\"ramal\\\":8488},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Tiago\\\",\\\"ramal\\\":8545},{\\\"departamento\\\":\\\"FATURAMENTO\\\",\\\"nome\\\":\\\"Tiago Marques\\\",\\\"ramal\\\":8455},{\\\"departamento\\\":\\\"TESOURARIA\\\",\\\"nome\\\":\\\"Ully\\\",\\\"ramal\\\":8406},{\\\"departamento\\\":\\\"VENDAS BALCAO\\\",\\\"nome\\\":\\\"Valdemar\\\",\\\"ramal\\\":8451},{\\\"departamento\\\":\\\"VENDAS EXTENAS\\\",\\\"nome\\\":\\\"Vanessa\\\",\\\"ramal\\\":8560},{\\\"departamento\\\":\\\"DIRETORIA\\\",\\\"nome\\\":\\\"Vitor Severini\\\",\\\"ramal\\\":8536},{\\\"departamento\\\":\\\"TRANSPORTE\\\",\\\"nome\\\":\\\"Wagner\\\",\\\"ramal\\\":8481},{\\\"departamento\\\":\\\"FISCAL\\\",\\\"nome\\\":\\\"Wesley\\\",\\\"ramal\\\":8448}]\");\n\n//# sourceURL=webpack:///./src/data/data.json?");

/***/ })

})