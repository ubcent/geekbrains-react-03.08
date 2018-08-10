
export class Human{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello(){
    console.log(`Hello i am ${this.firstName} ${this.lastName}`);
  }
}