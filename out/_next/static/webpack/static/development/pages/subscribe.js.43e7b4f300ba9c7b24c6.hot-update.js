webpackHotUpdate("static/development/pages/subscribe.js",{

/***/ "./pages/subscribe.js":
/*!****************************!*\
  !*** ./pages/subscribe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/._react@16.7.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Radio_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Radio/index */ "./components/Radio/index.js");
/* harmony import */ var rc_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-form */ "./node_modules/._rc-form@2.3.0@rc-form/es/index.js");
/* harmony import */ var _styles_subscribe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/subscribe.css */ "./styles/subscribe.css");
/* harmony import */ var _styles_subscribe_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_subscribe_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/xunfeng/work/GraduationProject/pages/subscribe.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SubscribePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubscribePage, _React$Component);

  function SubscribePage(props) {
    var _this;

    _classCallCheck(this, SubscribePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubscribePage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (error, value) {
        console.log(_this.props.form.getFieldError('username'));
        console.log(error, value);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getError", function (key) {
      var errs = _this.props.form.getFieldError(key);

      var res = null;

      if (errs) {
        res = errs.join(',');
      }

      return res;
    });

    return _this;
  }

  _createClass(SubscribePage, [{
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldError = _this$props$form.getFieldError;
      var userNameOptions = {
        rules: [{
          required: true,
          message: '请输入姓名'
        }]
      };
      var mobileOptions = {
        rules: [{
          required: true,
          message: '请输入正确手机号'
        }]
      };
      var stuIdOptions = {
        rules: [{
          required: true,
          message: '请输入正确的学号'
        }]
      };
      var addressOptions = {
        rules: [{
          required: true,
          type: 'string',
          message: '请输入宿舍地址'
        }]
      };
      var routeOptions = {
        rules: [{
          required: true,
          message: '请选择路线'
        }]
      };
      var startDateOptions = {
        rules: [{
          required: true,
          message: '请选择出发日期'
        }]
      };
      var startTimeOptions = {
        rules: [{
          required: true,
          message: '请选择出发时间'
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subscribe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "sub-tit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u8BF7\u586B\u5199\u8868\u5355", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/santaClaus.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "sub-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u59D3\u540D"), getFieldDecorator('username', userNameOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.getError('username'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "\u624B\u673A\u53F7"), getFieldDecorator('mobile', mobileOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this.getError('mobile'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\u5B66\u53F7"), getFieldDecorator('stuId', stuIdOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.getError('stuId'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u5BBF\u820D\u5730\u5740"), getFieldDecorator('address', addressOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.getError('address'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "\u8DEF\u7EBF"), getFieldDecorator('route', routeOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Radio_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "route",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, this.getError('route'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "\u65E5\u671F"), getFieldDecorator('startDate', startDateOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.getError('startDate'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "\u65F6\u95F4"), getFieldDecorator('startTime', startTimeOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "sub-input",
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.getError('startTime'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "sub-form-btn",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "\u63D0\u4EA4")));
    }
  }]);

  return SubscribePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SubscribePage, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_2__["formShape"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(rc_form__WEBPACK_IMPORTED_MODULE_2__["createForm"])()(SubscribePage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/subscribe")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=subscribe.js.43e7b4f300ba9c7b24c6.hot-update.js.map