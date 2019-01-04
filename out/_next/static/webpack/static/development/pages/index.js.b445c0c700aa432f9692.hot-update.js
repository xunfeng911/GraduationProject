webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/._react@16.7.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts-for-react */ "./node_modules/._echarts-for-react@2.0.15-beta.0@echarts-for-react/lib/index.js");
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_for_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/xunfeng/work/Graduation/GraduationProject/pages/index.tsx";

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
      value: null,
      data: []
    };
    return _this;
  }

  _createClass(BackPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getOption",
    value: function getOption() {
      var state1 = this.props.state1;
      var a = ['9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11', '9-11'];
      var b = [75532610, 70881549, 74908462, 99889114, 127412518, 101013852, 97138203, 118025959, 124753964, 105594553, 78753171, 81312474, 58667282, 41113282, 32972397, 23852133, 13373198, 5631928, 1578307, 369979, 35934];
      return {
        color: ['#156DFF'],
        title: {
          text: "\u8868\u5355"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '日期：{b}<br>金额: {c}元'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          right: '2%',
          top: 'top',
          feature: {
            saveAsImage: {} // myDate: {
            //   show: true,
            //   title: '自定义扩展方法1',
            //   icon: '年',
            //   onclick: function () {
            //     alert('myToolHandler1');
            //   }
            // },
            // myTool2: {
            //   show: true,
            //   title: '自定义扩展方法',
            //   icon: 'image://http://echarts.baidu.com/images/favicon.png',
            //   onclick: function () {
            //     alert('myToolHandler2');
            //   }
            // }

          }
        },
        xAxis: [{
          name: '时间',
          type: 'category',
          data: a,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#3A3A3A'
            }
          }
        }],
        yAxis: [{
          name: '金额/元',
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            textStyle: {
              color: '#3A3A3A'
            },
            formatter: '{value}'
          },
          show: true
        }],
        series: [{
          type: 'bar',
          data: b
        }]
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](echarts_for_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          minHeight: 600,
          background: '#fff',
          paddingTop: 12
        },
        option: this.getOption(),
        notMerge: true,
        lazyUpdate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/._webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b445c0c700aa432f9692.hot-update.js.map