import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tclasses',
  templateUrl: './tclasses.component.html',
  styleUrls: ['./tclasses.component.css']
})
export class TclassesComponent implements OnInit {
    p: number;
    classesArray: any;
    studentsArray: any;

    constructor() {
    }

    ngOnInit() {
        this.p = 1;
        this.classesArray = [
            {id: 1, name: 'b-4', level: '4', studentsNum: 30},
            {id: 3, name: 'c-2', level: '6', studentsNum: 40}
        ];

        this.studentsArray = [
            {id: 1, fname: 'mohammed', lname: 'hamza', class: 'b-2'},
            {id: 2, fname: 'ahmed', lname: 'ali', class: 'b-2'},
            {id: 3, fname: 'ali', lname: 'hamza', class: 'b-2'},
            {id: 4, fname: 'hassan', lname: 'mohammed', class: 'b-2'},
            {id: 5, fname: 'nour', lname: 'elbana', class: 'b-2'},
            {id: 6, fname: 'sayed', lname: 'mohamady', class: 'b-2'},
            {id: 7, fname: 'karim', lname: 'ashraf', class: 'b-2'},
            {id: 8, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
            {id: 9, fname: 'salah', lname: 'hegazi', class: 'b-2'},
            {id: 10, fname: 'amr', lname: 'nour', class: 'b-2'},
            {id: 11, fname: 'khaled', lname: 'ali', class: 'b-2'}
        ];
    }

}
