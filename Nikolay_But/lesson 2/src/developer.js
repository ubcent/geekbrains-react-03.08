import { Human } from './user';


export class Developer extends Human {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  displayInfo() {
    return {
      'firstName': this.firstName,
      'lastName': this.lastName
    };
  }
}