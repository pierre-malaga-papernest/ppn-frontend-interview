import { createReducer, on } from '@ngrx/store';
import { UserInfo } from 'src/app/interfaces/user-info';
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
  user: UserInfo;
  error: string | null;
  status: StoreStatusType;
}

export const initialState: UserInfoState = {
  user: {} as UserInfo,
  error: null,
  status: 'idle',
};

export const userReducer = createReducer(
  initialState,
  on(loadUserInfo, (state: UserInfoState) => ({
    ...state,
    status: StoreStatus.loading,
  })),
  on(loadUserInfoSuccess, (state: UserInfoState, { user }) => ({
    ...state,
    user,
    status: StoreStatus.success,
  })),
  on(loadUserInfoFailure, (state: UserInfoState, { error }) => ({
    ...state,
    error,
    status: StoreStatus.error,
  }))
);
