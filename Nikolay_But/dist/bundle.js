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

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/*! exports provided: myGetDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myGetDate\", function() { return myGetDate; });\n\n\nclass myGetDate {\n  constructor(date) {\n    this.date = date;\n  }\n\n  get() {\n    this.date = new Date();\n  }\n\n  display() {\n    this.get();\n\n    let dd = this.date.getDate();\n    if (dd < 10) dd = '0' + dd;\n\n    let mm = this.date.getMonth() + 1;\n    if (mm < 10) mm = '0' + mm;\n\n    let yy = this.date.getFullYear();\n\n    return `${dd}.${mm}.${yy}`;\n  }\n}\n\n//# sourceURL=webpack:///./src/date.js?");

/***/ }),

/***/ "./src/developer.js":
/*!**************************!*\
  !*** ./src/developer.js ***!
  \**************************/
/*! exports provided: Developer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Developer\", function() { return Developer; });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n\n\n\n\nclass Developer extends _user__WEBPACK_IMPORTED_MODULE_0__[\"Human\"] {\n  constructor(firstName, lastName) {\n    super(firstName, lastName);\n  }\n\n  displayInfo() {\n    return {\n      'firstName': this.firstName,\n      'lastName': this.lastName\n    };\n  }\n}\n\n//# sourceURL=webpack:///./src/developer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./developer */ \"./src/developer.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n\n\n\n\nconst vasya = new _user__WEBPACK_IMPORTED_MODULE_0__[\"Human\"]('Vasya', 'Pupkin');\nconst petya = new _developer__WEBPACK_IMPORTED_MODULE_1__[\"Developer\"]('Petya', 'Petrov');\n\nconst dateButton = document.createElement('button');\ndateButton.textContent = `Показать/убрать текущую дату`;\n\ndateButton.addEventListener('click', () => {\n  const dateEl = document.body.querySelector('[data-el=\"date\"]');\n\n  if (dateEl) {\n    dateEl.remove();\n  } else {\n    const Date = new _date__WEBPACK_IMPORTED_MODULE_2__[\"myGetDate\"]();\n    const now = Date.display();\n    const dateEl = document.createElement('span');\n    dateEl.dataset.el = 'date';\n    dateEl.textContent = now;\n    document.body.appendChild(dateEl);\n  }\n});\n\ndocument.body.appendChild(dateButton);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/user.css":
/*!**********************!*\
  !*** ./src/user.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/user.css?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: Human */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Human\", function() { return Human; });\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.css */ \"./src/user.css\");\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Human {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  sayHi() {\n    return `Hi, ${this.firstName} ${this.lastName}`;\n  }\n}\n\n//# sourceURL=webpack:///./src/user.js?");

/***/ })

/******/ });