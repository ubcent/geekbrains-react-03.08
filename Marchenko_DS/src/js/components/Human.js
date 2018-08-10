export default class Human{
    constructor(firstName, lastName){
        if(typeof firstName === 'string'&& typeof lastName === 'string') {
            this.firstName = firstName;
            this.lastName = lastName;
        }else{
            throw new Error('Аргументы не переданы или не являются строками')
        }
    }

    render(container){
        const result = document.createElement('div');

        result.textContent = `${this.firstName} ${this.lastName}`;
        container.append(result);

        return result;
    }
}