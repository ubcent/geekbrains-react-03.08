import {Human} from './user';
import {Developer} from './developer';
import {myGetDate} from './date';


const vasya = new Human('Vasya', 'Pupkin');
const petya = new Developer('Petya', 'Petrov');

const dateButton = document.createElement('button');
dateButton.textContent = `Показать/убрать текущую дату`;

dateButton.addEventListener('click', () => {
  const dateEl = document.body.querySelector('[data-el="date"]');

  if (dateEl) {
    dateEl.remove();
  } else {
    const Date = new myGetDate;
    const now = Date.display();
    const dateEl = document.createElement('span');
    dateEl.dataset.el = 'date';
    dateEl.textContent = now;
    document.body.appendChild(dateEl);
  }
});

document.body.appendChild(dateButton);