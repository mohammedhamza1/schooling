import {Component, OnInit} from '@angular/core';
import {AteachersService} from '../../../admin-services/ateachers.service';

@Component({
    selector: 'app-ateachers',
    templateUrl: './ateachers.component.html',
    styleUrls: ['./ateachers.component.css']
})
export class AteachersComponent implements OnInit {
    users: any;
    p: number;
    teacherArray: object[];

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
        this.teacherArray = [
            {
                id: 1,
                fname: 'ramadan',
                lname: 'mabrouk',
                course: 'english',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 2,
                fname: 'ahmed',
                lname: 'hesham',
                course: 'arabic',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 3,
                fname: 'mohammed',
                lname: 'hamza',
                course: 'science',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 4,
                fname: 'ali',
                lname: 'ahmed',
                course: 'history',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 5,
                fname: 'hazem',
                lname: 'ali',
                course: 'biology',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 6,
                fname: 'mervet',
                lname: 'mabrouk',
                course: 'mathematics',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 7,
                fname: 'amira',
                lname: 'hassan',
                course: 'english',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                fname: 'hassan',
                lname: 'hamza',
                course: 'arabic',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 8,
                fname: 'hamza',
                lname: 'ramadan',
                course: 'history',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
            {
                id: 9,
                fname: 'ramadan',
                lname: 'hamza',
                course: 'arabic',
                year: '4th',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim eos, esse fugiat rem voluptatum.'
            },
        ];

    }

}
