'use strict';

var transVariablesToObject = function transVariablesToObject(name, link) {
	return {
		name: name,
		link: link
	};
};

var links = [transVariablesToObject('네이버', 'http://www.naver.com'), transVariablesToObject('다음', 'http://www.daum.net'), transVariablesToObject('트위터', 'http://twitter.com'), transVariablesToObject('페이스북', 'http://facebook.com')];
var vm = new Vue({
	el: '#app',
	render: function render(h) {
		return h(
			'div',
			null,
			[links.map(function (obj) {
				return h(
					'h1',
					null,
					[h(
						'a',
						{
							attrs: { href: obj.link }
						},
						[obj.name]
					)]
				);
			})]
		);
	}
});