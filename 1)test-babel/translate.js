'use strict';

var asyncFunction = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var _this = this;

		var prom1, result;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						prom1 = void 0;
						_context.next = 3;
						return new Promise(function (res, rej) {
							_this.then(_this.num);
						});

					case 3:
						result = _context.sent;

						if (result === 10) {
							prom1 = new Promise(function (res, rej) {
								res(100);
							});
						} else {
							prom1 = new Promise(function (res, rej) {
								res(200);
							});
						};

						_context.t0 = console;
						_context.next = 9;
						return prom1;

					case 9:
						_context.t1 = _context.sent;

						_context.t0.log.call(_context.t0, _context.t1);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function asyncFunction() {
		return _ref.apply(this, arguments);
	};
}();

var _module2 = require('module.js');

var _module3 = _interopRequireDefault(_module2);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var promise = new Promise(function (res, rej) {
	res(10);
}).then(function (data) {
	console.log(data);
});
var obj = {
	num: 10
};

var obj2 = _defineProperty({}, 'ab' + 'bc', 10);

;

asyncFunction.call(obj);