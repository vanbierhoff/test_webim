import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLogutGuard } from './guards/auth-logout.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		canActivate: [AuthLogutGuard],
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
	providers: [AuthGuard, AuthLogutGuard]
})
export class CoreRouterModule {}
