import './user.css';

export class Developer {
  constructor(lastname, firstname, fathername ) {
    this.firstname = firstname;
    this.fathername = fathername;
    this.lastname = lastname
  }

  sayHello() {
    return `Hello, ${this.lastname} ${this.firstname} ${this.fathername}`;
  }

}