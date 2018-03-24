import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  showLecture: boolean;
  showMidTerm: boolean;
  showFinal: boolean;
  constructor() { }

  ngOnInit() {
    this.showLecture = true;
    this.showMidTerm = false;
    this.showFinal = false;
  }
  showLectureTable() {
    this.showLecture = true;
    this.showMidTerm = false;
    this.showFinal = false;

  }
  showMidTermTable() {
    this.showLecture = false;
    this.showMidTerm = true;
    this.showFinal = false;
  }
  showFinalTable() {
    this.showLecture = false;
    this.showMidTerm = false;
    this.showFinal = true;
  }

}
