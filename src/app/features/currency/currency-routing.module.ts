import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CurrencyComponent } from "./components/currency/currency.component";

const routes: Routes = [
  {
    path: "",
    component: CurrencyComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class CurrencyRoutingModule {
}
