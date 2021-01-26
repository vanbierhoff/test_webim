import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthDataService } from './auth-data.service';
import { AuthData } from '../app-auth/app-auth.component';

@Injectable()
export class AuthService {
	constructor(
		private authDataService: AuthDataService,
		private router: Router
	) {}

	async auth(authData: AuthData) {
		const resp = await this.authDataService
			.logIn(authData)
			.pipe(
				catchError(error => {
					return throwError(error);
				})
			)
			.toPromise();

		this.saveToken(resp);
		this.router.navigate(['./']);
	}

	saveToken(resp: any) {
		window.localStorage.setItem('token', resp.token);
	}
}
