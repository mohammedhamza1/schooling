import {Component, OnInit} from '@angular/core';
import {AteachersService} from '../../admin-services/ateachers.service';

@Component({
    selector: 'app-ateachers',
    templateUrl: './ateachers.component.html',
    styleUrls: ['./ateachers.component.css']
})
export class AteachersComponent implements OnInit {
    users: any;
    p: number;
    collectionArray: any;

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
        this.p = 1;
        this.collectionArray = [];
        for (let i = 1; i <= 100; i++) {
            this.collectionArray.push('Test '+ i);
        }
    }

}
