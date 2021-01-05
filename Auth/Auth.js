class Auth {
  static login(employee, password){
    return employee.password === password;
  }
}

export default Auth;
