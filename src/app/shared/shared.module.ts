import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";

import { DataTableComponent } from "./components/tables/data-table/data-table.component";
import { SpinnerComponent } from "./components/spinners/spinner/spinner.component";
import { PaginationComponent } from "./components/tables/pagination/pagination.component";
import { ButtonComponent } from "./components/buttons/button/button.component";
import { DynamicModalComponent } from "./components/modals/dynamic-modal/dynamic-modal.component";
import { TypeaheadComponent } from "./components/inputs/typeahead/typeahead.component";

import { FormatTableObjectCellPipe } from "./pipes/format-table-object-cell.pipe";

@NgModule({
  declarations: [
    DataTableComponent,
    SpinnerComponent,
    PaginationComponent,
    ButtonComponent,
    FormatTableObjectCellPipe,
    DynamicModalComponent,
    TypeaheadComponent,
  ],
  exports: [
    DataTableComponent,
    DynamicModalComponent,
    TypeaheadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeahead,
  ]
})
export class SharedModule {
}
