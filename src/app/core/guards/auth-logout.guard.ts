import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthLogoutGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate() {
		const token = window.localStorage.getItem('token');
		if (token) {
			this.router.navigate(['./']);
		}
		return true;
	}
}
