import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aevents-and-news',
    templateUrl: './aevents-and-news.component.html',
    styleUrls: ['./aevents-and-news.component.css']
})
export class AeventsAndNewsComponent implements OnInit {
    showEventsSection: boolean;
    showNewsSection: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showEventsSection = true;
        this.showNewsSection = false;
    }

    showEvents() {
        this.showNewsSection = false;
        this.showEventsSection = true;
    }

    showNews() {
        this.showEventsSection = false;
        this.showNewsSection = true;
    }

}
