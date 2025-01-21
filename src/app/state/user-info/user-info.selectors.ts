import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserInfoState } from './user-info.reducers';

export const selectUserInfoState = (state: AppState) => state.userInfo;
export const selectUserInfo = createSelector(
  selectUserInfoState,
  (userInfoState: UserInfoState) => userInfoState.userInfo
);
