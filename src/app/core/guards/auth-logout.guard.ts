import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthLogutGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate() {
		const token = window.localStorage.getItem('token');
		if (token) {
			this.router.navigate(['./']);
		}
		return true;
	}
}
