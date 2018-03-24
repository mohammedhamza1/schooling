import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../student-services/timetable.service';

@Component({
  selector: 'app-lectures-table',
  templateUrl: './lectures-table.component.html',
  styleUrls: ['./lectures-table.component.css']
})
export class LecturesTableComponent implements OnInit {
  days: object[];
  classes: number[];
  classTime: object[];

  constructor(
      private lectureTable: TimetableService,
      private classesTable: TimetableService,
      private classTimeTable: TimetableService
  ) { }

  ngOnInit() {
    this.days = this.lectureTable.lectureArray();
    this.classes = this.classesTable.classesArray();
    this.classTime = this.classTimeTable.classesTimeArray();
  }

}
