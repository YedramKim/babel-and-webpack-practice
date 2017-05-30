let promise = new Promise((res, rej) => {
	res(10);
}).then((data) => {
	console.log(data);
});
let obj = {
	num: 10
};

async function asyncFunction() {
	let prom1;
	let result = await new Promise((res, rej) => {
		this.then(this.num);
	});
	if (result === 10) {
		prom1 = new Promise((res, rej) => {
			res(100);
		});
	} else {
		prom1 = new Promise((res, rej) => {
			res(200);
		});
	};

	console.log(await prom1);
};

obj::asyncFunction(...[1, 2, 3]);