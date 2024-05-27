import { Pipe, PipeTransform } from "@angular/core";
import { ObjectCellColumn } from "../interfaces/data-table-interface";

@Pipe({
  name: "formatTableObjectCell",
  pure: true
})
export class FormatTableObjectCellPipe implements PipeTransform {
  transform(value: string | number | ObjectCellColumn): string {
    return this.formatNestedObject(value as ObjectCellColumn);
  }

  private formatNestedObject(obj: ObjectCellColumn): string {
    return Object.entries(obj)
      .map(([ key, value ]) => {
        const formattedValue = typeof value !== "object" ? `${ key }: ${ value }` : this.formatNestedObject(value);
        return `<span><strong>${ key }</strong>: ${ formattedValue }</span><br/>`;
      })
      .join("");
  }
}
