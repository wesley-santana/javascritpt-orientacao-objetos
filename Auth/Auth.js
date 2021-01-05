class Auth {
  static login(user, password){
    if(Auth.isAuthenticate(user)){
      return user.authenticate(password);
    }
    return false;
  }
  
  static isAuthenticate(user){
    return 'authenticate' in user && user.authenticate instanceof Function;
  }
}

export default Auth;
