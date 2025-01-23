import { settingsMock } from "@mocks/settings";
import { SettingsActions } from "@store/settings/settings.actions";
import { initialSettingsState, settingsReducer } from "@store/settings/settings.reducer";

describe('Settings Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = settingsReducer(initialSettingsState, action);
    expect(state).toEqual(initialSettingsState);
  });

  it('should load settings', () => {
    const action = SettingsActions.loadSettings();
    const state = settingsReducer(settingsMock, action);
    expect(state.theme).toEqual('default');
    expect(state.language).toEqual('en');
  });
});
