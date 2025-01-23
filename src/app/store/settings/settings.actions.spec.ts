import { Settings } from "@interfaces/settings";
import { settingsMock } from "@mocks/settings";
import { LOAD_SETTINGS, LOAD_SETTINGS_FAILURE, LOAD_SETTINGS_SUCCESS, SettingsActions, SettingsApiActions } from "@store/settings/settings.actions";

describe('Settings Actions', () => {
  describe('SettingsActions', () => {
    it('should create the Load Settings action', () => {
      const action = SettingsActions.loadSettings();
      expect(action.type).toEqual(LOAD_SETTINGS);
    });
  });

  describe('SettingsApiActions', () => {
    it('should create the Load Settings Success action', () => {
      const mockSettings: Settings = settingsMock;
      const action = SettingsApiActions.loadSettingsSuccess({ settings: settingsMock });
      expect(action).toEqual({
        type: LOAD_SETTINGS_SUCCESS,
        settings: settingsMock,
      });
    });

    it('should create the Load Me Failure action', () => {
      const mockError = 'Failed to load me';
      const action = SettingsApiActions.loadSettingsFailure({ error: mockError });
      expect(action).toEqual({
        type: LOAD_SETTINGS_FAILURE,
        error: mockError,
      });
    });
  });
});
