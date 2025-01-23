import * as fromReducers from './user-info.reducers';
import {
  loadUserInfo,
  loadUserInfoSuccess,
  loadUserInfoFailure,
} from './user-info.actions';
import { StoreStatus } from '@model/enum/store-status.enum';
import { UserInfo } from '@model/user-info';
import { Action } from '@ngrx/store';
import { mockUserInfo } from '@mocks/mock-user-info';

describe('UserInfo Reducer', () => {
  it('should return the initial state', () => {
    const { initialState } = fromReducers;
    const action: Action = { type: 'Unknown' };
    const state: fromReducers.UserInfoState = fromReducers.userInfoReducer(
      initialState,
      action
    );
    expect(state).toEqual(initialState);
  });

  it('should handle loadUserInfo action', () => {
    const { initialState } = fromReducers;
    const action: Action = loadUserInfo();
    const state: fromReducers.UserInfoState = fromReducers.userInfoReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadUserInfoSuccess action', () => {
    const userInfo: UserInfo = mockUserInfo;
    const { initialState } = fromReducers;
    const action: Action = loadUserInfoSuccess({ userInfo });
    const state: fromReducers.UserInfoState = fromReducers.userInfoReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      userInfo,
      status: StoreStatus.success,
    });
  });

  it('should handle loadUserInfoFailure action', () => {
    const error = 'Failed to load user info';
    const { initialState } = fromReducers;
    const action: Action = loadUserInfoFailure({ error });
    const state: fromReducers.UserInfoState = fromReducers.userInfoReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      error,
      status: StoreStatus.error,
    });
  });
});
