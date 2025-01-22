import * as fromReducers from './settings.reducers';
import { Settings } from 'src/app/model/settings';
import { StoreStatus } from 'src/app/model/enum/store-status.enum';
import {
  loadUserSettingsFailure,
  loadLanguage,
  loadLanguageSuccess,
  loadLanguageFailure,
  loadUserSettings,
  loadUserSettingsSuccess,
} from './settings.actions';
import { Action } from '@ngrx/store';
import { Constants } from 'src/app/shared/constants';

describe('Settings Reducer', () => {
  it('should return the initial state', () => {
    const { initialState } = fromReducers;
    const action: Action = { type: 'Unknown' };
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual(initialState);
  });

  it('should handle loadUserSettings action', () => {
    const { initialState } = fromReducers;
    const action: Action = loadUserSettings();
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadUserSettingsSuccess action', () => {
    const userSettings: Settings = { theme: Constants.DEFAULT_THEME };
    const { initialState } = fromReducers;
    const action: Action = loadUserSettingsSuccess({ userSettings });
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      userSettings,
      status: StoreStatus.success,
    });
  });

  it('should handle loadUserSettingsFailure action', () => {
    const error = 'Failed to load user settings';
    const { initialState } = fromReducers;
    const action: Action = loadUserSettingsFailure({ error });
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      error,
      status: StoreStatus.error,
    });
  });

  it('should handle loadLanguage action', () => {
    const { initialState } = fromReducers;
    const action: Action = loadLanguage();
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadLanguageSuccess action', () => {
    const language = Constants.DEFAULT_LANGUAGE;
    const { initialState } = fromReducers;
    const action: Action = loadLanguageSuccess({ language });
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      language,
      status: StoreStatus.success,
    });
  });

  it('should handle loadLanguageFailure action', () => {
    const error = 'Failed to load language';
    const { initialState } = fromReducers;
    const action: Action = loadLanguageFailure({ error });
    const state: fromReducers.SettingsState = fromReducers.settingsReducer(
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
