import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

import { ModalContent } from "../../../interfaces/modal-content.interface";

@Component({
  selector: "app-dynamic-modal",
  templateUrl: "./dynamic-modal.component.html",
  styleUrl: "./dynamic-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicModalComponent {
  @Input() title: string = "";
  @ViewChild("modalContent") modalContent!: TemplateRef<ModalContent>;
  private modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  open(): void {
    this.modalRef = this.modalService.open(this.modalContent, { ariaLabelledBy: "modal-basic-title" });
  }

  dismiss(reason: string): void {
    if (this.modalRef) this.modalRef.dismiss(reason);
  }
}
