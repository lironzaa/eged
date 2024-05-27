import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CurrencyComponent } from "./components/currency/currency.component";
import { CurrencyRoutingModule } from "./currency-routing.module";

@NgModule({
  declarations: [
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})

export class CurrencyModule {
}
