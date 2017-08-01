'use strict';

var getObject = function getObject(name, link) {
	return {
		name: name,
		link: link
	};
};

var links = [getObject('네이버', 'http://www.naver.com'), getObject('다음', 'http://www.daum.net'), getObject('트위터', 'http://twitter.com'), getObject('페이스북', 'http://facebook.com')];
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
							attrs: { href: obj.link, title: obj.name + '\uB85C \uC774\uB3D9\uD558\uB294 \uB9C1\uD06C\uC785\uB2C8\uB2E4.' }
						},
						[obj.name]
					)]
				);
			})]
		);
	}
});