import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutNavigationComponent } from './app-layout-navigation.component';

const router: Routes = [
	{
		path: '',
		component: AppLayoutNavigationComponent,
		children: [
			{
				path: 'userlist',
				loadChildren: () =>
					import('../user-list/user-list.module').then(
						m => m.UserListModule
					)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(router)],
	exports: [],
	declarations: [AppLayoutNavigationComponent],
	providers: []
})
export class AppLayoutNavigationModule {}
