import { TestBed } from '@angular/core/testing';
import { Settings } from '@model/settings';
import { provideMockActions } from '@ngrx/effects/testing';
import { UserSettingsService } from '@services/http/settings/settings.service.abstract';
import { Constants } from '@shared/constants';
import { Observable, of, throwError } from 'rxjs';
import {
  loadUserSettings,
  loadUserSettingsSuccess,
  loadUserSettingsFailure,
  loadLanguage,
  loadLanguageSuccess,
  loadLanguageFailure,
} from './settings.actions';
import { SettingsEffects } from './settings.effects';

describe('SettingsEffects', () => {
  let actions$: Observable<any>;
  let effects: SettingsEffects;
  let userSettingsServiceSpy: jasmine.SpyObj<UserSettingsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserSettingsService', [
      'getUserSettings',
      'getLanguage',
    ]);

    TestBed.configureTestingModule({
      providers: [
        SettingsEffects,
        provideMockActions(() => actions$),
        { provide: UserSettingsService, useValue: spy },
      ],
    });

    effects = TestBed.inject(SettingsEffects);
    userSettingsServiceSpy = TestBed.inject(
      UserSettingsService
    ) as jasmine.SpyObj<UserSettingsService>;
  });

  it('should return a loadUserSettingsSuccess action with userSettings on success', (done: DoneFn) => {
    const userSettings: Settings = { theme: Constants.DEFAULT_THEME };
    const action = loadUserSettings();
    const outcome = loadUserSettingsSuccess({ userSettings });

    actions$ = of({ type: action.type });
    userSettingsServiceSpy.getUserSettings.and.returnValue(of(userSettings));

    effects.loadUserSettings$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });

  it('should return a loadUserSettingsFailure action with an error on failure', (done: DoneFn) => {
    const error = 'Error loading user settings';
    const action = loadUserSettings();
    const outcome = loadUserSettingsFailure({ error });

    actions$ = of({ type: action.type });
    userSettingsServiceSpy.getUserSettings.and.returnValue(
      throwError(() => error)
    );

    effects.loadUserSettings$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });

  it('should return a loadLanguageSuccess action with language on success', (done: DoneFn) => {
    const language = Constants.DEFAULT_LANGUAGE;
    const action = loadLanguage();
    const outcome = loadLanguageSuccess({ language });

    actions$ = of({ type: action.type });
    userSettingsServiceSpy.getLanguage.and.returnValue(of(language));

    effects.loadLanguage$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });

  it('should return a loadLanguageFailure action with an error on failure', (done: DoneFn) => {
    const error = 'Error loading language';
    const action = loadLanguage();
    const outcome = loadLanguageFailure({ error });

    actions$ = of({ type: action.type });
    userSettingsServiceSpy.getLanguage.and.returnValue(throwError(() => error));

    effects.loadLanguage$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });
});
