import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<any>;
  _userList: Array<User>;

  constructor(
    private store: Store<AppState>,
    private settings_service: SettingsService
  ) {}

  ngOnInit() {
    this.user$ = this.store.select((state) => state.user);
    this.user$.subscribe((users) => this._userList = users);
  }

  loadUser() {
    this.store.dispatch(new fromActions.LoadUser());
  }

  loadSettings() {
    this.settings_service.getSettings();
  }

  onUserSelected(userId) {
    console.log('User selected:', userId);
  }
}
