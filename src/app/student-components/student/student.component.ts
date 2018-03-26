import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../home-services/login.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentName: string;
  constructor(
      private userLogged: LoginService,
  ) { }

  ngOnInit() {
    this.studentName = 'mohammed';
  }

}
