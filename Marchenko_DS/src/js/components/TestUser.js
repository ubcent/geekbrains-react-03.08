import Human from './Helper';
import Human from './Human';

export default class TestUser extends Human {
    constructor(firstName, lastName, login, age) {
        super(firstName, lastName);
        if (typeof login === 'string' && typeof age === 'number') {
            this.login = login;
            this.age = age;
        }
        this.state = {
            isOpen: true
        }
    }

    render(container) {
        super.render(container);
        const result = document.createElement('div');
        const login = document.createElement('p');
        const age = document.createElement('p');
        const button = document.createElement('button');

        login.textContent = `Login: ${this.login}`;
        age.textContent = `Age: ${this.age}`;
        button.textContent = 'Показать дату';
        result.appendChild(login);
        result.appendChild(age);
        container.appendChild(result);
        result.appendChild(button);
        this.renderDate(result, button);

        return result;
    }

    renderDate(container, button) {
        const {isOpen} = this.state;
        const dateContainer = document.createElement('p');
        const date = document.createElement('span');
        date.textContent = `${Helper.DateToStr(new Date)}`;

        button.addEventListener('click', () => {
            if (isOpen) {
                dateContainer.appendChild(date);
                container.appendChild(dateContainer);
                button.textContent = 'Скрыть дату';
                isOpen = !isOpen;
            } else {
                dateContainer.removeChild(date);
                isOpen = !isOpen;
                button.textContent = 'Показать дату';
            }
        });

    }


}