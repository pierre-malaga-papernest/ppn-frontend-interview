import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingsService } from "@services/settings.service";
import { SettingsActions, SettingsApiActions } from "@store/settings/settings.actions";
import { map, catchError, of, switchMap } from "rxjs";

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions, private settingsService: SettingsService) { }

  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.loadSettings),
      switchMap(() =>
        this.settingsService.getCombinedSettings().pipe(
          map((settings) => SettingsApiActions.loadSettingsSuccess({ settings })),
          catchError((error) => of(SettingsApiActions.loadSettingsFailure({ error: error.message })))
        )
      )
    )
  );
}
