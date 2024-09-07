let contactBook = {
	contacts: [
		{ name: 'Данило', phone: '+380123456789', email: 'danilo@example.com' },
		{ name: 'Олена', phone: '+380987654321', email: 'olena@example.com' },
	],

	addContact: function (name, phone, email) {
		this.contacts.push({ name: name, phone: phone, email: email });
		console.log(`${name} доданий до контактів.`);
	},

	findContact: function (name) {
		let contact = this.contacts.find(contact => contact.name === name);
		if (contact) {
			console.log(
				`Знайдено контакт: Ім'я: ${contact.name}, Телефон: ${contact.phone}, Електронна пошта: ${contact.email}`
			);
		} else {
			console.log('Контакт не знайдено.');
		}
	},
};

contactBook.addContact('Максим', '+380555666777', 'maksym@example.com');

contactBook.findContact('Олена');
