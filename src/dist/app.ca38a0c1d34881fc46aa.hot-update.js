webpackHotUpdate("app",{

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ramais__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramais */ \"./src/assets/js/ramais.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./src/assets/js/debounce.js\");\n\n\n\nvar filterDataBySearch = function filterDataBySearch(data, str) {\n  var search = str.toLowerCase();\n  return data.filter(function (fields) {\n    var departamento = fields.departamento,\n        ramal = fields.ramal,\n        nome = fields.nome;\n    var matchIn = departamento.match(/´${search}´/g); //.indexOf(textToSearch.toLowerCase()) >= 0;\n  });\n};\n\nvar matchSearch = filterDataBySearch(_ramais__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'TI');\nconsole.log(matchSearch);\n/*\nconst groupDataByDepartment = data =>\n  data.reduce((department, currentValue) => {\n    if (currentValue.departamento) {\n      department[currentValue.departamento] = [\n        ...(department[currentValue.departamento] || []),\n        currentValue,\n      ];\n    }\n    return department;\n  }, []);\n\nconst appendData = data => {\n  // Container\n  const container = document.querySelector('#sha_temp_meta');\n  // for each department\n  Object.keys(data).forEach(department => {\n    // div.row\n    let row = document.createElement('div');\n    row.classList.add('row');\n    // div.col-12\n    let colHeading = document.createElement('div');\n    colHeading.classList.add('col-12');\n    // span.headingDepartment\n    let headingDepartment = document.createElement('span');\n    headingDepartment.classList.add('heading-department');\n    headingDepartment.textContent = department;\n    // div.col-12 > span.headingDepartment\n    colHeading.appendChild(headingDepartment);\n    // div.row > div.col-12 > span.headingDepartment\n    row.appendChild(colHeading);\n    // for each member\n    data[department].forEach(member => {\n      // div.col-12.col-sm-4.sha_tile\n      let colMember = document.createElement('div');\n      colMember.classList.add('col-12', 'col-sm-4', 'sha_tile');\n      // div\n      let div = document.createElement('div');\n      // div.tile_number\n      let spanNumber = document.createElement('span');\n      spanNumber.classList.add('tile_number');\n      spanNumber.textContent = member.ramal;\n      // div.tile_info\n      let spanInfo = document.createElement('span');\n      spanInfo.classList.add('tile_info');\n      spanInfo.textContent = member.nome;\n      // span\n      let spanDepartment = document.createElement('span');\n      spanDepartment.classList.add('department');\n      spanDepartment.textContent = member.departamento;\n      // span > span\n      spanInfo.appendChild(spanDepartment);\n      // div > tile_number+tile_info\n      div.appendChild(spanNumber);\n      div.appendChild(spanInfo);\n      // div.col-12.col-sm-4.sha_tile > div\n      colMember.appendChild(div);\n      // div.row > div.col-12.col-sm-4.sha_tile\n      row.appendChild(colMember);\n    });\n    container.appendChild(row);\n  });\n};\n\n/*\nconst search = document\n  .querySelector('#input-search')\n  .addEventListener('keyup', event => {\n    console.log(event.target.value);\n  });\n\n  document\n  .querySelector('#input-search')\n  .addEventListener('keyup', searchOnKeyUp);\n\n\nvar searchOnKeyUp = debounce(event => {\n  //event.target.value;\n}, 1000);\n\nconst groupByDepartments = groupDataByDepartment(ramais);\nappendData(groupByDepartments);\n  */\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

})