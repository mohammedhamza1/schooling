import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../student-services/timetable.service';

@Component({
  selector: 'app-final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.css']
})
export class FinalTableComponent implements OnInit {
    exams: object[];
    examTime: string;
  constructor(
      private examsTable: TimetableService,
      private  time: TimetableService,
  ) { }

  ngOnInit() {
    this.exams = this.examsTable.finalArray();
    this.examTime = this.time.finalTime();
  }

}
