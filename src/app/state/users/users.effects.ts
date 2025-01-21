import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
import { UsersService } from 'src/app/services/http/user/user.service.abstract';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return this.usersService.getUsers().pipe(
          map((users: User[]) => loadUsersSuccess({ users })),
          catchError((error: string) => of(loadUsersFailure({ error })))
        );
      })
    )
  );
}
