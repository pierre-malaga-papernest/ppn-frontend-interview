import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './state/users/users.effects';
import { userInfoReducer } from './state/user-info/user-info.reducers';
import { UserInfoEffects } from './state/user-info/user-info.effects';
import { SettingsEffects } from './state/settings/settings.effects';
import { settingsReducer } from './state/settings/settings.reducers';
import { usersReducer } from './state/users/users.reducers';
import { UserListComponent } from './components/user-list/user-list.component';
import {
  UserInfoService,
  UsersService,
} from './services/http/user/user.service.abstract';
import { UserSettingsService } from './services/http/settings/settings.service.abstract';
import { SettingsService } from './services/http/settings/settings.service';
import { MockUserService } from './services/http/user/mock-user.service';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserInfoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      userInfo: userInfoReducer,
      users: usersReducer,
      settings: settingsReducer,
    }),
    EffectsModule.forRoot([UserEffects, SettingsEffects, UserInfoEffects]),
    HttpClientModule,
  ],
  providers: [
    { provide: UserInfoService, useClass: MockUserService },
    { provide: UsersService, useClass: MockUserService },
    { provide: UserSettingsService, useClass: SettingsService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
