import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHome: boolean = false;
  showStudent: boolean = true;
  studentName: string = 'mohammed';
}
