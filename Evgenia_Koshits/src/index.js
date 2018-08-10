import { Developer } from "./Developer";

const developer = new Developer({firstName: 'Evgenia', lastName: 'Koshits', dateOfBirth: '19/06/1989'});
console.log(developer)
developer.showInfo();

document.querySelector('#devInfo').onclick = function () {
	alert(`Today is ${new Date()}`)
};
