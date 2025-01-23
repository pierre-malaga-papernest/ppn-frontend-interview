import { selectUsers, selectAllUsers } from './users.selectors';
import { AppState } from '../app.state';
import { StoreStatus } from '@model/enum/store-status.enum';
import { UserInfoState } from '../user-info/user-info.reducers';
import { SettingsState } from '../settings/settings.reducers';

describe('Users Selectors', () => {
  const initialState: AppState = {
    userInfo: {} as UserInfoState,
    users: {
      users: [
        { name: 'Sam', email: 'a@a.a' },
        { name: 'Dave', email: 'b@b.b' },
      ],
      status: StoreStatus.success,
      error: null,
    },
    settings: {} as SettingsState,
  };

  it('should select the users state', () => {
    const result = selectUsers(initialState);
    expect(result).toEqual(initialState.users);
  });

  it('should select all users', () => {
    const result = selectAllUsers.projector(initialState.users);
    expect(result).toEqual(initialState.users.users);
  });
});
