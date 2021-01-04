import { Customer } from './Customer.js';
import SavingsAccount from './SavingsAccount.js';
import Account from './Account.js';
import SalaryAccount from './SalaryAccount.js';

const newCustomer = new Customer('João', '49959949494');


const account = new SalaryAccount(newCustomer);
account.cashDeposit(200);
account.withdrawMoney(100);

console.log(account);
