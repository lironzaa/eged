import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "./components/users/users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { SearchUserComponent } from "./components/search-user/search-user.component";
import { UserTodosComponent } from "./components/user-todos/user-todos.component";

@NgModule({
  declarations: [
    UsersComponent,
    SearchUserComponent,
    UserTodosComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
