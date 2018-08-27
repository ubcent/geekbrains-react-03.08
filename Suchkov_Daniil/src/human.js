export class Human {
    constructor (name, age){
        this.name = name;
        this.age = age
    }

    sayHi(){
        return `Hi ${this.name} you age is ${this.age}`;
    }
}