import { SettingsEffects } from './settings/settings.effects';
import { settingsReducer } from './settings/settings.reducers';
import { UserInfoEffects } from './user-info/user-info.effects';
import { userInfoReducer } from './user-info/user-info.reducers';
import { UserEffects } from './users/users.effects';
import { usersReducer } from './users/users.reducers';

export const reducers = {
  userInfo: userInfoReducer,
  users: usersReducer,
  settings: settingsReducer,
};

export const effects = [UserEffects, UserInfoEffects, SettingsEffects];
