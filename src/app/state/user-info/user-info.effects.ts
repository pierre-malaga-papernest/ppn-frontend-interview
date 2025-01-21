import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, from, map } from 'rxjs';
import {
  loadUserInfo,
  loadUserInfoFailure,
  loadUserInfoSuccess,
} from './user-info.actions';
import { UserInfo } from 'src/app/model/user-info';
import { UserInfoService } from 'src/app/services/http/user/user.service.abstract';

@Injectable()
export class UserInfoEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userInfoService: UserInfoService
  ) {}

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserInfo),
      switchMap(() =>
        from(this.userInfoService.getUserInfo()).pipe(
          map((userInfo: UserInfo) => loadUserInfoSuccess({ userInfo })),
          catchError((error: string) => of(loadUserInfoFailure({ error })))
        )
      )
    )
  );
}
