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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/developer.css":
/*!**************************************!*\
  !*** ./src/components/developer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/components/developer.css?");

/***/ }),

/***/ "./src/components/developer.js":
/*!*************************************!*\
  !*** ./src/components/developer.js ***!
  \*************************************/
/*! exports provided: Developer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Developer\", function() { return Developer; });\n/* harmony import */ var _developer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developer.css */ \"./src/components/developer.css\");\n/* harmony import */ var _developer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_developer_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Developer {\n  constructor(name) {\n    this._firstName = name.firstName;\n    this._lastName = name.lastName;\n  }\n\n  getInfo() {\n    return `${this._firstName} ${this._lastName}`;\n  }\n}\n\n//# sourceURL=webpack:///./src/components/developer.js?");

/***/ }),

/***/ "./src/components/user.css":
/*!*********************************!*\
  !*** ./src/components/user.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/components/user.css?");

/***/ }),

/***/ "./src/components/user.js":
/*!********************************!*\
  !*** ./src/components/user.js ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.css */ \"./src/components/user.css\");\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass User {\n  constructor(name) {\n    this._firstName = name.firstName;\n    this._lastName = name.lastName;\n  }\n\n  sayHi() {\n    return `Hi, ${this._firstName} ${this._lastName}`;\n  }\n}\n\n//# sourceURL=webpack:///./src/components/user.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user */ \"./src/components/user.js\");\n/* harmony import */ var _components_developer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/developer */ \"./src/components/developer.js\");\n\n\n\nconst appUser = new _components_user__WEBPACK_IMPORTED_MODULE_0__[\"User\"]({\n  firstName: 'Agent',\n  lastName: 'Smith'\n});\n\nconst leadDeveloper = new _components_developer__WEBPACK_IMPORTED_MODULE_1__[\"Developer\"]({\n  firstName: 'Gregory',\n  lastName: 'Kovorotny'\n});\n\ndocument.getElementById('user').innerHTML = appUser.sayHi();\n\ndocument.getElementById('developer').innerHTML = `This app is being created by ${leadDeveloper.getInfo()}`;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });