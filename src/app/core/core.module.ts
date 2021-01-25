import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLogoutGuard } from './guards/auth-logout.guard';
import { AuthGuard } from './guards/auth.guard';
import { HttpTokenInterceptor } from './token-interceptor/htttp-token-interceptor';

const routes: Routes = [
	{
		path: 'login',
		canActivate: [AuthLogoutGuard],
		loadChildren: () =>
			import('../app-auth/app-auth/app-auth.module').then(
				m => m.AppAuthModule
			)
	},
	{
		path: '',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../modules/appLayout.module').then(m => m.AppLayoutModule)
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
	providers: [
		AuthGuard,
		AuthLogoutGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpTokenInterceptor,
			multi: true
		}
	]
})
export class CoreModule {}
