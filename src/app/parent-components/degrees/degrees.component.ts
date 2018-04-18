import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-degrees',
    templateUrl: './degrees.component.html',
    styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
    firstFinal: boolean;
    secondFinal: boolean;
    firstYearWorks: boolean;
    secondYearWorks: boolean;

    constructor() {
    }

    ngOnInit() {
        this.firstFinal = false;
        this.secondFinal = true;
        this.firstYearWorks = false;
        this.secondYearWorks = true;
    }

    showFirstFinal() {
        this.firstFinal = true;
        this.secondFinal = false;
    }

    showSecondFinal() {
        this.firstFinal = false;
        this.secondFinal = true;
    }

    showFirstYearWorks() {
        this.firstYearWorks = true;
        this.secondYearWorks = false;
    }

    showSecondYearWorks() {
        this.firstYearWorks = false;
        this.secondYearWorks = true;
    }

}
