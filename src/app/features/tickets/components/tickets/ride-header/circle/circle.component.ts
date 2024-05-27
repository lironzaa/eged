import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-circle",
  templateUrl: "./circle.component.html",
  styleUrl: "./circle.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {
  @Input({ required: true }) text: string = "";
  @Input({ required: true }) color: string = "";
  @Input() dynamicClass: string = "";
}
