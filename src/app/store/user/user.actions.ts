import { User } from '@interfaces/user';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LOAD_ME = '[User] Load Me';
export const LOAD_USERS = '[User] Load Users';
export const LOAD_ME_SUCCESS = '[User API] Load Me Success';
export const LOAD_ME_FAILURE = '[User API] Load Me Failure';
export const LOAD_USERS_SUCCESS = '[User API] Load Users Success';
export const LOAD_USERS_FAILURE = '[User API] Load Users Failure';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Me': emptyProps,
    'Load Users': emptyProps
  }
});

export const UserApiActions = createActionGroup({
  source: 'User API',
  events: {
    'Load Me Success': props<{ me: User }>(),
    'Load Me Failure': props<{ error: string }>(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),
  }
});
