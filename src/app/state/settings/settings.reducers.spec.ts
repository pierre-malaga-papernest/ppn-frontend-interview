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
    const action = loadUserSettings();
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadUserSettingsSuccess action', () => {
    const settings: Settings = { theme: 'dark' };
    const { initialState } = fromReducers;
    const action = loadUserSettingsSuccess({ settings });
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      userSettings: settings,
      status: StoreStatus.success,
    });
  });

  it('should handle loadUserSettingsFailure action', () => {
    const error = 'Failed to load user settings';
    const { initialState } = fromReducers;
    const action = loadUserSettingsFailure({ error });
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      error,
      status: StoreStatus.error,
    });
  });

  it('should handle loadLanguage action', () => {
    const { initialState } = fromReducers;
    const action = loadLanguage();
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadLanguageSuccess action', () => {
    const language = 'en';
    const { initialState } = fromReducers;
    const action = loadLanguageSuccess({ language });
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      language,
      status: StoreStatus.success,
    });
  });

  it('should handle loadLanguageFailure action', () => {
    const error = 'Failed to load language';
    const { initialState } = fromReducers;
    const action = loadLanguageFailure({ error });
    const state = fromReducers.settingsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      error,
      status: StoreStatus.error,
    });
  });
});
