import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@services/user.service';
import { UserActions, UserApiActions } from '@store/user/user.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadMe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadMe),
      mergeMap(() =>
        this.userService.getMe().pipe(
          map(me => UserApiActions.loadMeSuccess({ me })),
          catchError(error => of(UserApiActions.loadMeFailure({ error })))
        )
      )
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserApiActions.loadUsersSuccess({ users })),
          catchError(error => of(UserApiActions.loadUsersFailure({ error })))
        )
      )
    )
  );
}
