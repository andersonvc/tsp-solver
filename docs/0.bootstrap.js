(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/tsp_solver.js":
/*!****************************!*\
  !*** ../pkg/tsp_solver.js ***!
  \****************************/
/*! exports provided: Controller, __wbg_floor_65d9b37add803b26, __wbg_random_eb1fab8e1db2d9d1, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tsp_solver_bg.wasm */ \"../pkg/tsp_solver_bg.wasm\");\n/* harmony import */ var _tsp_solver_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tsp_solver_bg.js */ \"../pkg/tsp_solver_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return _tsp_solver_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_floor_65d9b37add803b26\", function() { return _tsp_solver_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_floor_65d9b37add803b26\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_eb1fab8e1db2d9d1\", function() { return _tsp_solver_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_eb1fab8e1db2d9d1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _tsp_solver_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/tsp_solver.js?");

/***/ }),

/***/ "../pkg/tsp_solver_bg.js":
/*!*******************************!*\
  !*** ../pkg/tsp_solver_bg.js ***!
  \*******************************/
/*! exports provided: Controller, __wbg_floor_65d9b37add803b26, __wbg_random_eb1fab8e1db2d9d1, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_floor_65d9b37add803b26\", function() { return __wbg_floor_65d9b37add803b26; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_eb1fab8e1db2d9d1\", function() { return __wbg_random_eb1fab8e1db2d9d1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tsp_solver_bg.wasm */ \"../pkg/tsp_solver_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Controller {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Controller.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_controller_free\"](ptr);\n    }\n    /**\n    * @param {number} node_cnt\n    * @param {number} solver_type\n    * @returns {Controller}\n    */\n    static new(node_cnt, solver_type) {\n        var ret = _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_new\"](node_cnt, solver_type);\n        return Controller.__wrap(ret);\n    }\n    /**\n    */\n    update() {\n        _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_update\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_nodes() {\n        var ret = _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_nodes\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_route() {\n        var ret = _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_route\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_best_dist() {\n        var ret = _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_best_dist\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_solver_type() {\n        var ret = _tsp_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_solver_type\"](this.ptr);\n        return ret;\n    }\n}\n\nconst __wbg_floor_65d9b37add803b26 = typeof Math.floor == 'function' ? Math.floor : notDefined('Math.floor');\n\nconst __wbg_random_eb1fab8e1db2d9d1 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/tsp_solver_bg.js?");

/***/ }),

/***/ "../pkg/tsp_solver_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/tsp_solver_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_controller_free, controller_new, controller_update, controller_get_nodes, controller_get_route, controller_get_best_dist, controller_get_solver_type */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./tsp_solver_bg.js */ \"../pkg/tsp_solver_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/tsp_solver_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tsp_solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsp_solver */ \"../pkg/tsp_solver.js\");\n/* harmony import */ var tsp_solver_tsp_solver_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsp_solver/tsp_solver_bg */ \"../pkg/tsp_solver_bg.wasm\");\n\n\n//import { ContextReplacementPlugin } from \"webpack\";\n\nvar nodeCnt = 50;\nvar points = [];\nvar dist = 2.0;\n\nconst bottomButtons = document.getElementById('bottom-button');\nbottomButtons.style.right = String(window.innerWidth/2-130)+'px';\n\n\n//const memvals = memory.buffer\n\nvar controller = null;\nvar nodes = [];\nvar path = [];\n\n\nconst controlPanel = document.getElementById('header');\n\nconst canvas = document.getElementById('canvas-map');\ncanvas.height = window.innerHeight;\ncanvas.width = window.innerWidth;\nconst ctx = canvas.getContext(\"2d\");\nctx.fillStyle = \"white\";\n\nconst modalUpdateButton = document.getElementById('modal-update')\nmodalUpdateButton.addEventListener('click',event=>{\n    resetNodes();\n\n})\n\nconst resetButton = document.getElementById('reset-button')\nresetButton.addEventListener('click',event=>{\n    resetNodes();\n})\n\n\nconst resetNodes = () => {\n    nodeCnt = parseInt(document.getElementById(\"node-cnt\").options[document.getElementById(\"node-cnt\").selectedIndex].text);\n    document.getElementById('header').innerHTML=\"TSP Simulator: using \"+ document.getElementById(\"search-type\").options[parseInt(document.getElementById(\"search-type\").value)].text;\n    controller = tsp_solver__WEBPACK_IMPORTED_MODULE_0__[\"Controller\"].new(nodeCnt,document.getElementById(\"search-type\").value);\n}\n\nvar counter = 0;\nconst renderLoop = () => {\n\n    controller.update();\n    nodes = new Uint32Array(tsp_solver_tsp_solver_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer,controller.get_nodes(),nodeCnt*2);\n    path = new Uint32Array(tsp_solver_tsp_solver_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer,controller.get_route(),nodeCnt);\n    \n    document.getElementById('distance-tracker').innerHTML='Circuit Dist: '+controller.get_best_dist().toFixed(2);\n\n    if (window.innerHeight!=canvas.height || window.innerWidth!=canvas.width){\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        bottomButtons.style.right = String(window.innerWidth/2-130)+'px';\n    }\n\n\n    \n    const r = Math.min(canvas.height,canvas.width)*0.004\n    const x_offset = canvas.width*0.05\n    const y_offset = (canvas.height-controlPanel.offsetHeight)*0.03\n\n    ctx.fillStyle = 'white';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    \n    ctx.beginPath();\n    for (const v of Array(nodeCnt).keys()){\n        const x = nodes[2*v]*canvas.width/105+x_offset;\n        const y = nodes[2*v+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;\n        ctx.moveTo(x,y);\n        ctx.arc(x,y,r,0,2*Math.PI,false);\n        ctx.fillStyle=\"black\";\n        ctx.fill();\n    };\n    \n    var prev_node = path[nodeCnt-1];\n    var curr_node = 0;\n    for (var v=0;v<nodeCnt;v++){\n\n        curr_node = path[v];\n\n        const prev_x = nodes[prev_node*2]*canvas.width/105+x_offset;\n        const prev_y = nodes[prev_node*2+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;\n        \n        const curr_x = nodes[curr_node*2]*canvas.width/105+x_offset;\n        const curr_y = nodes[curr_node*2+1]*(canvas.height-controlPanel.offsetHeight)/105+y_offset;\n        \n        ctx.moveTo(prev_x,prev_y);\n        ctx.lineTo(curr_x,curr_y);\n        ctx.stroke()\n        \n        prev_node = curr_node\n        \n    }\n\n    requestAnimationFrame(renderLoop);\n}\n\nresetNodes();\nrenderLoop();\n\n//# sourceURL=webpack:///./index.js?");

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