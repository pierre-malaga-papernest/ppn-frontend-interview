import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface HttpServiceConfig {
  userServiceMockEnabled: boolean;
  userSettingsMockEnabled: boolean;
}

export const HTTP_SERVICE_CONFIG = new InjectionToken<HttpServiceConfig>(
  'http-service.config',
  {
    providedIn: 'root',
    factory: () => ({
      userServiceMockEnabled: environment.userServiceMockEnabled,
      userSettingsMockEnabled: environment.userSettingsMockEnabled,
    }),
  }
);
