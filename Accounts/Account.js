class Account {
  constructor(balance, agency, customer){
      this._balance = balance;
      this._agency = agency;
      this._customer = customer;
      if(this.constructor === Account){
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

  withdrawMoney = (amount) => {
    throw new Error("Method 'withdrawMoney()' must be implemented.")
  }
  
  _withdrawMoney = (amount, rate) => {
    if(this._balance <= amount){ return };
    this._balance -= (amount + rate);
    return amount;
  }

  cashDeposit = (amount) => {
    if(amount <= 100 ) { return };
    this._balance += amount ;
  }

  transfer = (amount, currentAccount) => {
    const amountWithdrawn = this.withdrawMoney(amount);
    currentAccount.cashDeposit(amountWithdrawn);
    amount = 20;
  }
}

export default Account;