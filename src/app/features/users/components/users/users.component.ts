import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, takeUntil } from "rxjs";

import { usersFeature, UsersState } from "../../store/users.reducer";
import { usersTableConfig } from "../../data/data-table-config";
import { DataTableItem } from "../../../../shared/interfaces/data-table-interface";
import { Unsubscribe } from "../../../../shared/class/unsubscribe.class";
import { SelectedUser, User } from "../../interfaces/user-interface";
import { setSelectedUser } from "../../store/users.actions";
import { DynamicModalComponent } from "../../../../shared/components/modals/dynamic-modal/dynamic-modal.component";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent extends Unsubscribe implements OnInit, OnDestroy {
  usersState$: Observable<UsersState>;
  tableConfig = usersTableConfig;
  selectedUser!: SelectedUser | null
  @ViewChild("dynamicModal") dynamicModal!: DynamicModalComponent;

  constructor(private store: Store) {
    super();
    this.usersState$ = store.select(usersFeature.selectUsersState);
  }

  ngOnInit(): void {
    this.initStoreSelect();
  }

  initStoreSelect(): void {
    this.store.select(usersFeature.selectSelectedUser).pipe(takeUntil(this.unsubscribe$))
      .subscribe(selectedUser => this.selectedUser = selectedUser);
  }

  onTableRowClick(item: DataTableItem): void {
    const user: User = item as unknown as User;
    this.store.dispatch(setSelectedUser({ selectedUser: user }));
    this.dynamicModal.open();
  }

  override ngOnDestroy(): void {
    this.store.dispatch(setSelectedUser({ selectedUser: null }));
    super.ngOnDestroy();
  }
}
