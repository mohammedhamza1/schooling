import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pinformation',
  templateUrl: './pinformation.component.html',
  styleUrls: ['./pinformation.component.css']
})
export class PinformationComponent implements OnInit {
@Input() parentFullName: string;
  constructor() { }

  ngOnInit() {
  }

}
