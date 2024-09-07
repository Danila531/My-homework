function enterNumber() {
	let number;
	for (let i = 0; i < 10; i++) {
		number = prompt('Введіть число більше 100:');
		if (number > 100) {
			break;
		}
		if (number === null) {
			console.log('Введення скасовано користувачем.');
			return;
		}
	}
	console.log('Останнє введене число:', number);
}

enterNumber();
