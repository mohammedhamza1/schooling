import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aparents',
    templateUrl: './aparents.component.html',
    styleUrls: ['./aparents.component.css']
})
export class AparentsComponent implements OnInit {
    items: any;
    term: any;

    constructor() {
    }

    ngOnInit() {
        this.items = [
            {name: 'archie'}, {name: 'jake'}, {name: 'richard'}
        ];
    }

}
