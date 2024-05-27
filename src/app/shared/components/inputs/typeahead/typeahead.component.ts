import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Observable, Subject, merge, OperatorFunction } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";
import { NgbTypeahead, NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrl: "./typeahead.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeaheadComponent {
  @Input({ required: true }) items: string[] = [];
  @Input({ required: true }) label: string = "";
  @Output() itemSelected = new EventEmitter<string>();
  @ViewChild("instance") instance!: NgbTypeahead;

  model: string | undefined;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  searchFn: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) => (term === "" ? this.items : this.items.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      ),
    );
  };

  onSelectOption($event: NgbTypeaheadSelectItemEvent): void {
    this.itemSelected.emit($event.item);
  }
}
