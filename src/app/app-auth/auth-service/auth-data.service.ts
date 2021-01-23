import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthData } from '../app-auth/app-auth.component';

@Injectable()
export class AuthDataService {
	constructor(private http: HttpClient) {}

	optionsAuth = {};

	logIn(authData: AuthData): Observable<any> {
		const options: any = {
			Name: 'Authorization'
		};
		const url =
			'https://emphasoft-test-assignment.herokuapp.com/api-token-auth/';
		return this.http.post(url, authData, { params: options });
	}

	getUserList() {
		const options: any = {
			Authorization: 'token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e'
		};

		const url2 =
			'https://emphasoft-test-assignment.herokuapp.com/api/v1/users/';
		this.http.get(url2, { headers: options }).subscribe(resp => {
			console.log(resp);
		});
	}
}
