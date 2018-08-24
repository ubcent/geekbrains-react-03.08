import { Developer } from './user';

const devName = new Developer('Krasnyak', 'Sergei', 'Konstantinovich');

alert(devName.sayHello());

document.write('Сейчас: ' + Date() + '<br>');
document.write(Date.now() + ' количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC ' +
  '(начало эпохи Unix).');