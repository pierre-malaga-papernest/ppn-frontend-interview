import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER),
      switchMap(() => this.userService.getUser().pipe(
        map(({name}) => ({type: fromActions.LOAD_USER_SUCCESS, props: {name}}) )
      )),
      catchError(() => of({ type: fromActions.LOAD_USER_FAIL }))
    )
  );
}
