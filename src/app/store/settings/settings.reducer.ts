import { Settings } from "@interfaces/settings";
import { createReducer, on } from "@ngrx/store";
import { SettingsApiActions } from "@store/settings/settings.actions";

export const initialSettingsState: Settings = {
    theme: 'default',
    language: 'en'
};

export const settingsReducer = createReducer(
    initialSettingsState,
    on(SettingsApiActions.loadSettingsSuccess, (state, { settings }) => ({...state, ...settings}))
)