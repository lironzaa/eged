import { FormatTableObjectCellPipe } from "./format-table-object-cell.pipe";

describe("FormatTableColumnNestedObjectPipe", () => {
  it("create an instance", () => {
    const pipe = new FormatTableObjectCellPipe();
    expect(pipe).toBeTruthy();
  });
});
