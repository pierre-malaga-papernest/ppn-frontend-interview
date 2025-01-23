import { Observable } from 'rxjs';
import { Settings } from '@model/settings';

export abstract class UserSettingsService {
  abstract getUserSettings(): Observable<Settings>;
  abstract getLanguage(): Observable<string>;
}
