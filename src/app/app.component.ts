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
  readonly userInfo$: Observable<UserInfo | null>;
  readonly userSettings$: Observable<Settings>;
  readonly language$: Observable<string>;
  readonly users$: Observable<User[]>;

  constructor(private readonly store: Store<AppState>) {
    this.userInfo$ = this.store.pipe(select(selectUserInfo));
    this.users$ = this.store.pipe(select(selectAllUsers));

    this.userSettings$ = this.store.pipe(select(selectUserSettings));
    this.language$ = this.store.pipe(select(selectLanguage));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  loadUserInfo(): void {
    this.store.dispatch(loadUserInfo());
  }

  loadUserSettingsAndLanguage(): void {
    this.store.dispatch(loadUserSettings());
    this.store.dispatch(loadLanguage());
  }
}
