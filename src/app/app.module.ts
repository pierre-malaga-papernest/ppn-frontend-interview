import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '@app.component';
import { UserService } from '@services/user.service';
import { UserEffects } from '@store/user/user.effects';
import { meReducer, usersReducer } from '@store/user/user.reducer';
import { settingsReducer } from '@store/settings/settings.reducer';
import { SettingsEffects } from '@store/settings/settings.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      me: meReducer, 
      users: usersReducer,
      settings: settingsReducer
    }),
    EffectsModule.forRoot([UserEffects, SettingsEffects]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
