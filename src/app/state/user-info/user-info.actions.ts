import { createAction, props } from '@ngrx/store';
import { UserInfo } from 'src/app/model/user-info';

export const LOAD_USER_INFO = '[User] Load User Info';
export const LOAD_USER_INFO_SUCCESS = '[User] Load User Info Success';
export const LOAD_USER_INFO_FAILURE = '[User] Load User Info Failure';

export const loadUserInfo = createAction(LOAD_USER_INFO);
export const loadUserInfoSuccess = createAction(
  LOAD_USER_INFO_SUCCESS,
  props<{ userInfo: UserInfo }>()
);
export const loadUserInfoFailure = createAction(
  LOAD_USER_INFO_FAILURE,
  props<{ error: string }>()
);
