function createSum() {
	let total = 0;
	function sum(value) {
		total += value;
		return total;
	}
	return sum;
}

const sum = createSum();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27
