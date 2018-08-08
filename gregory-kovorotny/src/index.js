import { User } from './components/user';
import { Developer } from './components/developer';

const appUser = new User({
  firstName: 'Agent',
  lastName: 'Smith',
});

const leadDeveloper = new Developer({
  firstName: 'Gregory',
  lastName: 'Kovorotny',
});

document.getElementById('user').innerHTML = appUser.sayHi();

document.getElementById('developer').innerHTML = `This app is being created by ${leadDeveloper.getInfo()}`;
