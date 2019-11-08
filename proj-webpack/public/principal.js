/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: Didn't get a result from child compiler\\n    at childCompiler.runAsChild (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:127:23)\\n    at compile (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:242:11)\\n    at hooks.afterCompile.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:487:14)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at compilation.seal.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:484:30)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:966:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:957:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:952:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:948:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at Compilation.seal (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:890:27)\\n    at hooks.make.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:481:17)\\n    at _err0 (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:11:1)\\n    at _addModuleChain (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:758:12)\\n    at processModuleDependencies.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:697:9)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\\n    at runLoaders (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:252:20)\\n    at c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:182:20\\n    at context.callback (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at childCompiler.runAsChild (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:127:14)\\n    at compile (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:242:11)\\n    at hooks.afterCompile.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:487:14)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at compilation.seal.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:484:30)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:966:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:957:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:952:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:948:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at Compilation.seal (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:890:27)\\n    at hooks.make.callAsync.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:481:17)\\n    at _err0 (eval at create (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:11:1)\\n    at _addModuleChain (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:758:12)\\n    at processModuleDependencies.err (c:\\\\Users\\\\Renomear.DESKTOP-BS0U13S\\\\Desktop\\\\reprograma-js-IV\\\\proj-webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:697:9)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\nclass Pessoa{\r\n    cumprimentar(){\r\n        return 'boa tarde'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });