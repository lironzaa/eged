import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-ride-details",
  templateUrl: "./ride-details.component.html",
  styleUrl: "./ride-details.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RideDetailsComponent {
  @Input({ required: true }) rideType: string = "";
  @Input({ required: true }) rideDate: string = "";
  @Input({ required: true }) busNumber: number = 0;
  @Input({ required: true }) numberOfSeats: number = 0;
  @Input({ required: true }) location: string = "";
  @Input({ required: true }) destination: string = "";
  @Input({ required: true }) locationAddress: string = "";
  @Input({ required: true }) destinationAddress: string = "";
  @Input() dynamicClass: string = "";
  @Input() isDisplayHr: boolean = false;
}
