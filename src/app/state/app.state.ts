import { SettingsState } from './settings/settings.reducers';
import { UserInfoState } from './user-info/user-info.reducers';
import { UsersState } from './users/users.reducers';

export interface AppState {
  userInfo: UserInfoState;
  users: UsersState;
  settings: SettingsState;
}
