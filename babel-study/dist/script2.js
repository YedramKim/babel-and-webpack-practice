"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj1 = {
	a: 1,
	b: 2
};

var obj2 = {
	c: 3,
	d: 4
};

console.log(_extends({}, obj1, obj2));