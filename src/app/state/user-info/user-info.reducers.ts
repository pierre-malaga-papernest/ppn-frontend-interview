import { createReducer, on } from '@ngrx/store';
import { UserInfo } from 'src/app/model/user-info';
import {
  StoreStatus,
  StoreStatusType,
} from 'src/app/model/enum/store-status.enum';
import {
  loadUserInfo,
  loadUserInfoFailure,
  loadUserInfoSuccess,
} from './user-info.actions';

export interface UserInfoState {
  userInfo: UserInfo | null;
  error: string | null;
  status: StoreStatusType;
}

export const initialState: UserInfoState = {
  userInfo: null,
  error: null,
  status: StoreStatus.idle,
};

export const userInfoReducer = createReducer(
  initialState,
  on(loadUserInfo, (state: UserInfoState) => ({
    ...state,
    status: StoreStatus.loading,
  })),
  on(loadUserInfoSuccess, (state: UserInfoState, { userInfo }) => ({
    ...state,
    userInfo,
    status: StoreStatus.success,
  })),
  on(loadUserInfoFailure, (state: UserInfoState, { error }) => ({
    ...state,
    error,
    status: StoreStatus.error,
  }))
);
