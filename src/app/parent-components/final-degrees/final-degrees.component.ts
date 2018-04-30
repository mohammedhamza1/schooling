import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-final-degrees',
    templateUrl: './final-degrees.component.html',
    styleUrls: ['./final-degrees.component.css']
})
export class FinalDegreesComponent implements OnInit {
    @Input() firstFinal: boolean;
    @Input() secondFinal: boolean;
    constructor() {
    }

    ngOnInit() {
    }

}
