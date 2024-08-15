let N = prompt('Введите целое число N:');

N = Number(N); // Либо можно через parseInt() в одну строку

console.log(`Все числа от 1 до 100, квадрат которых не превышает ${N}:`);

for (let i = 1; i <= 100; i++) {
	if (i * i <= N) {
		console.log(i);
	}
}
