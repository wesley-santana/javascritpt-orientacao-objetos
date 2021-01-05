import Manager from './Employees/Manager.js';
import Auth from './Auth/Auth.js';

const manager = new Manager('Wesley', 10000, 3430010110);

manager.createPassword(1234);
const isAuth = Auth.login(manager, 2232323);
console.log(manager.password);
console.log(isAuth);
