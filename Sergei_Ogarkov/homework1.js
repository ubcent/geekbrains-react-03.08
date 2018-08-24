"use strict";

/**
 * Created by Sergey on 09.08.2018.
 */


/*1*/

function loop(times = 0, callback = null) {
	if (typeof callback !== 'function') {
		throw new Error('Not a function');
	};
	if (isNaN(parseInt(times, 10))) {
		console.log(parseInt(times, 10));
		throw new Error('Incorrect iterator');
	};

    for (let i = 0; i < times; i++){
        console.log(`Вызов функции ${i+1}`);
        callback();
    }
};

var foo = function() {
	console.log('callbackFunc call');
};

loop(3, foo);
//loop(3, 'foo');
//loop('bar', foo);

/*2. Написать функцию calculateArea, которая будет принимать параметры для вычисления площади 
(можете выбрать конкретную фигуру или, основываясь на переданных параметрах, выполнять требуемый 
алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: 
{ area, figure, input } (где area – вычисленная площадь, figure – название фигуры, 
для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление.*/

function calculateArea(figure, ...rest){
	let result = {
		area: 0,
		shape: figure,
		input: rest
	};

	if (figure=='circle') {
		const [r=0] = rest;
		result.area = Math.PI*r*r;
	}

	return result;
}

console.log(calculateArea('circle', 6));

/* 3. Необходимо написать иерархию классов вида 
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), 
а также методы по удалению и добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
У класса Employee должны присутствовать параметры: salary (число), department (строка).
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(). 
Это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human.
*/

class Human {
	constructor(...rest){
		[this.name, this.age, this.dateOfBirth] = rest;
	}

	displayInfo(){
		return `
			name: ${this.name}
			age: ${this.age}
			Date of birth: ${this.dateOfBirth}
		`;
	}
}

class Employee extends Human {
	constructor({name, age, dateOfBirth, salary, department}){
		super([name, age, dateOfBirth]);
		this.salary = salary;
		this.department = department;
	}

	displayInfo(){
		return `
			${super.displayInfo()}
			salary: ${this.salary}
			department: ${this.department}
		`;
	}
}

class Developer extends Employee{
	constructor({name, age, dateOfBirth, salary, department, managerId = null}){
		super(
		{
			name: name, 
			age: age, 
			dateOfBirth: dateOfBirth, 
			salary: salary, 
			department: department, 
		}
			);
		this.managerId = managerId;
	}

	setManager(managerId){
		this.managerId = managerId;
	}

}

class Manager extends Employee{
	constructor({name, age, dateOfBirth, salary, department, ...developers}){
		super(
		{
			name: name, 
			age: age, 
			dateOfBirth: dateOfBirth, 
			salary: salary, 
			department: department, 
		}
			);
		this.developers = developers;
	}

	addDeveloper(developer){
		this.developers.push(developer);
	}

	removeDeveloper(developer){

		let idx = -1;

  		if (this.developers.indexOf) { // если метод существует
    		idx = this.developers.indexOf(value);
  		}

  		for (var i = 0; i < array.length; i++) {
    		if (array[i] === value) idx = i;
  		}

  		if (idx >=0) {
  			this.developers.splice(idx, 1);
  		}

	}

}

/* generator */

function* generator(){
	yield 1;
	yield 2;
	yield 3;
}

/* промисы */

const arr = new Array(10);

arr(10).fill(0).map((item, idx) =>
fetch(`https://jsonplaceholder.typicode.com/users/${idx}`).then((res)=>
	res.json())).then(() => console.log(users));

