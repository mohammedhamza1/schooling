import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ttimetable',
    templateUrl: './ttimetable.component.html',
    styleUrls: ['./ttimetable.component.css']
})
export class TtimetableComponent implements OnInit {
    periods: number[];
    classes: object[];
    times: object[];

    constructor() {
    }

    ngOnInit() {
        this.periods = [1, 2, 3, 4];
        this.classes = [
            {day: 'Saturday', class: 'c-2', one: '', two: '', three: 'c-2', four: ''},
            {day: 'Sunday', class: '', one: '', two: '', three: '', four: ''},
            {day: 'Monday', class: '', one: '', two: '', three: '', four: ''},
            {day: 'Tuesday', class: 'b-4', one: '', two: '', three: '', four: 'b-4'},
            {day: 'Wednesday', class: 'b-4', one: '', two: 'b-4', three: '', four: ''},
            {day: 'Thursday', class: 'c-2', one: 'c-2', two: '', three: '', four: ''},
        ];

        this.times = [
            {one: '08:00', two: '09:30', three: '11:00', four: '12:30', five: '02:00', six: '03:30'}
        ];
    }

}
