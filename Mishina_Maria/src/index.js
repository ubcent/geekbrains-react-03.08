import {Developer} from './user';

const vasya = new Developer('Maria','Mishina');

const div = document.createElement('div');
div.innerHTML = vasya.sayHi();
document.body.appendChild(div);

div.onclick = function () {
    let today = new Date();
    alert(`Hi, today ${today}`);
}