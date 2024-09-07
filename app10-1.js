let user = {
	name: 'Данило',
	age: 25,
	location: 'Київ',
	occupation: 'Front-end розробник',

	getInfo: function () {
		console.log(
			`Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}, Професія: ${this.occupation}`
		);
	},
};

user.getInfo();
