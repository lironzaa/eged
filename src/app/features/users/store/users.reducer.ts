import { createFeature, createReducer, createSelector, on } from "@ngrx/store";

import { getUsers, setSelectedUser, usersError, usersFetched } from "./users.actions";
import { SelectedUser, User, UserTodo } from "../interfaces/user-interface";

export interface UsersState {
  users: User[];
  usersTodos: UserTodo[];
  selectedUser: SelectedUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  usersTodos: [],
  selectedUser: null,
  isLoading: false,
  error: null,
};

export const usersFeature = createFeature({
  name: "users",
  reducer: createReducer(
    initialState,
    on(getUsers, (state): UsersState => ({
      ...state,
      users: [],
      error: null,
      isLoading: true
    })),
    on(usersFetched, (state, { users, usersTodos }): UsersState => ({
      ...state,
      users: users,
      usersTodos: usersTodos,
      error: null,
      isLoading: false
    })),
    on(setSelectedUser, (state, { selectedUser }): UsersState => {
      let updatedUser: SelectedUser | null = null
      if (selectedUser) {
        const selectedUserTodos = state.usersTodos.filter(userTodo => userTodo.userId === selectedUser.id);
        updatedUser = { ...selectedUser, usersTodos: [ ...selectedUserTodos ] };
      }
      return ({
        ...state,
        selectedUser: updatedUser,
        error: null,
        isLoading: false
      })
    }),
    on(usersError, (state, { errorMessage }): UsersState => ({
      ...state,
      error: errorMessage,
      isLoading: false
    })),
  ),
  extraSelectors: ({
                     selectUsers
                   }) => ({
    selectUsersIdsAsStrings: createSelector(
      selectUsers,
      users => users.map(user => user.id.toString())
    )
  })
})
