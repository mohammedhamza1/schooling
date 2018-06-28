import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
    p: number;
    classesArray: any;

    constructor() {
    }

    ngOnInit() {
        this.p = 1;
        this.classesArray = [
            {id: 1, name: 'b-2', level: '4', studentsNum: 30},
            {id: 2, name: 'a-4', level: '5', studentsNum: 20},
            {id: 3, name: 'c-6', level: '6', studentsNum: 40},
            {id: 4, name: 'd-1', level: '3', studentsNum: 35}
        ];
    }

}
