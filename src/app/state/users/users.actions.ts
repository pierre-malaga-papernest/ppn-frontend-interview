import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';
export const LOAD_USERS_FAILURE = '[Users] Load Users Failure';

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  LOAD_USERS_FAILURE,
  props<{ error: string }>()
);
