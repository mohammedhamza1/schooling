import {Component, OnInit} from '@angular/core';
import {AteachersService} from '../../admin-services/ateachers.service';

@Component({
    selector: 'app-ateachers',
    templateUrl: './ateachers.component.html',
    styleUrls: ['./ateachers.component.css']
})
export class AteachersComponent implements OnInit {

    constructor(
        private teachersTable: AteachersService,
    ) {
    }

    ngOnInit() {
    }

}
