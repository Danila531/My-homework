let firm = {
	sales: [
		{ name: 'John', pay: 1000 },
		{ name: 'Alice', pay: 1600 },
	],
	development: {
		frontend: [
			{ name: 'Peter', pay: 2000 },
			{ name: 'Ann', pay: 1800 },
		],
		backend: [
			{ name: 'Jack', pay: 1300 },
			{ name: 'Sara', pay: 1700 },
		],
	},
};

function getPay(department) {
	let sum = 0;

	if (Array.isArray(department)) {
		department.forEach(worker => {
			sum += worker.pay;
		});
	} else {
		for (let subDep in department) {
			sum += getPay(department[subDep]);
		}
	}

	return sum;
}

let totalPay = getPay(firm);
console.log(totalPay);
