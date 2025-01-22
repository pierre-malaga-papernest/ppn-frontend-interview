import { InjectionToken } from '@angular/core';

export interface HttpServiceConfig {
  useUserServiceMock: boolean;
  useSettingsServiceMock: boolean;
}

export const HTTP_SERVICE_CONFIG = new InjectionToken<HttpServiceConfig>(
  'http-service.config',
  {
    providedIn: 'root',
    // Todo: Update factory once the APIs are available
    factory: () => ({
      useUserServiceMock: true,
      useSettingsServiceMock: true,
    }),
  }
);
