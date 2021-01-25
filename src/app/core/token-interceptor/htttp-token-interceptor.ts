import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpEvent,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
	constructor(private router: Router) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (window.localStorage.getItem('token')) {
			// eslint-disable-next-line no-param-reassign
			request = this.addToken(request);
		}
		return next.handle(request).pipe(
			catchError(
				(err: any): Observable<never> => {
					if (
						err instanceof HttpErrorResponse &&
						err.status === 401
					) {
						window.localStorage?.removeItem('token');
						this.router.navigate(['/login']);
						return throwError(err);
					}
					return throwError(err);
				}
			)
		);
	}

	private addToken(request: HttpRequest<any>) {
		const token = window.localStorage.getItem('token');
		return request.clone({
			setHeaders: {
				Authorization: ` token ${token}`
			}
		});
	}
}
