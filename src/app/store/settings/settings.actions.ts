import { Settings } from "@interfaces/settings";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const LOAD_SETTINGS = '[Settings] Load Settings';
export const LOAD_SETTINGS_SUCCESS = '[Settings API] Load Settings Success';
export const LOAD_SETTINGS_FAILURE = '[Settings API] Load Settings Failure';

export const SettingsActions = createActionGroup({
  source: 'Settings',
  events: {
    'Load Settings': emptyProps,
  }
});

export const SettingsApiActions = createActionGroup({
  source: 'Settings API',
  events: {
    'Load Settings Success': props<{ settings: Settings }>(),
    'Load Settings Failure': props<{ error: string }>()
  }
});