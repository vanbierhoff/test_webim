/* eslint-disable import/no-cycle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

export interface AuthData {
	username: string;
	password: string;
}

@Component({
	selector: 'app-auth',
	templateUrl: './app-auth.component.html',
	styleUrls: ['./app-auth.component.scss']
})
export class AppAuthComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private authSerivce: AuthService,
		private router: Router
	) {}

	authForm: FormGroup;

	error = false;

	ngOnInit(): void {
		this.authForm = this.fb.group({
			password: ['', [Validators.required]],
			username: ['', [Validators.required]]
		});
	}

	async submit(form: FormGroup) {
		this.error = false;
		this.authForm.markAllAsTouched();
		this.authForm.markAsDirty();
		if (form.invalid) return;

		const auth: AuthData = {
			username: form.controls.username.value,
			password: form.controls.password.value
		};

		try {
			await this.authSerivce.auth(auth);
			this.router.navigate(['/']);
		} catch (error) {
			if (error.status === 400) {
				this.error = true;
			}
		}
	}
}
