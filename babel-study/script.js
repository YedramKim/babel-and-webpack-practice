let transVariablesToObject = (name, link) => ({
	name,
	link
});

let links = [
	transVariablesToObject('네이버', 'http://www.naver.com'),
	transVariablesToObject('다음', 'http://www.daum.net'),
	transVariablesToObject('트위터', 'http://twitter.com'),
	transVariablesToObject('페이스북', 'http://facebook.com')
];
let vm = new Vue({
	el: '#app',
	render: (h) => {
		return (<div>
			{links.map((obj) => 
				<h1>
					<a href={obj.link}>
						{obj.name}
					</a>
				</h1>
			)}
		</div>);
	}
});