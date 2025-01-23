import { AppState } from '../app.state';
import { SettingsState } from '../settings/settings.reducers';
import { selectUserInfoState, selectUserInfo } from './user-info.selectors';
import { UsersState } from '../users/users.reducers';
import { StoreStatus } from '@model/enum/store-status.enum';

describe('UserInfo Selectors', () => {
  const initialState: AppState = {
    users: {} as UsersState,
    userInfo: {
      userInfo: {
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
      },
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
