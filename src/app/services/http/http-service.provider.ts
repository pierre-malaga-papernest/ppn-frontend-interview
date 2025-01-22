import {
  HTTP_SERVICE_CONFIG,
  HttpServiceConfig,
} from 'src/app/config/http-service.config';
import { MockUserService } from './user/mock-user.service';
import { UserService } from './user/user.service';
import { UserInfoService, UsersService } from './user/user.service.abstract';
import { HttpClient } from '@angular/common/http';
import { MockSettingsService } from './settings/mock-settings.service';
import { SettingsService } from './settings/settings.service';
import { UserSettingsService } from './settings/settings.service.abstract';

const userServiceFactory = (
  config: HttpServiceConfig
): UserInfoService | UsersService => {
  return config.useUserServiceMock ? new MockUserService() : new UserService();
};

const settingsServiceFactory = (
  config: HttpServiceConfig,
  http: HttpClient
): UserSettingsService => {
  return config.useUserServiceMock
    ? new MockSettingsService()
    : new SettingsService(http);
};

export const httpServiceProviders = [
  {
    provide: UserInfoService,
    useFactory: userServiceFactory,
    deps: [HTTP_SERVICE_CONFIG],
  },
  {
    provide: UsersService,
    useFactory: userServiceFactory,
    deps: [HTTP_SERVICE_CONFIG],
  },
  {
    provide: UserSettingsService,
    useFactory: settingsServiceFactory,
    deps: [HTTP_SERVICE_CONFIG, HttpClient],
  },
];
