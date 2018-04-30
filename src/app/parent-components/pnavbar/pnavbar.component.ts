import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pnavbar',
  templateUrl: './pnavbar.component.html',
  styleUrls: ['./pnavbar.component.css']
})
export class PnavbarComponent implements OnInit {
 @Input() parentName: string;
  constructor() { }

  ngOnInit() {
  }

}
