'use strict';


console.log(`////Задание 1:`);
/* 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции. */

function loop(times = 0, callback = null) {
  for (let i = 0; i < times; i++) {
    console.log(`Вызов функции по счету: ${i + 1}`);
    callback();
  }
}

function consoleLogMe() {
  console.log('Вызов принят');
}

loop(4, consoleLogMe);

/* 2. Написать функцию calculateArea, которая будет принимать параметры для вычисления площади (можете выбрать конкретную фигуру или, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название фигуры, для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление. */
console.log(`////Задание 2:`);

const figure = {
  shape: 'circle',
  radius: 5
}

function calculateArea({ shape, ...rest }) {
  let result = null;
  if (shape === 'circle') {
    const { radius: r } = rest;
    result = 1 / 2 * 2 * Math.PI * r;
  }
  return result;
}
console.log(calculateArea(figure));
figure.radius = 6;
console.log(calculateArea(figure));



/* 3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению и добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
У класса Employee должны присутствовать параметры: salary (число), department (строка).
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(). Это вызовет метод disaplayInfo класса Human и вернет строку с параметрами Human. */
console.log(`////Задание 3:`);

class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  displayInfo() {
    return `
    name: ${this.name}
    age: ${this.age}
    dateOfBirth: ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }
  displayInfo() {
    return `
      ${super.displayInfo()}
      salary: ${this.salary}
      department: ${this.department}
    `;
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, managerId = null) {
    super(name, age, dateOfBirth, salary, department);
    this.managerId = managerId;
  }
  setManager(managerId) {
    this.managerId = managerId;
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department, ...developers) {
    super(name, age, dateOfBirth, salary, department);
    this.developers = developers;
  }
  addDev(dev) {
    this.developers.push(dev);
  }
  removeDev(devIndex) {
    this.developers.splice(devIndex, 1);
  }
  getDevs() {
    this.developers.forEach(dev => console.log(dev));
  }
}

let id1 = new Developer('Петр Лавочкин', 128, '01.01.1900', 13, 'Департамент разработки прошлого');
let id2 = new Developer('Константин Демонов', 48, '01.01.2000', 11533, 'Департамент разработки будущего');
let id3 = new Developer('Татьяна Акромова', 38, '01.01.1980', 2434, 'Департамент разработки чего-то');
let id4 = new Manager('Повелител Миньонов', 218, '01.01.1800', 5666533, 'Департамент разработки');

console.log(id1.displayInfo());
console.log(id2.displayInfo());
console.log(id3.displayInfo());
console.log(id4.displayInfo());
console.log(`////// назначили 2 разрабов менеджеру`);

id4.addDev(id1);
id4.addDev(id2);
id4.getDevs();

console.log(`////// удалили разраба`);

id4.removeDev(0);
id4.getDevs();

console.log(`////// назначили менеджера`);

id3.setManager(id4);
console.log(id3);


/* 4. *При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта. Этот объект нужно вывести в консоли.*/
console.log(`////Задание 4:`);

function query() {
  let values = [];
  while (true) {
    let answer = prompt('Введите данные');
    if (answer === null) break;
    values.push(answer);
  }
  return { ...values };
}

console.log(query());



/* 5. *Написать цикл, который создает массив промисов. Внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10. В итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.  */
console.log(`////Задание 5:`);
let arr = [];
for (let i = 1; i < 11; i++) {
  let promise = new Promise((resolve, reject) => {
    resolve(i);
  });

  promise.then(
    (i) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
    }
  ).then(res => {
    return res.json();
  }
  ).then(res => {
    // console.log(res);
    arr.push(res);
  }
  );
}
setTimeout(() => {
  console.log(arr);
}, 2000);





