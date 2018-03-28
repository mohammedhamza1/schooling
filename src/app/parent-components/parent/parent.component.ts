import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    parentName: string;
    parentFullName: string;
  constructor() { }

  ngOnInit() {
    this.parentName = 'hamza';
    this.parentFullName = 'hamza makram';
  }
}
