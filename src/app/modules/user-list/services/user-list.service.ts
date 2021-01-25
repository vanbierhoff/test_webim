import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
	constructor(private http: HttpClient) {}

	getUserList(): Observable<any> {
		const url =
			'https://emphasoft-test-assignment.herokuapp.com/api/v1/users/';
		return this.http.get(url);
	}
}
