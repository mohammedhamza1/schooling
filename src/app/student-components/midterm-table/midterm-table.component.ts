import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../student-services/timetable.service';

@Component({
  selector: 'app-midterm-table',
  templateUrl: './midterm-table.component.html',
  styleUrls: ['./midterm-table.component.css']
})
export class MidtermTableComponent implements OnInit {
exams: object[];
examTime: string;
  constructor(
      private examsTable: TimetableService,
      private time: TimetableService,
  ) { }

  ngOnInit() {
    this.exams = this.examsTable.midtermArray();
    this.examTime = this.time.midTime();
  }

}
