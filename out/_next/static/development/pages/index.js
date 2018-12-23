((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/._react@16.7.0@react/index.js":
/*!**********************************************************************************************************!*\
  !*** delegated ./node_modules/._react@16.7.0@react/index.js from dll-reference dll_70ac8b1325b365d29cd0 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_70ac8b1325b365d29cd0 */ "dll-reference dll_70ac8b1325b365d29cd0"))("./node_modules/._react@16.7.0@react/index.js");

/***/ }),

/***/ "./node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/._react@16.7.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/font.css */ "./styles/font.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_font_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/xunfeng/work/GraduationProject/pages/index.js";




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u897F\u5B89\u7535\u5B50\u79D1\u6280\u5927\u5B66"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u5BD2\u5047\u6821\u8F66\u9884\u7EA6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u901A\u8FC7\u672C\u9875\u9762\uFF0C\u63D0\u524D\u5728\u7EBF\u9884\u7EA6\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u8DEF\u7EBF\uFF1A\u897F\u5B89\u7535\u5B50\u79D1\u6280\u5927\u5B66\u2014\u706B\u8F66\u7AD9\u3001\u9AD8\u94C1\u7AD9\u3001\u673A\u573A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index-btns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u9884\u7EA6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tickets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u67E5\u8BE2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+10086",
    className: "index-problem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconfont icon-question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "\u6709\u95EE\u9898\uFF0C\u8054\u7CFB\u6211\u4EEC"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_70ac8b1325b365d29cd0":
/*!*******************************************!*\
  !*** external "dll_70ac8b1325b365d29cd0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_70ac8b1325b365d29cd0;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map