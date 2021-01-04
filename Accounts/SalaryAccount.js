import Account from './Account.js';

class SalaryAccount extends Account {
  constructor(customer){
    super(0,100, customer);
  }

  withdrawMoney = (amount) => {
    const rate = 4.60;
    this._withdrawMoney(amount, rate);
  }

}

export default SalaryAccount;