import { ColumnTypeEnum } from "../enums/column-type-enum";

export interface DataTableConfig {
  columns: DataTableColumn[];
}

export interface DataTableColumn {
  title: string;
  dataProperty: string;
  columnType?: ColumnTypeEnum.object;
}

export interface DataTableItem {
  [key: string]: string | number | ObjectCellColumn;
}

export interface ObjectCellColumn {
  [key: string]: string | ObjectCellColumn;
}
