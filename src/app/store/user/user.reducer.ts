import { createReducer, on } from '@ngrx/store';
import { User } from '@interfaces/user';
import { UserApiActions } from '@store/user/user.actions';

export const initialMeState: Partial<User> = {};
export const initialUsersState: User[] = [];

export const meReducer = createReducer(
  initialMeState,
  on(UserApiActions.loadMeSuccess, (state, { me }) => ({...state, ...me}))
);

export const usersReducer = createReducer(
  initialUsersState,
  on(UserApiActions.loadUsersSuccess, (_state, { users }) => ([...users]))
);
