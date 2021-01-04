# Javascritpt-orientacao-objetos
JavaScript: Programando a Orientação a Objetos

## Installation

Clone the repository.

```bash
npm start

```

## Usage

```javascript
import Account from './Account.js'

const newCustomer = new Customer('João', '49959949494');

const account = new SalaryAccount(newCustomer);
account.cashDeposit(200);
account.withdrawMoney(100);

console.log(account);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)