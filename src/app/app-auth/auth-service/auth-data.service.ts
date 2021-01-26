/* eslint-disable import/no-cycle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthData } from '../app-auth/app-auth.component';
import { AuthOptions } from '../models/model';

@Injectable()
export class AuthDataService {
	constructor(private http: HttpClient) {}

	optionsAuth = {};

	logIn(authData: AuthData): Observable<any> {
		const options: AuthOptions = {
			Name: 'Authorization'
		};
		const url =
			'https://emphasoft-test-assignment.herokuapp.com/api-token-auth/';
		return this.http.post(url, authData, { params: options });
	}
}
