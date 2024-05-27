import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./components/users/users.component";
import { SearchUserComponent } from "./components/search-user/search-user.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
  {
    path: "search-user",
    component: SearchUserComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule {
}
