import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDataService } from '../auth-service/auth-data.service';
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
		private authData: AuthDataService
	) {}

	authForm: FormGroup;

	ngOnInit(): void {
		this.authForm = this.fb.group({
			password: ['', [Validators.required]],
			username: ['', [Validators.required]]
		});
	}

	submit(form: FormGroup) {
		if (form.invalid) return;
		const auth: AuthData = {
			username: form.controls.username.value,
			password: form.controls.password.value
		};
		this.authSerivce.auth(auth);
	}

	getlist() {
		this.authData.getUserList();
	}
}
