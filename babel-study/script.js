let getObject = (name, link) => ({
	name,
	link
});

// 11
let links = [
	getObject('네이버', 'http://www.naver.com'),
	getObject('다음', 'http://www.daum.net'),
	getObject('트위터', 'http://twitter.com'),
	getObject('페이스북', 'http://facebook.com')
];
let vm = new Vue({
	el: '#app',
	render: (h) => {
		return (<div>
			{links.map((obj) => 
				<h1>
					<a href={obj.link} title={`${obj.name}로 이동하는 링크입니다.`}>
						{obj.name}
					</a>
				</h1>
			)}
		</div>);
	}
});