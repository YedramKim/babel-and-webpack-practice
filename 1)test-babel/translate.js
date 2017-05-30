"use strict";

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
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function asyncFunction() {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var promise = new Promise(function (res, rej) {
	res(10);
}).then(function (data) {
	console.log(data);
});
var obj = {
	num: 10
};

;

asyncFunction.call.apply(asyncFunction, [obj].concat([1, 2, 3]));