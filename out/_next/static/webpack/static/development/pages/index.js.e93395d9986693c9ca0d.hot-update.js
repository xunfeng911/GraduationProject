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
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/._echarts@4.2.0-rc.2@echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
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
      histogramData: {}
    };
    return _this;
  }

  _createClass(BackPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getOption",
    value: function getOption() {
      var _this2 = this;

      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2019-01-20';
      fetch("http://xuncs.cn:2827/ticket/create", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        _this2.setState({
          histogramData: {
            backgroundColor: '#fff',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['飞机场', '火车站', '高铁站'],
              align: 'right',
              right: 10,
              textStyle: {
                color: "#00265f"
              },
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 35
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: ['喀什市', '疏附县', '疏勒县', '英吉沙县', '泽普县', '岳普湖县', '巴楚县', '伽师县', '叶城县', '莎车县 '],
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#063374",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#00c7ff"
                }
              }
            }],
            yAxis: [{
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#00c7ff",
                  width: 1,
                  type: "solid"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "#063374"
                }
              }
            }],
            series: [{
              name: '飞机场',
              type: 'bar',
              data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
              barWidth: 10,
              //柱子宽度
              barGap: 1,
              //柱子之间间距
              itemStyle: {
                normal: {
                  color: new echarts__WEBPACK_IMPORTED_MODULE_2___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#008cff'
                  }, {
                    offset: 1,
                    color: '#005193'
                  }]),
                  opacity: 1
                }
              }
            }, {
              name: '火车站',
              type: 'bar',
              data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
              barWidth: 10,
              barGap: 1,
              itemStyle: {
                normal: {
                  color: new echarts__WEBPACK_IMPORTED_MODULE_2___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00da9c'
                  }, {
                    offset: 1,
                    color: '#007a55'
                  }]),
                  opacity: 1
                }
              }
            }, {
              name: '高铁站',
              type: 'bar',
              data: [70, 48, 73, 68, 53, 47, 50, 72, 96, 86],
              barWidth: 10,
              barGap: 1,
              itemStyle: {
                normal: {
                  color: new echarts__WEBPACK_IMPORTED_MODULE_2___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c4e300'
                  }, {
                    offset: 1,
                    color: '#728400'
                  }]),
                  opacity: 1
                }
              }
            }]
          }
        });
      });
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
        option: this.state.histogramData,
        notMerge: true,
        lazyUpdate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
//# sourceMappingURL=index.js.e93395d9986693c9ca0d.hot-update.js.map