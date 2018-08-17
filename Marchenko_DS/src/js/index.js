import '././css/user.css';
import TestUser from './components/TestUser';

const rootDiv = document.getElementById('testUser');
const testUser = new TestUser('Test', 'Testovich', 'devops', 28);

testUser.render(rootDiv);

