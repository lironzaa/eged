import { DataTableConfig } from "../../../shared/interfaces/data-table-interface";
import { ColumnTypeEnum } from "../../../shared/enums/column-type-enum";

export const usersTableConfig: DataTableConfig = {
  columns: [
    { title: "ID", dataProperty: "id" },
    { title: "Name", dataProperty: "name" },
    { title: "Username", dataProperty: "username" },
    { title: "Email", dataProperty: "email" },
    { title: "Address", dataProperty: "address", columnType: ColumnTypeEnum.object },
    { title: "Phone", dataProperty: "phone" },
    { title: "Website", dataProperty: "website" },
    { title: "Company", dataProperty: "company", columnType: ColumnTypeEnum.object },
  ],
}
