import { ActionReducerMap } from "@ngrx/store";

import { usersFeature, UsersState } from "../../features/users/store/users.reducer";

export interface AppState {
  users: UsersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  users: usersFeature.reducer,
};
