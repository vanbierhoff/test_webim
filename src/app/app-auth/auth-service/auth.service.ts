import { Injectable } from '@angular/core';
import { AuthData } from '../app-auth/app-auth.component';
import { AuthDataService } from './auth-data.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

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
					console.log('err');
					return throwError(error);
				})
			)
			.toPromise();
		this.saveToken(resp);
		this.router.navigate(['./']);
	}

	saveToken(token: string) {
		window.localStorage.setItem('token', token);
	}
}
