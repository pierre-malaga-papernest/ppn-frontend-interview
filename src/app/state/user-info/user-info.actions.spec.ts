import { UserInfo } from '@model/user-info';
import {
  LOAD_USER_INFO,
  LOAD_USER_INFO_FAILURE,
  LOAD_USER_INFO_SUCCESS,
  loadUserInfo,
  loadUserInfoFailure,
  loadUserInfoSuccess,
} from './user-info.actions';

describe('UserInfo Actions', () => {
  it('should create loadUserInfo action', () => {
    const action = loadUserInfo();

    expect({ ...action }).toEqual({ type: LOAD_USER_INFO });
  });

  it('should create loadUserInfoSuccess action with userInfo', () => {
    const userInfo: UserInfo = {} as UserInfo;
    const action = loadUserInfoSuccess({ userInfo });

    expect({ ...action }).toEqual({ type: LOAD_USER_INFO_SUCCESS, userInfo });
  });

  it('should create loadUserInfoFailure action with error', () => {
    const error = 'Failed to load userInfo';
    const action = loadUserInfoFailure({ error });

    expect({ ...action }).toEqual({ type: LOAD_USER_INFO_FAILURE, error });
  });
});
