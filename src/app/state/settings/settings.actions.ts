import { createAction, props } from '@ngrx/store';
import { Settings } from 'src/app/model/settings';

export const LOAD_USER_SETTINGS = '[Settings] Load User Settings';
export const LOAD_USER_SETTINGS_SUCCESS =
  '[Settings] Load User Settings Success';
export const LOAD_USER_SETTINGS_FAILURE =
  '[Settings] Load User Settings Failure';

export const LOAD_LANGUAGE = '[Settings] Load Language';
export const LOAD_LANGUAGE_SUCCESS = '[Settings] Load Language Success';
export const LOAD_LANGUAGE_FAILURE = '[Settings] Load Language Failure';

export const loadUserSettings = createAction(LOAD_USER_SETTINGS);
export const loadUserSettingsSuccess = createAction(
  LOAD_USER_SETTINGS_SUCCESS,
  props<{ settings: Settings }>()
);
export const loadUserSettingsFailure = createAction(
  LOAD_USER_SETTINGS_FAILURE,
  props<{ error: string }>()
);

export const loadLanguage = createAction(LOAD_LANGUAGE);
export const loadLanguageSuccess = createAction(
  LOAD_LANGUAGE_SUCCESS,
  props<{ language: string }>()
);
export const loadLanguageFailure = createAction(
  LOAD_LANGUAGE_FAILURE,
  props<{ error: string }>()
);
