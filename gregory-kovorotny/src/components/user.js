import './user.css';

export class User {
  constructor(name) {
    this._firstName = name.firstName;
    this._lastName = name.lastName;
  }

  sayHi() {
    return `Hi, ${this._firstName} ${this._lastName}`;
  }
}
