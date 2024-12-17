import { createAction, props } from '@ngrx/store';

export const LOAD_USER = '[User] Load User';
export const LOAD_USER_SUCCESS = '[User] Load User Success';

export const LoadUser = createAction(LOAD_USER)
export const LoadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{name: string}>())
