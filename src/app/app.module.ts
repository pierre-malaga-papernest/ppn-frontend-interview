import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { UserEffects } from './store/effects';
import { userReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    UsersListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
