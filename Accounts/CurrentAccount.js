import Account from './Account.js';

export class CurrentAccount  extends Account {
  constructor(balance, agency, customer){
    super(balance, agency, customer);
  }
}

export default CurrentAccount;
