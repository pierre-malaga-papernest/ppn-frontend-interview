import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsDTO } from '../interfaces/domain/settings.dto';
import { LanguageDTO } from '../interfaces/domain/language.dto';
import { catchError, combineLatest, EMPTY, filter, map, Observable } from 'rxjs';
import { UserSettings } from '../interfaces/view/user-settings';
import { catchErrorWithMessage } from '../utils/catch-error-with-message';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly USER_SETTINGS_API: string = 'settings_url';
  readonly USER_LANGUAGE_API: string = 'language_url';
 
  userSettings: UserSettings = {
    theme: 'default',
    language: 'EN'
  };

  constructor(private httpClient: HttpClient) {}

  getSettings(): Observable<UserSettings>{
    return combineLatest([
      this.httpClient.get<SettingsDTO>(this.USER_SETTINGS_API).pipe(
        catchErrorWithMessage('Error ocurred when loading user settings')
      ),
      this.httpClient.get<LanguageDTO>(this.USER_LANGUAGE_API).pipe(
        catchErrorWithMessage('Error ocurred when loading user language')
      )
    ])
    .pipe(
      filter(obsList => obsList.every(obs => !!obs)),
      map(([{theme}, {lang_code: language}]) => ({language, theme}))
    );
  }
}
