import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snavbar',
  templateUrl: './snavbar.component.html',
  styleUrls: ['./snavbar.component.css']
})
export class SnavbarComponent implements OnInit {
  studentName: string;
  constructor() { }

  ngOnInit() {
    this.studentName = 'mohammed';
  }

}
