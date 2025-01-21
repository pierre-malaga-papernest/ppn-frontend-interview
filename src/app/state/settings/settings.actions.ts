import { createAction, props } from '@ngrx/store';
import { Settings } from 'src/app/model/settings';

export const loadUserSettings = createAction('[Settings] Load User Settings');
export const loadUserSettingsSuccess = createAction(
  '[Settings] Load User Settings Success',
  props<{ settings: Settings }>()
);
export const loadUserSettingsFailure = createAction(
  '[Settings] Load User Settings Failure',
  props<{ error: string }>()
);

export const loadLanguage = createAction('[Settings] Load Language');
export const loadLanguageSuccess = createAction(
  '[Settings] Load Language Success',
  props<{ language: string }>()
);
export const loadLanguageFailure = createAction(
  '[Settings] Load Language Failure',
  props<{ error: string }>()
);
