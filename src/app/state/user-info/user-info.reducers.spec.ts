import * as fromReducers from './user-info.reducers';
import {
  loadUserInfo,
  loadUserInfoSuccess,
  loadUserInfoFailure,
} from './user-info.actions';
import { StoreStatus } from 'src/app/model/enum/store-status.enum';
import { UserInfo } from 'src/app/model/user-info';
import { Action } from '@ngrx/store';

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
    const userInfo: UserInfo = {
      id: 1,
      name: 'Nathan Drake',
      email: 'nathan@drake.co',
      dob: '1980-07-19',
      address: {
        streetName: '1234 Uncharted St',
        complement: 'Apt 101',
        number: 1234,
        city: 'Los Angeles',
        zipCode: '90001',
      },
    };
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
