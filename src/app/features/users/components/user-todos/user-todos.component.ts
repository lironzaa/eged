import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { UserTodo } from "../../interfaces/user-interface";

@Component({
  selector: "app-user-todos",
  templateUrl: "./user-todos.component.html",
  styleUrl: "./user-todos.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTodosComponent {
  @Input({ required: true }) userTodos: UserTodo[] = [];

  trackByTodoId(index: number, userTodo: UserTodo): number {
    return userTodo.id;
  }
}
