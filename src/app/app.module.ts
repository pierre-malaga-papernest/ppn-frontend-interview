import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { effects, reducers } from './state';
import { httpServiceProviders } from './services/http/http-service.provider';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserInfoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    HttpClientModule,
  ],
  providers: [...httpServiceProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
