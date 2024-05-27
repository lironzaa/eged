import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-summary-details",
  templateUrl: "./summary-details.component.html",
  styleUrl: "./summary-details.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryDetailsComponent {
  @Input({ required: true }) text: string = "";
  @Input({ required: true }) price: string = "";
  @Input({ required: true }) dynamicClasses: string = "";

}
