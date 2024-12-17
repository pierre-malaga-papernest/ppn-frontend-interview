import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SettingsService } from './services/settings.service';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>Hello, {{ user.name }}!</h1>
      <button (click)="loadUser()">Load User</button>
      <button (click)="loadSettings()">Load Settings</button>
    </div>

    <ng-container *ngIf="usersList$ | async as usersList">
      <app-users-list [usersList]="usersList"></app-users-list>
    </ng-container>
  `,
})

export class AppComponent implements OnDestroy {
  user$: Observable<User>;
  usersList$: Observable<User[]>;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private settingsService: SettingsService,
    private userService: UserService,
  ) {
    this.user$ = store.select((state) => state.user);
    this.usersList$ = this.userService.getUsersList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUser(): void {
    this.store.dispatch(fromActions.LoadUser());
  }

  loadSettings(): void {
    this.settingsService.getSettings().pipe(takeUntil(this.destroy$)).subscribe();
  }
}
