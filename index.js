import { Customer } from './Customer/Customer.js';
import SalaryAccount from './Accounts/SalaryAccount.js';

const newCustomer = new Customer('João', '49959949494');


const account = new SalaryAccount(newCustomer);
account.cashDeposit(200);
account.withdrawMoney(100);

console.log(account);
