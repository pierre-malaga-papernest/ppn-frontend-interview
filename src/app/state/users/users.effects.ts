import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return this.userService.getUsers().pipe(
          map((users: User[]) => loadUsersSuccess({ users })),
          catchError((error: string) => of(loadUsersFailure({ error })))
        );
      })
    )
  );
}
