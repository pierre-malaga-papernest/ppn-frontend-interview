import { mockSettings } from '@mocks/mock-settings';
import {
  LOAD_LANGUAGE,
  LOAD_LANGUAGE_FAILURE,
  LOAD_LANGUAGE_SUCCESS,
  LOAD_USER_SETTINGS,
  LOAD_USER_SETTINGS_FAILURE,
  LOAD_USER_SETTINGS_SUCCESS,
  loadLanguage,
  loadLanguageFailure,
  loadLanguageSuccess,
  loadUserSettings,
  loadUserSettingsFailure,
  loadUserSettingsSuccess,
} from './settings.actions';
import { Settings } from '@model/settings';
import { Constants } from '@shared/constants';

describe('Settings Actions', () => {
  describe('UserSettings Actions', () => {
    it('should create loadUserSettings action', () => {
      const action = loadUserSettings();

      expect({ ...action }).toEqual({ type: LOAD_USER_SETTINGS });
    });

    it('should create loadUserSettingsSuccess action with settings', () => {
      const userSettings: Settings = mockSettings;
      const action = loadUserSettingsSuccess({ userSettings });

      expect({ ...action }).toEqual({
        type: LOAD_USER_SETTINGS_SUCCESS,
        userSettings,
      });
    });

    it('should create loadUserSettingsFailure action with error', () => {
      const error = 'Failed to load user settings';
      const action = loadUserSettingsFailure({ error });

      expect({ ...action }).toEqual({
        type: LOAD_USER_SETTINGS_FAILURE,
        error,
      });
    });
  });

  describe('Language Actions', () => {
    it('should create loadLanguage action', () => {
      const action = loadLanguage();

      expect({ ...action }).toEqual({ type: LOAD_LANGUAGE });
    });

    it('should create loadLanguageSuccess action with language', () => {
      const language = Constants.DEFAULT_LANGUAGE;
      const action = loadLanguageSuccess({ language });

      expect({ ...action }).toEqual({
        type: LOAD_LANGUAGE_SUCCESS,
        language,
      });
    });

    it('should create loadLanguageFailure action with error', () => {
      const error = 'Failed to load language';
      const action = loadLanguageFailure({ error });

      expect({ ...action }).toEqual({ type: LOAD_LANGUAGE_FAILURE, error });
    });
  });
});
