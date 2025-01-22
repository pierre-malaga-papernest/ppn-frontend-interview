import { InjectionToken } from '@angular/core';

export interface HttpServiceConfig {
  useUserServiceMock: boolean;
  useSettingsServiceMock: boolean;
}

export const HTTP_SERVICE_CONFIG = new InjectionToken<HttpServiceConfig>(
  'http-service.config',
  {
    providedIn: 'root',
    factory: () => ({
      useUserServiceMock: true,
      useSettingsServiceMock: true,
    }),
  }
);
