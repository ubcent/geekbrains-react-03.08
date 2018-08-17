export class Developer {
	constructor({firstName, lastName, dateOfBirth}) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.dateOfBirth = dateOfBirth
	}

	showInfo() {
		let div = document.createElement('div');
		div.setAttribute('id', 'devInfo');
		div.innerHTML = `<p>Info about developer:</p>
						<p>First name: ${this.firstName}</p>
						<p>Last name: ${this.lastName}</p>
						<p>Date of birth: ${this.dateOfBirth}</p>`;
		document.body.appendChild(div);
	}


}