import { AppState } from '../app.state';
import { SettingsState } from '../settings/settings.reducers';
import { selectUserInfoState, selectUserInfo } from './user-info.selectors';
import { UsersState } from '../users/users.reducers';
import { StoreStatus } from '@model/enum/store-status.enum';
import { mockUserInfo } from '@mocks/mock-user-info';

describe('UserInfo Selectors', () => {
  const initialState: AppState = {
    users: {} as UsersState,
    userInfo: {
      userInfo: mockUserInfo,
      status: StoreStatus.success,
      error: null,
    },
    settings: {} as SettingsState,
  };

  it('should select the userInfo state', () => {
    const result = selectUserInfoState(initialState);
    expect(result).toEqual(initialState.userInfo);
  });

  it('should select the userInfo', () => {
    const result = selectUserInfo.projector(initialState.userInfo);
    expect(result).toEqual(initialState.userInfo.userInfo);
  });
});
