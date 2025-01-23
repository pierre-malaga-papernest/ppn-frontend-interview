import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from '@store/settings/settings.actions';
import { selectSettings } from '@store/settings/settings.selectors';
import { AppState } from '@store/state';
import { UserActions } from '@store/user/user.actions';
import { selectUsersPageViewModel } from '@store/user/user.selectors';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <ng-container *ngIf="vm$ | async as vm">
      <div>
        <h1>Hello, {{ vm.me.name }}!</h1>
        <button (click)="loadMe()">Load User</button>
        <button id="loadSettings" (click)="loadSettings()">Load Settings</button>
      </div>

      <div *ngFor="let user of vm.users">
        {{user.name}}{{ user.email }}
      </div>
    </ng-container>

    <ng-container *ngIf="settings$ | async as settings">
      <span>{{ settings.theme }}, {{ settings.language }}</span>
    </ng-container>
  `,
})
export class AppComponent implements OnInit {
  readonly vm$ = this.store.select(selectUsersPageViewModel);
  readonly settings$ = this.store.select(selectSettings);

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(UserActions.loadMe());
    this.store.dispatch(UserActions.loadUsers());
  }

  // Error: No return type
  loadMe() {
    this.store.dispatch(UserActions.loadMe());
  }

  // Error: No return type
  loadSettings() {
    this.store.dispatch(SettingsActions.loadSettings());
  }
}
