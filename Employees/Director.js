import Employee from './Employee.js';

class Director  extends Employee {
  constructor(name, salary, cpf){
    super(name, salary, cpf);
    this._bonus = 3;
  }
}

export default Director;
