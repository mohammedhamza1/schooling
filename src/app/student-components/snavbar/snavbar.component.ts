import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snavbar',
  templateUrl: './snavbar.component.html',
  styleUrls: ['./snavbar.component.css']
})
export class SnavbarComponent implements OnInit {

  @Input() studentName: string;

  constructor() { }

  ngOnInit() {
  }

}
