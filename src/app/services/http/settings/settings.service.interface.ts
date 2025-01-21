import { Observable } from 'rxjs';
import { Settings } from 'src/app/model/settings';

export interface UserSettingsService {
  getUserSettings(): Observable<Settings>;
  getLanguage(): Observable<string>;
}
