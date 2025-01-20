import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, from, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {
  loadUserInfo,
  loadUserInfoFailure,
  loadUserInfoSuccess,
} from './user-info.actions';
import { UserInfo } from 'src/app/interfaces/user-info';

@Injectable()
export class UserInfoEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserInfo),
      switchMap(() =>
        from(this.userService.getUserInfo()).pipe(
          map((user: UserInfo) => loadUserInfoSuccess({ user })),
          catchError((error: string) => of(loadUserInfoFailure({ error })))
        )
      )
    )
  );
}
