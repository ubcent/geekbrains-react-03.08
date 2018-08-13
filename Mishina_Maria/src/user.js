import './index.css';
import {Teacher} from './teacher';
const teacher = new Teacher('Dmitriy');

export class Developer {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHi(){
        return `Hi, ${teacher.say()}! My name is ${this.firstName} =)`;
    }
}