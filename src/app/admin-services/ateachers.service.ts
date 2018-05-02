import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AteachersService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res);
    }

}
