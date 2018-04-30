import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pcontact',
    templateUrl: './pcontact.component.html',
    styleUrls: ['./pcontact.component.css']
})
export class PcontactComponent implements OnInit {
    parentMessage: any;
    teacher: string;
    showTeacherForm: boolean;
    showAlert: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showTeacherForm = false;
        this.showAlert = false;
    }

    sendMessage(formData: any) {
        this.parentMessage = formData;
        console.log(this.parentMessage);
        this.showTeacherForm = false;
        this.teacher = '';
        this.showAlert = true;
    }

    showTForm() {
        this.showAlert = false;
        if (this.teacher) {
            this.showTeacherForm = true;
        }
    }

}
