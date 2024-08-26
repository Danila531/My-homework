function averageOfNumbers(arr) {
	let sum = 0;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			sum += arr[i];
			count++;
		}
	}

	return count > 0 ? sum / count : 0;
}

// Приклад використання
const userInput = prompt('Введіть елементи масиву через кому:').split(',');
const processedInput = userInput.map(item =>
	isNaN(item) ? item : Number(item)
);

const average = averageOfNumbers(processedInput);
console.log('Середнє арифметичне числових елементів: ' + average);
