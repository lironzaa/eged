import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable } from "rxjs";

import {
  DataTableColumn,
  DataTableConfig,
  DataTableItem,
} from "../../../interfaces/data-table-interface";
import { PaginationDataService } from "../../../services/pagination-data.service";
import { PaginationData } from "../../../interfaces/pagination-data-interface";
import { User } from "../../../../features/users/interfaces/user-interface";
import { ColumnTypeEnum } from "../../../enums/column-type-enum";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrl: "./data-table.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
  @Input({ required: true }) dataTableConfig!: DataTableConfig;
  @Input({
    transform: (items: User[]): DataTableItem[] => items as unknown as DataTableItem[],
    required: true
  }) items: DataTableItem[] = [];
  @Input({ required: true }) isLoading = false;
  @Input() isPointer = false;
  @Output() tableRowClicked = new EventEmitter<DataTableItem>();

  paginationData$: Observable<PaginationData>;
  columnTypeEnum = ColumnTypeEnum;

  constructor(private paginationDataService: PaginationDataService) {
    this.paginationData$ = this.paginationDataService.getPaginationDataListener();
  }

  trackByItemId(index: number, item: DataTableItem): number {
    return item["id"] as number;
  }

  trackByItemDataProperty(index: number, item: DataTableColumn): string {
    return item.dataProperty;
  }

  onTableRowClick(item: DataTableItem): void {
    this.tableRowClicked.emit(item);
  }
}
