import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-year-works-degrees',
    templateUrl: './year-works-degrees.component.html',
    styleUrls: ['./year-works-degrees.component.css']
})
export class YearWorksDegreesComponent implements OnInit {
    @Input() firstYearWorks: boolean;
    @Input() secondYearWorks: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
