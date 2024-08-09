// First homework
/*let userName = prompt('Enter your name');

let userAnswer = alert('Hello,' + userName + '!How are you?');

console.log(userAnswer);*/

// Second homework
/*let numbers = prompt('Введите 3х значное число:');
if (numbers.length !== 3) {
	console.log('Число не трехзначное');
} else {
	let digit1 = numbers[0];
	let digit2 = numbers[1];
	let digit3 = numbers[2];

	if (digit1 === digit2 && digit1 === digit3) {
		console.log('Все цифры одинаковые');
	} else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
		console.log('В трехзначном числе есть две одинаковые цифры');
	} else {
		console.log('В числе нету ни одной одинаковой цифры');
	}
}*/

// Third homework
let yearOfBirth = prompt('Введи свой год рождения: ');

if (yearOfBirth === null) {
	alert('Жаль, что вы не захотели ввести свою дату рождения');
} else {
	let city = prompt('Введи название города, в котором ты проживаешь: ');

	if (city === null) {
		alert('Жаль, что вы не захотели ввести название вашего города');
	} else {
		let favSport = prompt('Введи свой любимый спорт: ');

		if (favSport === null) {
			alert('Жаль, что вы не захотели ввести ваш любимый спорт');
		} else {
			const currentDate = new Date().getFullYear();
			const userAge = currentDate - parseInt(yearOfBirth);

			let capitals = '';
			if (city.toLowerCase() === 'киев') {
				capitals = 'Ты живешь в столице Украины!';
			} else if (city.toLowerCase() === 'вашингтон') {
				capitals = 'Ты живешь в столице Америки!';
			} else if (city.toLowerCase() === 'лондон') {
				capitals = 'Ты живешь в столице Англии!';
			} else {
				capitals = `Ты живешь в городе: ${city}`;
			}

			let championsInSport = '';
			if (favSport.toLowerCase() === 'футбол') {
				championsInSport = 'Круто!Ты хочешь стать новым Лео Месси?';
			} else if (favSport.toLowerCase() === 'баскетбол') {
				championsInSport = 'Круто!Ты хочешь стать новым Коби Брайнтом?';
			} else if (favSport.toLowerCase() === 'волейбол') {
				championsInSport = 'Круто!Ты хочешь стать новым Эриком Нгапетом?';
			} else {
				championsInSport = `Круто!${favSport} это крутой вид спорта`;
			}

			let resultOfOperation = `Ваш возраст: ${userAge}\n${capitals}\n${championsInSport}`;

			alert(resultOfOperation);
		}
	}
}

// Fourth homework
/*switch (true) {
	case numOrStr === null:
		console.log('ви скасували');
		break;
	case numOrStr.trim() === '':
		console.log('Empty String');
		break;
	case isNaN(+numOrStr):
		console.log('number is Ba_NaN');
		break;
	default:
		console.log('OK!');
}*/
