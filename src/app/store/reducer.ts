import { createReducer, on } from '@ngrx/store';
import * as UserActions from './actions';

const initialState = {
  name: 'John',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.LoadUser,  (state)=> ({...state, name: 'Jane' }) ),
  on(UserActions.LoadUserSuccess,  (state, {name})=> ({...state, name }) )
);
