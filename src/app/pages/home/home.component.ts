import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import { SettingsActions } from '@store/settings/settings.actions';
import { selectSettings } from '@store/settings/settings.selectors';
import { AppState } from '@store/state';
import { UserActions } from '@store/user/user.actions';
import { selectUsersPageViewModel } from '@store/user/user.selectors';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Settings -->
    <div>
      <button id="loadSettings" (click)="loadSettings()">Load Settings</button>
      <ng-container *ngIf="settings$ | async as settings">
        <span>{{ settings.theme }}, {{ settings.language }}</span>
      </ng-container>
    </div>

    <ng-container *ngIf="vm$ | async as vm">
      <!-- Header -->
      <div>
        <h1>Welcome, {{ vm.me.name }}!</h1>
      </div>

      <!-- Users -->
      <h2>Users</h2>
      <div *ngFor="let user of vm.users; trackBy: trackById">
        <app-user [user]="user"></app-user>
      </div>
    </ng-container>
  `
})
export class HomeComponent {
  readonly vm$ = this.store.select(selectUsersPageViewModel);
  readonly settings$ = this.store.select(selectSettings);

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(UserActions.loadMe());
    this.store.dispatch(UserActions.loadUsers());
  }

  loadSettings(): void {
    this.store.dispatch(SettingsActions.loadSettings());
  }

  trackById(_index: number, item: User): number {
    return item.id;
  }
}
