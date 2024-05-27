import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  {
    path: "users",
    loadChildren: () => import("./features/users/users.module").then(d => d.UsersModule),
  },
  {
    path: "currency",
    loadChildren: () => import("./features/currency/currency.module").then(c => c.CurrencyModule),
  },
  {
    path: "tickets",
    loadChildren: () => import("./features/tickets/tickets.module").then(t => t.TicketsModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
