import { Constants } from '@shared/constants';
import { AppState } from '../app.state';
import {
  selectSettings,
  selectUserSettings,
  selectLanguage,
} from './settings.selectors';
import { StoreStatus } from '@model/enum/store-status.enum';
import { UserInfoState } from '../user-info/user-info.reducers';
import { UsersState } from '../users/users.reducers';

describe('Settings Selectors', () => {
  const initialState: AppState = {
    users: {} as UsersState,
    userInfo: {} as UserInfoState,
    settings: {
      userSettings: { theme: Constants.DEFAULT_THEME },
      language: Constants.DEFAULT_LANGUAGE,
      status: StoreStatus.success,
      error: null,
    },
  };

  it('should select the settings state', () => {
    const result = selectSettings(initialState);
    expect(result).toEqual(initialState.settings);
  });

  it('should select the user settings', () => {
    const result = selectUserSettings.projector(initialState.settings);
    expect(result).toEqual(initialState.settings.userSettings);
  });

  it('should select the language', () => {
    const result = selectLanguage.projector(initialState.settings);
    expect(result).toEqual(initialState.settings.language);
  });
});
