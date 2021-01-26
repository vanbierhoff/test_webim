import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthLogoutGuard } from 'app/core/guards/auth-logout.guard';
import { AppAuthComponent } from './app-auth.component';
import { AuthService } from '../auth-service/auth.service';
import { AuthDataService } from '../auth-service/auth-data.service';

const routes: Routes = [
	{
		path: 'login',
		canActivate: [AuthLogoutGuard],
		component: AppAuthComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	exports: [AppAuthComponent],
	declarations: [AppAuthComponent],
	providers: [AuthService, AuthDataService, AuthLogoutGuard]
})
export class AppAuthModule {}
