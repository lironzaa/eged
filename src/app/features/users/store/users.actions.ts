import { createAction, props } from "@ngrx/store";

import { User, UserTodo } from "../interfaces/user-interface";

export const getUsers = createAction(
  "[Users] Get Users]",
);

export const usersFetched = createAction(
  "[Users] Users Fetched]",
  props<{ users: User[], usersTodos: UserTodo[] }>()
);

export const setSelectedUser = createAction(
  "[Users] Set Selected User]",
  props<{ selectedUser: User | null }>()
);

export const usersError = createAction(
  "[Users] Users Error]",
  props<{ errorMessage: string }>()
);
