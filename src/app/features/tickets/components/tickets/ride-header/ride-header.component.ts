import { ChangeDetectionStrategy, Component, HostListener } from "@angular/core";

@Component({
  selector: "app-ride-header",
  templateUrl: "./ride-header.component.html",
  styleUrl: "./ride-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RideHeaderComponent {
  isXs = (window.innerWidth <= 500);

  @HostListener("window:resize", [ "$event" ])
  onResize(): void {
    this.isXs = window.innerWidth <= 500;
  }
}
