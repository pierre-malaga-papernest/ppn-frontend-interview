import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Settings } from 'src/app/model/settings';
import { UserSettingsService } from './settings.service.abstract';
import { Constants } from 'src/app/shared/constants';

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
