import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { User } from './services/models';
import { UserListService } from './services/user-list.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
	constructor(
		private userListService: UserListService,
		private cd: ChangeDetectorRef
	) {}

	userList: User[];

	viewList: User[];

	search: FormControl = new FormControl('');

	ngOnInit() {
		this.userListService.getUserList().subscribe(userList => {
			this.userList = userList.sort(
				(prev: User, next: User) => prev.id - next.id
			);
			this.viewList = this.userList;
			this.cd.markForCheck();
		});

		this.search.valueChanges
			.pipe(debounceTime(250), distinctUntilChanged())
			.subscribe(searchValue => {
				const SEARH_REGEXP = new RegExp(searchValue, 'i');
				const viewList: User[] = [];
				this.userList.forEach(user => {
					if (SEARH_REGEXP.test(user.first_name)) {
						viewList.push(user);
					}
				});
				this.viewList = viewList;
				this.cd.markForCheck();
			});
	}
}
