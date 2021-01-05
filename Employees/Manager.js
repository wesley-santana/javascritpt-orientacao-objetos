import Employee from './Employee.js';

class Manager  extends Employee {
  constructor(name, salary, cpf){
    super(name, salary, cpf);
    this._bonus = 2;
  }
}

export default Manager;
