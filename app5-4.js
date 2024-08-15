let num = prompt('Введите целое число:');

num = Number(num);

let isPrime = true;

if (num <= 1) {
	isPrime = false;
} else {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			isPrime = false;
			break;
		}
	}
}

if (isPrime) {
	console.log(num + ' - это простое число.');
} else {
	console.log(num + ' - это не простое число.');
}
