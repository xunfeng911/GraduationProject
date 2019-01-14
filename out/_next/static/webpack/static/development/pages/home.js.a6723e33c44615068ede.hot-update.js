webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/._react@16.7.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/._next@7.0.2@next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/._antd@3.12.1@antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/._antd@3.12.1@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/._antd@3.12.1@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/._antd@3.12.1@antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_subscribeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/subscribeData */ "./components/subscribeData.ts");
/* harmony import */ var _styles_back_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/back.css */ "./styles/back.css");
/* harmony import */ var _styles_back_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_back_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/xunfeng/work/Graduation/GraduationProject/pages/home.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var BackPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackPage, _React$Component);

  function BackPage(props) {
    var _this;

    _classCallCheck(this, BackPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackPage).call(this, props));
    _this.state = {
      totalSource: [],
      totalgaotie: 0,
      totalplane: 0,
      totaltrain: 0
    };
    return _this;
  }

  _createClass(BackPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var status = window.sessionStorage.getItem('status');

      if (status !== 'logined') {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: '/'
        });
        window.location.href = '/';
      }

      fetch('http://xuncs.cn:2827/back/data').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          totalSource: res.data,
          totalplane: res.data.filter(function (a) {
            return a.type === 'plane';
          }).reduce(function (a, b) {
            return a.total ? a.total + b.total : a + b.total;
          }),
          totalgaotie: res.data.filter(function (a) {
            return a.type === 'gaotie';
          }).reduce(function (a, b) {
            return a.total ? a.total + b.total : a + b.total;
          }),
          totaltrain: res.data.filter(function (a) {
            return a.type === 'train';
          }).reduce(function (a, b) {
            return a.total ? a.total + b.total : a + b.total;
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var TotalColumns = [{
        title: '时间',
        dataIndex: 'date_time',
        key: 'date_time'
      }, {
        title: '终点站',
        dataIndex: 'type',
        key: 'type',
        render: function render(text) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, _components_subscribeData__WEBPACK_IMPORTED_MODULE_6__["routeRadiosData"].filter(function (itm) {
            return itm.value === text;
          })[0].key);
        }
      }, {
        title: '人数',
        dataIndex: 'total',
        key: 'total',
        render: function render(text) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, text, "\u4EBA");
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        style: {
          textAlign: "center",
          fontSize: 24,
          paddingTop: 64
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\u897F\u7535\u5BD2\u5047\u9001\u7AD9\u6821\u8F66\u9884\u7EA6\u52A9\u624B"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          padding: '0 24px 24px 0',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
            pathname: '/date'
          });
        },
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u5355\u65E5\u8BE6\u60C5")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        xs: 24,
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u706B\u8F66\uFF1A", this.state.totaltrain, "\u4EBA"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u9AD8\u94C1\uFF1A", this.state.totalgaotie, "\u4EBA"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u98DE\u673A\uFF1A", this.state.totalplane, "\u4EBA"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u5171\u8BA1\uFF1A", this.state.totaltrain + this.state.totalgaotie + this.state.totalplane)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u6309\u603B\u65E5\u671F-\u65F6\u95F4-\u7EC8\u70B9\u7AD9\u7684\u7EDF\u8BA1\u8868"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
        dataSource: this.state.totalSource,
        columns: TotalColumns,
        pagination: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  }]);

  return BackPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=home.js.a6723e33c44615068ede.hot-update.js.map