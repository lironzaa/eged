import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { getUsers } from "./features/users/store/users.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent implements OnInit {
  title = "eged";

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
