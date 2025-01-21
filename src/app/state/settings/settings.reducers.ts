import { createReducer, on } from '@ngrx/store';
import { Constants } from 'src/app/shared/constants';
import { Settings } from 'src/app/model/settings';
import {
  StoreStatus,
  StoreStatusType,
} from 'src/app/model/enum/store-status.enum';
import {
  loadUserSettings,
  loadUserSettingsSuccess,
  loadUserSettingsFailure,
  loadLanguage,
  loadLanguageSuccess,
  loadLanguageFailure,
} from './settings.actions';

export interface SettingsState {
  userSettings: Settings;
  language: string;
  error: string | null;
  status: StoreStatusType;
}

const defaultSettings: Settings = {
  theme: Constants.DEFAULT_THEME,
};

export const initialState: SettingsState = {
  userSettings: defaultSettings,
  language: Constants.DEFAULT_LANGUAGE,
  error: null,
  status: StoreStatus.idle,
};

export const settingsReducer = createReducer(
  initialState,

  // Settings
  on(loadUserSettings, (state: SettingsState) => ({
    ...state,
    status: StoreStatus.loading,
  })),
  on(loadUserSettingsSuccess, (state: SettingsState, { settings }) => ({
    ...state,
    settings,
    status: StoreStatus.success,
  })),
  on(loadUserSettingsFailure, (state: SettingsState, { error }) => ({
    ...state,
    error,
    status: StoreStatus.error,
  })),

  // Language
  on(loadLanguage, (state: SettingsState) => ({
    ...state,
    status: StoreStatus.loading,
  })),
  on(loadLanguageSuccess, (state: SettingsState, { language }) => ({
    ...state,
    language,
    status: StoreStatus.success,
  })),
  on(loadLanguageFailure, (state: SettingsState, { error }) => ({
    ...state,
    error,
    status: StoreStatus.error,
  }))
);
