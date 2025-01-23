import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLanguage, ApiSettings, Settings } from '@interfaces/settings';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public readonly USER_SETTINGS_API: string = 'assets/data/settings.json';
  public readonly USER_LANGUAGE_API: string = 'assets/data/language.json';

  constructor(private http_client: HttpClient) {}

  private getSettings(): Observable<ApiSettings> {
    return this.http_client.get<ApiSettings>(this.USER_SETTINGS_API);
  }

  private getLanguage(): Observable<ApiLanguage>  {
    return this.http_client.get<ApiLanguage>(this.USER_LANGUAGE_API);
  }

  getCombinedSettings(): Observable<Settings> {
    return forkJoin({
      settings: this.getSettings(),
      language: this.getLanguage()
    }).pipe(
      map(({ settings, language }) => ({
        theme: settings.theme,
        language: language.lang_code,
      }))
    );
  }
}
