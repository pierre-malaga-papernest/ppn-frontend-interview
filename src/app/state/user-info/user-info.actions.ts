import { createAction, props } from '@ngrx/store';
import { UserInfo } from 'src/app/interfaces/user-info';

export const loadUserInfo = createAction('[User] Load User Info');
export const loadUserInfoSuccess = createAction(
  '[User] Load User Info Success',
  props<{ user: UserInfo }>()
);
export const loadUserInfoFailure = createAction(
  '[User] Load User Info Failure',
  props<{ error: string }>()
);
