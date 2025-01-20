import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UsersState } from './users.reducers';

export const selectUsers = (state: AppState) => state.users;
export const selectAllUsers = createSelector(
  selectUsers,
  (usersState: UsersState) => usersState.users
);
