import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
    showTeachersTable: boolean;
    showClassesTable: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showTeachersTable = true;
        this.showClassesTable = false;
    }

    showTeachers() {
        this.showClassesTable = false;
        this.showTeachersTable = true;
    }
    showClasses(){
        this.showTeachersTable = false;
        this.showClassesTable = true;
    }

}
