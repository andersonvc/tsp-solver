(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm.js":
/*!**********************!*\
  !*** ../pkg/wasm.js ***!
  \**********************/
/*! exports provided: greet, __wbg_alert_f5393de24ed74e50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n/* harmony import */ var _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_bg.js */ \"../pkg/wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_f5393de24ed74e50\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_f5393de24ed74e50\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm.js?");

/***/ }),

/***/ "../pkg/wasm_bg.js":
/*!*************************!*\
  !*** ../pkg/wasm_bg.js ***!
  \*************************/
/*! exports provided: greet, __wbg_alert_f5393de24ed74e50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_f5393de24ed74e50\", function() { return __wbg_alert_f5393de24ed74e50; });\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nconst __wbg_alert_f5393de24ed74e50 = function(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_bg.js?");

/***/ }),

/***/ "../pkg/wasm_bg.wasm":
/*!***************************!*\
  !*** ../pkg/wasm_bg.wasm ***!
  \***************************/
/*! exports provided: memory, greet */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_bg.js */ \"../pkg/wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"./node_modules/webpack/lib/webpack.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nwasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n\nconst canvas = document.getElementsByName('canvas-map');\ncanvas.height = 100;\ncanvas.width = 100;\nconst ctx = canvas.getContext('2d');\n\n/*\nconst drawCircle = () => {\n\n    const x = 50;\n    const y = 50;\n    const r = 10;\n\n    ctx.beginPath();\n\n    //ctx.moveTo(x,y);\n    ctx.arc(x,y,r,0,2*Math.PI,false);\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.lineWidth = 5;\n    ctx.strokeStyle = '#003300';\n    ctx.stroke();\n\n}\n*/\n\nconst renderLoop = () => {\n\n    //drawCircle();\n    requestAnimationFrame(renderLoop);\n}\n\nrenderLoop();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/loader-runner/lib lazy recursive":
/*!**************************************************************!*\
  !*** ./node_modules/loader-runner/lib lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nmodule.exports = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/loader-runner/lib lazy recursive\";\n\n//# sourceURL=webpack:///./node_modules/loader-runner/lib_lazy_namespace_object?");

/***/ }),

/***/ "./node_modules/node-libs-browser/mock sync recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock sync ^\.\/.*$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./buffer\": \"./node_modules/node-libs-browser/mock/buffer.js\",\n\t\"./buffer.js\": \"./node_modules/node-libs-browser/mock/buffer.js\",\n\t\"./console\": \"./node_modules/node-libs-browser/mock/console.js\",\n\t\"./console.js\": \"./node_modules/node-libs-browser/mock/console.js\",\n\t\"./dns\": \"./node_modules/node-libs-browser/mock/dns.js\",\n\t\"./dns.js\": \"./node_modules/node-libs-browser/mock/dns.js\",\n\t\"./empty\": \"./node_modules/node-libs-browser/mock/empty.js\",\n\t\"./empty.js\": \"./node_modules/node-libs-browser/mock/empty.js\",\n\t\"./net\": \"./node_modules/node-libs-browser/mock/net.js\",\n\t\"./net.js\": \"./node_modules/node-libs-browser/mock/net.js\",\n\t\"./process\": \"./node_modules/node-libs-browser/mock/process.js\",\n\t\"./process.js\": \"./node_modules/node-libs-browser/mock/process.js\",\n\t\"./punycode\": \"./node_modules/node-libs-browser/mock/punycode.js\",\n\t\"./punycode.js\": \"./node_modules/node-libs-browser/mock/punycode.js\",\n\t\"./tls\": \"./node_modules/node-libs-browser/mock/tls.js\",\n\t\"./tls.js\": \"./node_modules/node-libs-browser/mock/tls.js\",\n\t\"./tty\": \"./node_modules/node-libs-browser/mock/tty.js\",\n\t\"./tty.js\": \"./node_modules/node-libs-browser/mock/tty.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/node-libs-browser/mock sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/node-libs-browser/mock_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./node_modules/terser-webpack-plugin/dist sync recursive":
/*!******************************************************!*\
  !*** ./node_modules/terser-webpack-plugin/dist sync ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/terser-webpack-plugin/dist sync recursive\";\n\n//# sourceURL=webpack:///./node_modules/terser-webpack-plugin/dist_sync?");

/***/ }),

/***/ "./node_modules/webpack/lib/node sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** (webpack)/lib/node sync ^\.\/.*$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./NodeChunkTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js\",\n\t\"./NodeChunkTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js\",\n\t\"./NodeEnvironmentPlugin\": \"./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js\",\n\t\"./NodeEnvironmentPlugin.js\": \"./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js\",\n\t\"./NodeHotUpdateChunkTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js\",\n\t\"./NodeHotUpdateChunkTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js\",\n\t\"./NodeMainTemplate.runtime\": \"./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js\",\n\t\"./NodeMainTemplate.runtime.js\": \"./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js\",\n\t\"./NodeMainTemplateAsync.runtime\": \"./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js\",\n\t\"./NodeMainTemplateAsync.runtime.js\": \"./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js\",\n\t\"./NodeMainTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js\",\n\t\"./NodeMainTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js\",\n\t\"./NodeOutputFileSystem\": \"./node_modules/webpack/lib/node/NodeOutputFileSystem.js\",\n\t\"./NodeOutputFileSystem.js\": \"./node_modules/webpack/lib/node/NodeOutputFileSystem.js\",\n\t\"./NodeSourcePlugin\": \"./node_modules/webpack/lib/node/NodeSourcePlugin.js\",\n\t\"./NodeSourcePlugin.js\": \"./node_modules/webpack/lib/node/NodeSourcePlugin.js\",\n\t\"./NodeTargetPlugin\": \"./node_modules/webpack/lib/node/NodeTargetPlugin.js\",\n\t\"./NodeTargetPlugin.js\": \"./node_modules/webpack/lib/node/NodeTargetPlugin.js\",\n\t\"./NodeTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeTemplatePlugin.js\",\n\t\"./NodeTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeTemplatePlugin.js\",\n\t\"./NodeWatchFileSystem\": \"./node_modules/webpack/lib/node/NodeWatchFileSystem.js\",\n\t\"./NodeWatchFileSystem.js\": \"./node_modules/webpack/lib/node/NodeWatchFileSystem.js\",\n\t\"./ReadFileCompileWasmTemplatePlugin\": \"./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js\",\n\t\"./ReadFileCompileWasmTemplatePlugin.js\": \"./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js\",\n\t\"./nodeConsole\": \"./node_modules/webpack/lib/node/nodeConsole.js\",\n\t\"./nodeConsole.js\": \"./node_modules/webpack/lib/node/nodeConsole.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/lib/node sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///(webpack)/lib/node_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./node_modules/worker-farm/lib/child sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/worker-farm/lib/child sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/worker-farm/lib/child sync recursive\";\n\n//# sourceURL=webpack:///./node_modules/worker-farm/lib/child_sync?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

}]);