import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { HttpClientModule } from '@angular/common/http';
import { settingsMock } from '@mocks/settings';
import { Settings } from '@interfaces/settings';
import { SettingsEffects } from '@store/settings/settings.effects';
import { SettingsService } from '@services/settings.service';
import { SettingsActions, SettingsApiActions } from '@store/settings/settings.actions';

class MockSettingsService {
  getCombinedSettings() {
    return of(settingsMock);
  }
}

describe('Settings Effects', () => {
  let actions$: Observable<Settings>;
  let effects: SettingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        SettingsEffects,
        provideMockActions(() => actions$),
        { provide: SettingsService, useClass: MockSettingsService },
      ],
    });

    effects = TestBed.inject(SettingsEffects);
  });

  it('should return a LOAD_SETTINGS_SUCCESS action', () => {
    const action = SettingsActions.loadSettings();
    const completion = SettingsApiActions.loadSettingsSuccess({
      settings: settingsMock
    });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.loadSettings$).toBeObservable(expected);
  });
});
