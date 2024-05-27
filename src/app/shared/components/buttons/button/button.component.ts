import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input({ required: true }) color!: "btn-primary" | "btn-success" | "btn-warning";
  @Input({ required: true }) text = "";
  @Input({ required: true }) type: "button" | "submit" = "button";
  @Input() isDisabled = false;
  @Output() buttonClicked = new EventEmitter<Event>();

  onButtonClick(event: Event): void {
    this.buttonClicked.emit(event);
  }
}
