import { Injectable } from '@angular/core';
import { Settings } from '@model/settings';
import { Constants } from '@shared/constants';
import { Observable, of } from 'rxjs';
import { UserSettingsService } from './settings.service.abstract';

@Injectable()
export class MockSettingsService implements UserSettingsService {
  getUserSettings(): Observable<Settings> {
    const settings: Settings = {
      theme: 'light',
    };
    return of(settings);
  }

  getLanguage(): Observable<string> {
    const languages = [Constants.DEFAULT_LANGUAGE, 'es', 'fr', 'it'];
    const randomLanguage =
      languages[Math.floor(Math.random() * languages.length)];
    return of(randomLanguage);
  }
}
