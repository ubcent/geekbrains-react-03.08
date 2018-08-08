import './developer.css';

export class Developer {
  constructor(name) {
    this._firstName = name.firstName;
    this._lastName = name.lastName;
  }

  getInfo() {
    return `${this._firstName} ${this._lastName}`;
  }
}
