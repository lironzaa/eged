import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { takeUntil } from "rxjs";
import { Store } from "@ngrx/store";

import { usersFeature } from "../../store/users.reducer";
import { Unsubscribe } from "../../../../shared/class/unsubscribe.class";
import { SelectedUser, User } from "../../interfaces/user-interface";
import { setSelectedUser } from "../../store/users.actions";

@Component({
  selector: "app-search-user",
  templateUrl: "./search-user.component.html",
  styleUrl: "./search-user.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUserComponent extends Unsubscribe implements OnInit, OnDestroy {
  usersIds: string[] = [];
  selectedUser!: SelectedUser | null
  users: User[] = [];

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.initStoreSelects();
  }

  initStoreSelects(): void {
    this.store.select(usersFeature.selectUsersIdsAsStrings).pipe(takeUntil(this.unsubscribe$))
      .subscribe(usersIds => this.usersIds = usersIds);
    this.store.select(usersFeature.selectUsers).pipe(takeUntil(this.unsubscribe$))
      .subscribe(users => this.users = users);
    this.store.select(usersFeature.selectSelectedUser).pipe(takeUntil(this.unsubscribe$))
      .subscribe(selectedUser => this.selectedUser = selectedUser);
  }

  onUserIdSelect(userId: string): void {
    const selectedUser = this.users.find(user => user.id === +userId);
    if (selectedUser) this.store.dispatch(setSelectedUser({ selectedUser }));
  }

  override ngOnDestroy(): void {
    this.store.dispatch(setSelectedUser({ selectedUser: null }));
    super.ngOnDestroy();
  }
}
