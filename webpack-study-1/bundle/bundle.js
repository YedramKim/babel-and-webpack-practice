webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

var _coffee = __webpack_require__(3);

var _coffee2 = _interopRequireDefault(_coffee);

var _data = __webpack_require__(4);

var _data2 = _interopRequireDefault(_data);

var _style = __webpack_require__(5);

var _style2 = _interopRequireDefault(_style);

var _common = __webpack_require__(0);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('common: ', _common2.default);
console.log(_data2.default);
console.log(_text2.default);
console.log(_coffee2.default);
var image = new Image();
image.src = './' + _coffee2.default;
document.body.appendChild(image);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "Hello, text."

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "coffee.gif";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"json"}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);