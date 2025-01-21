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
  template: `
    <div *ngIf="userInfo$ | async as userInfo">
      <h1>Hello, {{ userInfo.name }}!</h1>
      <button (click)="loadUserInfo()">Load User</button>
      <button (click)="loadSettings()">Load Settings</button>
    </div>
  `,
  styles: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userInfo$: Observable<UserInfo>;
  userSettings$: Observable<Settings>;
  language$: Observable<string>;
  users$: Observable<User[]>;

  constructor(private readonly store: Store<AppState>) {
    this.userInfo$ = this.store.pipe(select(selectUserInfo));
    this.userSettings$ = this.store.pipe(select(selectUserSettings));
    this.language$ = this.store.pipe(select(selectLanguage));
    this.users$ = this.store.pipe(select(selectAllUsers));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  loadUserInfo(): void {
    this.store.dispatch(loadUserInfo());
  }

  loadSettings(): void {
    this.store.dispatch(loadUserSettings());
    this.store.dispatch(loadLanguage());
  }
}
