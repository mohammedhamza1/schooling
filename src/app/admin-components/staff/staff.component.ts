import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
    showTeachersTable: boolean;
    showStaffTable: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showTeachersTable = true;
        this.showStaffTable = false;
    }

    showTeachers() {
        this.showStaffTable = false;
        this.showTeachersTable = true;
    }
    showStaff(){
        this.showTeachersTable = false;
        this.showStaffTable = true;
    }

}
