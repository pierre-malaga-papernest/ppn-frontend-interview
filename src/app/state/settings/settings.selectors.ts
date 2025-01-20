import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SettingsState } from './settings.reducers';

export const selectSettings = (state: AppState) => state.settings;
export const selectUserSettings = createSelector(
  selectSettings,
  (settingsState: SettingsState) => settingsState.userSettings
);
export const selectLanguage = createSelector(
  selectSettings,
  (settingsState: SettingsState) => settingsState.language
);
