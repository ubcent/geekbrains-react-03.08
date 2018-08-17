export class Teacher {
    constructor(firstName) {
        this.firstName = firstName;
    }

    say(){
        return `${this.firstName}`;
    }
}