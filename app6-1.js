function removeCharacters(str, charsToRemove) {
	let result = '';

	for (let i = 0; i < str.length; i++) {
		if (!charsToRemove.includes(str[i])) {
			result += str[i];
		}
	}

	return result;
}

const userInput = prompt('Введите строку:');
const chars = prompt('Введите символы для удаления,используя запятую:').split(
	','
);

const cleanedString = removeCharacters(userInput, chars);
console.log(cleanedString);
