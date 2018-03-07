import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  days: object[];
  classes: number[];
  classTime: object[];

  constructor() { }

  ngOnInit() {
    this.days = [
      { day: 'Saturday', one: 'arabic', two: 'bio', three: 'science', four: 'math', five: 'history', six: 'bio' },
      { day: 'Sunday', one: 'english', two: 'science', three: 'history', four: 'science', five: 'math', six: 'history' },
      { day: 'Monday', one: 'math', two: 'history', three: 'math', four: 'history', five: 'bio', six: 'math' },
      { day: 'Tuesday', one: 'history', two: 'math', three: 'english', four: 'arabic', five: 'arabic', six: 'english' },
      { day: 'Wednesday', one: 'science', two: 'english', three: 'arabic', four: 'bio', five: 'science', six: 'arabic' },
      { day: 'Thursday ', one: 'bio', two: 'arabic', three: 'bio', four: 'english', five: 'english', six: 'science' },
    ]

    this.classes = [1, 2, 3, 4, 5, 6]

    this.classTime = [
      { one: '08:00', two: '09:30', three: '11:00', four: '12:30', five: '02:00', six: '03:30' }
    ]

  }

}
