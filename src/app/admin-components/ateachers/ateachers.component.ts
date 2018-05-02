import {Component, OnInit} from '@angular/core';
import {AteachersService} from '../../admin-services/ateachers.service';

@Component({
    selector: 'app-ateachers',
    templateUrl: './ateachers.component.html',
    styleUrls: ['./ateachers.component.css']
})
export class AteachersComponent implements OnInit {
    users: any;

    constructor(
        private teachersTable: AteachersService,
    ) {
        this.teachersTable.getUsers().subscribe(
            data => {
                this.users = data;
            }
        );
    }

    ngOnInit() {
    }

}
