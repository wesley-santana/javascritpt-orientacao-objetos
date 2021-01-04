import Account from './Account.js';

class SavingsAccount  extends Account{
  constructor(agency, customer){
    super(0, agency, customer);
  }

  withdrawMoney = (amount) => {
    const rate = 4.60;
    this._withdrawMoney(amount, rate);
  }

}

export default SavingsAccount;