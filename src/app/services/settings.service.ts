import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  readonly USER_SETTINGS_API: string = 'settings_url';
  readonly USER_LANGUAGE_API: string = 'language_url';

  constructor(private readonly httpClient: HttpClient) {}

  getUserSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>(this.USER_SETTINGS_API);
  }

  getLanguage(): Observable<string> {
    return this.httpClient.get<string>(this.USER_LANGUAGE_API);
  }
}
