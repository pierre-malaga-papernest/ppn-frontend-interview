import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, from, map, catchError, of } from 'rxjs';
import { Settings } from 'src/app/model/settings';
import {
  loadUserSettings,
  loadUserSettingsSuccess,
  loadUserSettingsFailure,
  loadLanguage,
  loadLanguageFailure,
  loadLanguageSuccess,
} from './settings.actions';
import { UserSettingsService } from 'src/app/services/http/settings/settings.service.abstract';

@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userSettingsService: UserSettingsService
  ) {}

  loadUserSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserSettings),
      switchMap(() =>
        from(this.userSettingsService.getUserSettings()).pipe(
          map((userSettings: Settings) =>
            loadUserSettingsSuccess({ userSettings })
          ),
          catchError((error: string) => of(loadUserSettingsFailure({ error })))
        )
      )
    )
  );

  loadLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLanguage),
      switchMap(() =>
        from(this.userSettingsService.getLanguage()).pipe(
          map((language: string) => loadLanguageSuccess({ language })),
          catchError((error: string) => of(loadLanguageFailure({ error })))
        )
      )
    )
  );
}
