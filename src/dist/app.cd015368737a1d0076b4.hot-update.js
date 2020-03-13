webpackHotUpdate("app",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/sidnei/Área de Trabalho/pwa-schedule/src/assets/js/app.js: Can not use keyword 'await' outside an async function (12:12)\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[36mconst\\u001b[39m getData \\u001b[33m=\\u001b[39m async () \\u001b[33m=>\\u001b[39m await fetch(\\u001b[32m`http://localhost:9000/data/data.json`\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39mconsole\\u001b[33m.\\u001b[39mlog(await getData())\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[36mconst\\u001b[39m fecthData \\u001b[33m=\\u001b[39m debounce(event \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m  \\u001b[36mconst\\u001b[39m search \\u001b[33m=\\u001b[39m event\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mvalue \\u001b[33m||\\u001b[39m \\u001b[32m''\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Parser.raiseWithData (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Parser.raise (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:710:17)\\n    at Parser.checkReservedWord (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10627:14)\\n    at Parser.parseIdentifierName (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10589:12)\\n    at Parser.parseIdentifier (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10561:23)\\n    at Parser.parseExprAtom (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9736:27)\\n    at Parser.parseExprSubscripts (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Parser.parseMaybeUnary (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9459:21)\\n    at Parser.parseExprOps (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9329:23)\\n    at Parser.parseMaybeConditional (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9302:23)\\n    at Parser.parseMaybeAssign (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9257:21)\\n    at Parser.parseExprListItem (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10553:18)\\n    at Parser.parseCallExpressionArguments (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9660:22)\\n    at Parser.parseSubscript (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9566:31)\\n    at Parser.parseSubscripts (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9496:19)\\n    at Parser.parseExprSubscripts (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9485:17)\\n    at Parser.parseMaybeUnary (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9459:21)\\n    at Parser.parseExprOps (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9329:23)\\n    at Parser.parseMaybeConditional (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9302:23)\\n    at Parser.parseMaybeAssign (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9257:21)\\n    at Parser.parseExpression (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:9209:23)\\n    at Parser.parseStatementContent (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:11045:23)\\n    at Parser.parseStatement (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:11490:25)\\n    at Parser.parseBlockBody (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:11477:10)\\n    at Parser.parseTopLevel (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:10847:10)\\n    at Parser.parse (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:12452:10)\\n    at parse (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/parser/lib/index.js:12503:38)\\n    at parser (/home/sidnei/Área de Trabalho/pwa-schedule/node_modules/@babel/core/lib/parser/index.js:54:34)\");\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/functions.js":
false,

/***/ "./src/data/data.json":
false

})