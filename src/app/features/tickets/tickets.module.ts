import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketsComponent } from "./components/tickets/tickets.component";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { RideDetailsComponent } from "./components/tickets/ride-details/ride-details.component";
import { RideSummaryComponent } from "./components/tickets/ride-summary/ride-summary.component";
import { RideHeaderComponent } from "./components/tickets/ride-header/ride-header.component";
import { CircleComponent } from "./components/tickets/ride-header/circle/circle.component";
import { SummaryDetailsComponent } from "./components/tickets/ride-summary/summary-details/summary-details.component";

@NgModule({
  declarations: [
    TicketsComponent,
    RideDetailsComponent,
    RideSummaryComponent,
    RideHeaderComponent,
    CircleComponent,
    SummaryDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})

export class TicketsModule {
}
