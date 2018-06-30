import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aparents',
    templateUrl: './aparents.component.html',
    styleUrls: ['./aparents.component.css']
})
export class AparentsComponent implements OnInit {
    parentsArray: any;
    term: string;

    constructor() {
    }

    ngOnInit() {
        this.parentsArray = [
            {id: 1, fname: 'hamza', lname: 'makram'},
            {id: 2, fname: 'ahmed', lname: 'ali'},
            {id: 3, fname: 'mahmoud', lname: 'hegazi'},
            {id: 4, fname: 'eslam', lname: 'ali'},
            {id: 5, fname: 'adel', lname: 'amer'},
        ];
    }

}
