(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm.js":
/*!**********************!*\
  !*** ../pkg/wasm.js ***!
  \**********************/
/*! exports provided: greet, compute_dist, Node, World, __wbg_alert_f5393de24ed74e50, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n/* harmony import */ var _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_bg.js */ \"../pkg/wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compute_dist\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"compute_dist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Node\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"World\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_f5393de24ed74e50\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_f5393de24ed74e50\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm.js?");

/***/ }),

/***/ "../pkg/wasm_bg.js":
/*!*************************!*\
  !*** ../pkg/wasm_bg.js ***!
  \*************************/
/*! exports provided: greet, compute_dist, Node, World, __wbg_alert_f5393de24ed74e50, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compute_dist\", function() { return compute_dist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_f5393de24ed74e50\", function() { return __wbg_alert_f5393de24ed74e50; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\n/**\n* @param {number} node_cnt\n* @returns {number}\n*/\nfunction compute_dist(node_cnt) {\n    var ret = _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compute_dist\"](node_cnt);\n    return ret;\n}\n\n/**\n*/\nclass Node {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_node_free\"](ptr);\n    }\n}\n/**\n*/\nclass World {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_world_free\"](ptr);\n    }\n}\n\nconst __wbg_alert_f5393de24ed74e50 = function(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_bg.js?");

/***/ }),

/***/ "../pkg/wasm_bg.wasm":
/*!***************************!*\
  !*** ../pkg/wasm_bg.wasm ***!
  \***************************/
/*! exports provided: memory, greet, __wbg_node_free, __wbg_world_free, compute_dist */
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm.js\");\n\n//import { ContextReplacementPlugin } from \"webpack\";\n\n//wasm.greet();\nvar nodeCnt = 10;\nvar points = [];\nvar path = [];\nvar dist = 0.0;\n\nconst controller = document.getElementById('controller');\n\ndocument.getElementById('distance_tracker').innerHTML='nthnth';\n\nconst canvas = document.getElementById('canvas-map');\ncanvas.height = window.innerHeight;\ncanvas.width = window.innerWidth;\nconst ctx = canvas.getContext(\"2d\");\n\nconst resetButton = document.getElementById('reset-button')\nresetButton.addEventListener('click',event=>{\n    resetNodes();\n})\n\n\nconst resetNodes = () => {\n    points = [...Array(nodeCnt)].map(e=>[~~(Math.random()*100),~~(Math.random()*100)])\n}\n\nconst updatePath = () => {\n    path = [...Array(nodeCnt).keys()]\n}\n\n\nconst renderLoop = () => {\n\n    updatePath();\n    dist = Object(wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"compute_dist\"])();\n\n    if (window.innerHeight!=canvas.height || window.innerWidth!=canvas.width){\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        console.log('change');\n        console.log(controller.pageYOffset);\n        console.log(controller.pageXOffset);\n    }\n\n    \n    const r = Math.min(canvas.height,canvas.width)*0.005\n    const x_offset = canvas.width*0.05\n    const y_offset = (canvas.height-controller.offsetHeight)*0.05\n\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    \n    ctx.beginPath();\n    points.forEach((n,i)=>{\n        const x = n[0]*canvas.width/105+x_offset;\n        const y = n[1]*(canvas.height-controller.offsetHeight)/105+y_offset;//+controller.offsetHeight+y_offset;\n\n        ctx.moveTo(x,y);\n        ctx.arc(x,y,r,0,2*Math.PI,false);\n        ctx.fillStyle=\"black\";\n        ctx.fill();\n\n    });\n\n    var prev_node = path[path.length-1]\n    path.forEach((v,i)=>{\n        var curr_node = v\n\n\n        \n        const prev_x = points[prev_node][0]*canvas.width/105+x_offset;\n        const prev_y = points[prev_node][1]*(canvas.height-controller.offsetHeight)/105+y_offset;\n\n        const curr_x = points[curr_node][0]*canvas.width/105+x_offset;\n        const curr_y = points[curr_node][1]*(canvas.height-controller.offsetHeight)/105+y_offset;\n        \n        ctx.moveTo(prev_x,prev_y);\n        ctx.lineTo(curr_x,curr_y);\n        ctx.stroke()\n\n        prev_node = curr_node\n    })\n\n\n    requestAnimationFrame(renderLoop);\n}\nresetNodes();\nrenderLoop();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);