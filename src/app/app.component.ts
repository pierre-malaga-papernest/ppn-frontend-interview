import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SettingsService } from './services/settings.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>Hello, {{ user.name }}!</h1>
      <button (click)="loadUser()">Load User</button>
      <button (click)="loadSettings()">Load Settings</button>
    </div>
  `,
})

// TODO: COMPONENTISE AND EXTRACT TEMPLATE
export class AppComponent implements OnDestroy {
  user$: Observable<User>;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private settingsService: SettingsService
  ) {
    this.user$ = store.select((state) => state.user);
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
