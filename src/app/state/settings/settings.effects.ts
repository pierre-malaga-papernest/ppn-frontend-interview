import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Settings } from 'src/app/interfaces/settings';
import {
  loadUserSettings,
  loadUserSettingsSuccess,
  loadUserSettingsFailure,
  loadLanguage,
  loadLanguageFailure,
  loadLanguageSuccess,
} from './settings.actions';
import { SettingsService } from 'src/app/services/settings.service';

@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly settingsService: SettingsService
  ) {}

  loadUserSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserSettings),
      switchMap(() =>
        from(this.settingsService.getUserSettings()).pipe(
          map((settings: Settings) => loadUserSettingsSuccess({ settings })),
          catchError((error: string) => of(loadUserSettingsFailure({ error })))
        )
      )
    )
  );

  loadLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLanguage),
      switchMap(() =>
        from(this.settingsService.getLanguage()).pipe(
          map((language: string) => loadLanguageSuccess({ language })),
          catchError((error: string) => of(loadLanguageFailure({ error })))
        )
      )
    )
  );
}
