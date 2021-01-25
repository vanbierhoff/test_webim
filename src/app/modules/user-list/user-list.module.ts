import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserListService } from './services/user-list.service';

import { UserListComponent } from './user-list.component';

const routers: Routes = [
	{
		path: '',
		component: UserListComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routers),
		ReactiveFormsModule
	],
	exports: [],
	declarations: [UserListComponent],
	providers: [UserListService]
})
export class UserListModule {}
