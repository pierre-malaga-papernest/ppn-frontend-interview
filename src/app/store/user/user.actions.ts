import { User } from '@interfaces/user';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LOAD_USER = '[User] Load Me';

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
