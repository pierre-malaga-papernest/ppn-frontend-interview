import { Settings } from "@interfaces/settings";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

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