webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ramais__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramais */ \"./src/assets/js/ramais.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./src/assets/js/debounce.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n/*\nconst search = document\n  .querySelector('#input-search')\n  .addEventListener('keyup', event => {\n    console.log(event.target.value);\n  });\n  */\n\nvar searchOnKeyUp = Object(_debounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (event) {//event.target.value;\n}, 1000);\ndocument.querySelector('#input-search').addEventListener('keyup', searchOnKeyUp);\nvar groupByDepartments = _ramais__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reduce(function (department, currentValue) {\n  if (currentValue.departamento) {\n    department[currentValue.departamento] = [].concat(_toConsumableArray(department[currentValue.departamento] || []), [currentValue]);\n  }\n\n  return department;\n}, []);\n\nvar groupBy = function groupBy(data) {\n  return data.reduce(function (department, currentValue) {\n    if (currentValue.departamento) {\n      department[currentValue.departamento] = [].concat(_toConsumableArray(department[currentValue.departamento] || []), [currentValue]);\n    }\n\n    return department;\n  }, []);\n};\n\nvar container = document.querySelector('#sha_temp_meta'); // for each department\n\nObject.keys(groupByDepartments).forEach(function (department) {\n  // div.row\n  var row = document.createElement('div');\n  row.classList.add('row'); // div.col-12\n\n  var colHeading = document.createElement('div');\n  colHeading.classList.add('col-12'); // span.headingDepartment\n\n  var headingDepartment = document.createElement('span');\n  headingDepartment.classList.add('heading-department');\n  headingDepartment.textContent = department; // div.col-12 > span.headingDepartment\n\n  colHeading.appendChild(headingDepartment); // div.row > div.col-12 > span.headingDepartment\n\n  row.appendChild(colHeading); // for each member\n\n  groupByDepartments[department].forEach(function (member) {\n    // div.col-12.col-sm-4.sha_tile\n    var colMember = document.createElement('div');\n    colMember.classList.add('col-12', 'col-sm-4', 'sha_tile'); // div\n\n    var div = document.createElement('div'); // div.tile_number\n\n    var spanNumber = document.createElement('span');\n    spanNumber.classList.add('tile_number');\n    spanNumber.textContent = member.ramal; // div.tile_info\n\n    var spanInfo = document.createElement('span');\n    spanInfo.classList.add('tile_info');\n    spanInfo.textContent = member.nome; // span\n\n    var spanDepartment = document.createElement('span');\n    spanDepartment.classList.add('department');\n    spanDepartment.textContent = member.departamento; // span > span\n\n    spanInfo.appendChild(spanDepartment); // div > tile_number+tile_info\n\n    div.appendChild(spanNumber);\n    div.appendChild(spanInfo); // div.col-12.col-sm-4.sha_tile > div\n\n    colMember.appendChild(div); // div.row > div.col-12.col-sm-4.sha_tile\n\n    row.appendChild(colMember);\n  });\n  container.appendChild(row);\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/debounce.js":
/*!***********************************!*\
  !*** ./src/assets/js/debounce.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(func, wait, immediate) {\n  var timeout;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/assets/js/debounce.js?");

/***/ }),

/***/ "./src/assets/js/ramais.js":
/*!*********************************!*\
  !*** ./src/assets/js/ramais.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ramais = [{\n  departamento: 'ASSUNTOS ESPECIAIS',\n  nome: 'Adelaide',\n  ramal: 8417\n}, {\n  departamento: 'VENDAS EXTERNAS',\n  nome: 'Adriana',\n  ramal: 8405\n}, {\n  departamento: 'VENDAS EXTERNAS',\n  nome: 'Alana',\n  ramal: 8546\n}, {\n  departamento: 'FISCAL',\n  nome: 'Alessandra Franchi',\n  ramal: 8402\n}, {\n  departamento: 'RH',\n  nome: 'Alex Lemes',\n  ramal: 8447\n}, {\n  departamento: 'TI',\n  nome: 'Alex Nascimento',\n  ramal: 8500\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Alexandre Vilas Boas',\n  ramal: 8433\n}, {\n  departamento: 'VENDAS',\n  nome: 'Aliandro',\n  ramal: 8438\n}, {\n  departamento: 'JURIDICO',\n  nome: 'Alice',\n  ramal: 8453\n}, {\n  departamento: 'TI',\n  nome: 'Aloizio',\n  ramal: 8430\n}, {\n  departamento: 'DP',\n  nome: 'Amanda',\n  ramal: 8446\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'Amanda',\n  ramal: 8462\n}, {\n  departamento: 'CONTABILIDADE',\n  nome: 'Ana Ferreira',\n  ramal: 8418\n}, {\n  departamento: 'CONTABILIDADE',\n  nome: 'Ana Flavia',\n  ramal: 8587\n}, {\n  departamento: 'FISCAL',\n  nome: 'Ana Metidieri',\n  ramal: 8585\n}, {\n  departamento: 'TI',\n  nome: 'André',\n  ramal: 8498\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Andressa',\n  ramal: 8595\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Andreza',\n  ramal: 8494\n}, {\n  departamento: 'DP',\n  nome: 'Angela',\n  ramal: 8445\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Benedito',\n  ramal: 8476\n}, {\n  departamento: 'CONTROLADORIA',\n  nome: 'Bruna',\n  ramal: 8436\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Carla',\n  ramal: 8594\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Caroline',\n  ramal: 8531\n}, {\n  departamento: 'SAM',\n  nome: 'Cecilía',\n  ramal: 8467\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Cesár Rossi',\n  ramal: 8439\n}, {\n  departamento: 'PROJETOS TI',\n  nome: 'Cintia',\n  ramal: 8499\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'Claudia',\n  ramal: 8441\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Claudia Lemes',\n  ramal: 8510\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Clovis',\n  ramal: 8477\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Cristiane',\n  ramal: 8522\n}, {\n  departamento: 'COMEX',\n  nome: 'Daiana',\n  ramal: 8463\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Daniel',\n  ramal: 8423\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Daniel Radaeli',\n  ramal: 8403\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Danielle',\n  ramal: 8435\n}, {\n  departamento: 'RECEPÇÂO',\n  nome: 'Edna',\n  ramal: 8399\n}, {\n  departamento: 'CONTROLADORIA',\n  nome: 'Diziane Cardosos',\n  ramal: 8518\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Douglas',\n  ramal: 8497\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Dulce',\n  ramal: 8415\n}, {\n  departamento: 'FISCAL',\n  nome: 'Ebert',\n  ramal: 8593\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Edgar',\n  ramal: 8484\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Elaine',\n  ramal: 8528\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Eliana Vasconcelos',\n  ramal: 8416\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Evelyn',\n  ramal: 8588\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Expedicao',\n  ramal: 8478\n}, {\n  departamento: 'E-COMMERCE',\n  nome: 'Fabiana',\n  ramal: 8485\n}, {\n  departamento: 'FATURAMENTO',\n  nome: 'Fabio Santos',\n  ramal: 8460\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Fernanda',\n  ramal: 8599\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Fernando Villas Boas',\n  ramal: 8422\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Francielle',\n  ramal: 8544\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Francine',\n  ramal: 8527\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Geisa',\n  ramal: 8421\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Geizebel',\n  ramal: 8542\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Geomara',\n  ramal: 8526\n}, {\n  departamento: 'CONTABILIDADE',\n  nome: 'Gisele Miguel',\n  ramal: 8419\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Giulia',\n  ramal: 8524\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'Grace Kelly',\n  ramal: 8426\n}, {\n  departamento: 'SAM',\n  nome: 'Grazielle',\n  ramal: 8473\n}, {\n  departamento: 'PROJETOS TI',\n  nome: 'Helder',\n  ramal: 8424\n}, {\n  departamento: 'CREDITO',\n  nome: 'Hyandra',\n  ramal: 8469\n}, {\n  departamento: 'COMEX',\n  nome: 'Isabelle',\n  ramal: 8596\n}, {\n  departamento: 'PROJETOS TI',\n  nome: 'Ivan',\n  ramal: 8579\n}, {\n  departamento: 'SAM',\n  nome: 'Jamille',\n  ramal: 8474\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Janaina',\n  ramal: 8512\n}, {\n  departamento: 'FATURAMENTO',\n  nome: 'Jenifer Marques',\n  ramal: 8529\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Joao Batista',\n  ramal: 8443\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Joao Duarte',\n  ramal: 8412\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'João Gabriel',\n  ramal: 8425\n}, {\n  departamento: 'FISCAL',\n  nome: 'Jonas',\n  ramal: 8507\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Josiane',\n  ramal: 8547\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Joyce',\n  ramal: 8543\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Juliana',\n  ramal: 8523\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Junior',\n  ramal: 8598\n}, {\n  departamento: '',\n  nome: '',\n  ramal: null\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Kamilla',\n  ramal: 8589\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Karina',\n  ramal: 8566\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Laynara',\n  ramal: 8540\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Leandro',\n  ramal: 8549\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Leonardo Severini',\n  ramal: 8407\n}, {\n  departamento: 'TRADE',\n  nome: 'Leticia',\n  ramal: 8597\n}, {\n  departamento: 'CONTABILIDADE',\n  nome: 'Leticia Miranda',\n  ramal: 8586\n}, {\n  departamento: 'FATURAMENTO',\n  nome: 'Liliane',\n  ramal: 8535\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Liliane',\n  ramal: 8480\n}, {\n  departamento: 'TI',\n  nome: 'Luan',\n  ramal: 8429\n}, {\n  departamento: 'VENDAS BALCAO',\n  nome: 'Lucatelli',\n  ramal: 8454\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Lucia',\n  ramal: 8456\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Luiz',\n  ramal: 8434\n}, {\n  departamento: 'JURIDICO',\n  nome: 'Luiza',\n  ramal: 8449\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Manoel Jr.',\n  ramal: 8483\n}, {\n  departamento: 'TI',\n  nome: 'Marcelo',\n  ramal: 8577\n}, {\n  departamento: 'CONTROLADORIA',\n  nome: 'Marcilayne Cassemiro',\n  ramal: 8495\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Marcos',\n  ramal: 8479\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Marcos Guidi',\n  ramal: 8408\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Maria Lucia',\n  ramal: 8420\n}, {\n  departamento: 'SAM',\n  nome: 'Mariana',\n  ramal: 8514\n}, {\n  departamento: 'TRADE',\n  nome: 'Mariana',\n  ramal: 8431\n}, {\n  departamento: 'DP',\n  nome: 'Mariane',\n  ramal: 8525\n}, {\n  departamento: 'SAM',\n  nome: 'Marilia',\n  ramal: 8513\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Mayra',\n  ramal: 8532\n}, {\n  departamento: 'RH',\n  nome: 'Michele',\n  ramal: 8444\n}, {\n  departamento: 'TRADE',\n  nome: 'Michele',\n  ramal: 8466\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Milena',\n  ramal: 8592\n}, {\n  departamento: 'FINANCEIRO',\n  nome: 'Munique',\n  ramal: 8413\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Nayara',\n  ramal: 8530\n}, {\n  departamento: 'SAM',\n  nome: 'Nicole',\n  ramal: 8516\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Nilton',\n  ramal: 8428\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Paloma',\n  ramal: 8538\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Paula',\n  ramal: 8550\n}, {\n  departamento: 'FISCAL',\n  nome: 'Poliana',\n  ramal: 8584\n}, {\n  departamento: 'PORTARIA',\n  nome: 'Portaria',\n  ramal: 8489\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Rafaella',\n  ramal: 8442\n}, {\n  departamento: '',\n  nome: '',\n  ramal: null\n}, {\n  departamento: 'REFEITORIO',\n  nome: 'Refeitório',\n  ramal: 8487\n}, {\n  departamento: 'TI',\n  nome: 'Renan',\n  ramal: 8578\n}, {\n  departamento: 'CREDITO',\n  nome: 'Roane',\n  ramal: 8427\n}, {\n  departamento: 'LOGISTICA',\n  nome: 'Rogerio',\n  ramal: 8459\n}, {\n  departamento: 'CREDITO',\n  nome: 'Rose',\n  ramal: 8491\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Rose',\n  ramal: 8521\n}, {\n  departamento: 'FISCAL',\n  nome: 'Rubiana',\n  ramal: 8580\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'Samantha',\n  ramal: 8465\n}, {\n  departamento: 'CREDITO',\n  nome: 'Sarah',\n  ramal: 8461\n}, {\n  departamento: 'VENDAS ADM',\n  nome: 'Sebastião',\n  ramal: 8468\n}, {\n  departamento: 'PROJETOS TI',\n  nome: 'Sidney',\n  ramal: 8534\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Sr. Manoel',\n  ramal: 8411\n}, {\n  departamento: 'SAM',\n  nome: 'Suane',\n  ramal: 8450\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Suzana',\n  ramal: 8548\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Taismilaine',\n  ramal: 8437\n}, {\n  departamento: 'SAM',\n  nome: 'Talisson',\n  ramal: 8471\n}, {\n  departamento: 'COMPRAS',\n  nome: 'Tatiane',\n  ramal: 8404\n}, {\n  departamento: 'RH',\n  nome: 'Técnico Segurança',\n  ramal: 8486\n}, {\n  departamento: 'E-COMMERCE',\n  nome: 'Thais',\n  ramal: 8488\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Tiago',\n  ramal: 8545\n}, {\n  departamento: 'FATURAMENTO',\n  nome: 'Tiago Marques',\n  ramal: 8455\n}, {\n  departamento: 'TESOURARIA',\n  nome: 'Ully',\n  ramal: 8406\n}, {\n  departamento: 'VENDAS BALCAO',\n  nome: 'Valdemar',\n  ramal: 8451\n}, {\n  departamento: 'VENDAS EXTENAS',\n  nome: 'Vanessa',\n  ramal: 8560\n}, {\n  departamento: 'DIRETORIA',\n  nome: 'Vitor Severini',\n  ramal: 8536\n}, {\n  departamento: 'TRANSPORTE',\n  nome: 'Wagner',\n  ramal: 8481\n}, {\n  departamento: 'FISCAL',\n  nome: 'Wesley',\n  ramal: 8448\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ramais);\n\n//# sourceURL=webpack:///./src/assets/js/ramais.js?");

/***/ })

})