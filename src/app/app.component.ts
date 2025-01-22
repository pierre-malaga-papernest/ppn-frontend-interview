import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUserInfo } from './state/user-info/user-info.actions';
import { AppState } from './state/app.state';
import {
  loadLanguage,
  loadUserSettings,
} from './state/settings/settings.actions';
import { Settings } from './model/settings';
import { UserInfo } from './model/user-info';
import {
  selectUserSettings,
  selectLanguage,
} from './state/settings/settings.selectors';
import { selectUserInfo } from './state/user-info/user-info.selectors';
import { User } from './model/user';
import { selectAllUsers } from './state/users/users.selectors';
import { loadUsers } from './state/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userInfo$: Observable<UserInfo | null>;
  userSettings$: Observable<Settings>;
  language$: Observable<string>;
  users$: Observable<User[]>;

  constructor(private readonly store: Store<AppState>) {
    this.userInfo$ = this.store.pipe(select(selectUserInfo));
    this.users$ = this.store.pipe(select(selectAllUsers));

    this.userSettings$ = this.store.pipe(select(selectUserSettings));
    this.language$ = this.store.pipe(select(selectLanguage));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.userSettings$.subscribe(settings => {
      console.log('User settings:', settings);
    });
    this.language$.subscribe(language => {
      console.log('Language:', language);
    });
  }

  loadUserInfo(): void {
    this.store.dispatch(loadUserInfo());
  }

  loadSettings(): void {
    this.store.dispatch(loadUserSettings());
    this.store.dispatch(loadLanguage());
  }
}
