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
/* harmony import */ var rc_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-form */ "./node_modules/._rc-form@2.3.0@rc-form/es/index.js");
/* harmony import */ var _styles_subscribe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/subscribe.css */ "./styles/subscribe.css");
/* harmony import */ var _styles_subscribe_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_subscribe_css__WEBPACK_IMPORTED_MODULE_2__);
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

      console.log(errs);
      return (errs || []).join[','];
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subscribe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, getFieldDecorator('username', userNameOptions)(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), this.getError('username')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u63D0\u4EA4")));
    }
  }]);

  return SubscribePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SubscribePage, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_1__["formShape"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(rc_form__WEBPACK_IMPORTED_MODULE_1__["createForm"])()(SubscribePage));
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
//# sourceMappingURL=subscribe.js.e2d0370cc9d4879c79de.hot-update.js.map