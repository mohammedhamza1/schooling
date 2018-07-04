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
            {
                id: 1,
                name: 'b-4',
                level: '4',
                classStudents: [
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
                    {id: 11, fname: 'khaled', lname: 'ali', class: 'b-2'},
                    {id: 12, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
                    {id: 13, fname: 'salah', lname: 'hegazi', class: 'b-2'},
                    {id: 14, fname: 'amr', lname: 'nour', class: 'b-2'},
                    {id: 15, fname: 'fawzy', lname: 'magdy', class: 'b-2'},
                    {id: 16, fname: 'hani', lname: 'eissa', class: 'b-2'},
                    {id: 17, fname: 'magdy', lname: 'ebrahim', class: 'b-2'},
                    {id: 18, fname: 'hassan', lname: 'mohammed', class: 'b-2'},
                    {id: 19, fname: 'nour', lname: 'elbana', class: 'b-2'},
                ]
            },
            {
                id: 2,
                name: 'c-2',
                level: '5',
                classStudents: [
                    {id: 1, fname: 'fawzy', lname: 'magdy', class: 'b-2'},
                    {id: 2, fname: 'hani', lname: 'eissa', class: 'b-2'},
                    {id: 3, fname: 'magdy', lname: 'ebrahim', class: 'b-2'},
                    {id: 4, fname: 'hassan', lname: 'mohammed', class: 'b-2'},
                    {id: 5, fname: 'nour', lname: 'elbana', class: 'b-2'},
                    {id: 6, fname: 'sayed', lname: 'mohamady', class: 'b-2'},
                    {id: 7, fname: 'karim', lname: 'ashraf', class: 'b-2'},
                    {id: 8, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
                    {id: 9, fname: 'salah', lname: 'hegazi', class: 'b-2'},
                    {id: 10, fname: 'amr', lname: 'nour', class: 'b-2'},
                    {id: 11, fname: 'khaled', lname: 'ali', class: 'b-2'}
                ]
            },
            {
                id: 3,
                name: 'd-2',
                level: '6',
                classStudents: [
                    {id: 1, fname: 'fawzy', lname: 'magdy', class: 'b-2'},
                    {id: 2, fname: 'hani', lname: 'eissa', class: 'b-2'},
                    {id: 3, fname: 'magdy', lname: 'ebrahim', class: 'b-2'},
                    {id: 4, fname: 'hassan', lname: 'mohammed', class: 'b-2'},
                    {id: 5, fname: 'nour', lname: 'elbana', class: 'b-2'},
                    {id: 6, fname: 'sayed', lname: 'mohamady', class: 'b-2'},
                    {id: 7, fname: 'karim', lname: 'ashraf', class: 'b-2'},
                    {id: 8, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
                    {id: 9, fname: 'salah', lname: 'hegazi', class: 'b-2'},
                    {id: 10, fname: 'amr', lname: 'nour', class: 'b-2'}
                ]
            },
            {
                id: 4,
                name: 'a-6',
                level: '2',
                classStudents: [
                    {id: 1, fname: 'fawzy', lname: 'magdy', class: 'b-2'},
                    {id: 2, fname: 'hani', lname: 'eissa', class: 'b-2'},
                    {id: 3, fname: 'magdy', lname: 'ebrahim', class: 'b-2'},
                    {id: 4, fname: 'hassan', lname: 'mohammed', class: 'b-2'},
                    {id: 5, fname: 'nour', lname: 'elbana', class: 'b-2'},
                    {id: 6, fname: 'sayed', lname: 'mohamady', class: 'b-2'},
                    {id: 7, fname: 'karim', lname: 'ashraf', class: 'b-2'},
                    {id: 8, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
                    {id: 9, fname: 'salah', lname: 'hegazi', class: 'b-2'},
                    {id: 10, fname: 'amr', lname: 'nour', class: 'b-2'},
                    {id: 11, fname: 'khaled', lname: 'ali', class: 'b-2'},
                    {id: 12, fname: 'nour', lname: 'elbana', class: 'b-2'},
                    {id: 13, fname: 'sayed', lname: 'mohamady', class: 'b-2'},
                    {id: 14, fname: 'karim', lname: 'ashraf', class: 'b-2'},
                    {id: 15, fname: 'ibrahem', lname: 'adel', class: 'b-2'},
                    {id: 16, fname: 'salah', lname: 'hegazi', class: 'b-2'}
                ]
            }
        ];
    }

}
