import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
private  isUserLoggedIn: boolean;
private  username;
  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}
