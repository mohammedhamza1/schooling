import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../home-services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private _router: Router,
      private  userLogged: LoginService,
  ) {}

  ngOnInit() {
  }
    sendUser(userInformation: any){
       if (userInformation.email === 'student' && userInformation.password === 'student'){
           this.userLogged.setUserLoggedIn();
           this._router.navigate(['student']);
       } else if(userInformation.email === 'parent' && userInformation.password === 'parent'){
           this._router.navigate(['parent']);
       }
    }
}
