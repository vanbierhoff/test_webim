import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./app-layout-navigation/app-layout-navigate.module').then(
				m => m.AppLayoutNavigationModule
			)
	}
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [],
	// declarations: [appLayoutComponent],
	providers: [],
	declarations: []
})
export class AppLayoutModule {}
