(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{292:function(e,t,n){__NEXT_REGISTER_PAGE("/tickets",function(){return e.exports=n(318),{page:e.exports.default}})},318:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(293),n(123),n(295);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,i(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"ticket-card"},a.a.createElement("i",{className:"iconfont icon-success1-copy ticket-card-icon"}),a.a.createElement("div",{className:"ticket-card-tks"},a.a.createElement("p",null,"25.00元"),a.a.createElement("span",null,"你已订票成功，请等候送票。")),a.a.createElement("div",{className:"ticket-card-divider"},a.a.createElement("div",null,a.a.createElement("div",{className:"ticket-card-divider-pot"}),a.a.createElement("div",{className:"ticket-card-divider-pot"}))),a.a.createElement("div",{className:"ticket-card-content"},a.a.createElement("div",{className:"ticket-card-times"},a.a.createElement("div",null,a.a.createElement("p",null,"日期"),a.a.createElement("p",null,"2019年1月11日")),a.a.createElement("div",null,a.a.createElement("p",null,"时间"),a.a.createElement("p",null,"9:00"))),a.a.createElement("div",{className:"ticket-card-pos"},a.a.createElement("div",null,a.a.createElement("p",null,"路线"),a.a.createElement("p",null,"西安电子科技大学 - 火车站")),a.a.createElement("i",{className:"iconfont icon-train"})),a.a.createElement("div",{className:"ticket-card-info"},a.a.createElement("i",{className:"iconfont icon-tips"}),a.a.createElement("div",null,a.a.createElement("p",null,"姓名：陈硕"),a.a.createElement("p",null,"学号：15020310063"),a.a.createElement("p",null,"手机：17691204183"),a.a.createElement("p",null,"地址：丁香12号楼Ⅱ区412中室")))))}}])&&c(n.prototype,r),o&&c(n,o),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"default",function(){return d});var d=function(e){function t(e){var n,r,a,o,c,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=m(t).call(this,e),n=!a||"object"!==f(a)&&"function"!=typeof a?b(r):a,o=b(b(n)),l=function(e){return n.setState({value:e.target.value})},(c="onChange")in o?Object.defineProperty(o,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[c]=l,n.state={value:null,datas:[{}]},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){console.log(1)}},{key:"render",value:function(){return a.a.createElement("div",{className:"tickets"},a.a.createElement("div",{className:"input-search",style:{marginBottom:48}},a.a.createElement("input",{className:"input",type:"number",placeholder:"请输入学号或手机号",onChange:this.onChange,value:this.state.value}),a.a.createElement("span",{className:"input-suffix"},a.a.createElement("button",{className:"button"},a.a.createElement("span",null,"Search")))),this.state.datas.map(function(e,t){return a.a.createElement(s,{key:t})}),a.a.createElement("p",{className:"tickets-index"},a.a.createElement("a",{href:"index"},"去订票")))}}])&&p(n.prototype,r),o&&p(n,o),t}()}},[[292,1,0,2]]]);