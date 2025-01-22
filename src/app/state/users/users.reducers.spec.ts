import * as fromReducers from './users.reducers';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
import { StoreStatus } from 'src/app/model/enum/store-status.enum';
import { User } from 'src/app/model/user';
import { Action } from '@ngrx/store';

describe('Users Reducer', () => {
  it('should return the initial state', () => {
    const { initialState } = fromReducers;
    const action: Action = { type: 'Unknown' };
    const state: fromReducers.UsersState = fromReducers.usersReducer(
      initialState,
      action
    );
    expect(state).toEqual(initialState);
  });

  it('should handle loadUsers action', () => {
    const { initialState } = fromReducers;
    const action: Action = loadUsers();
    const state: fromReducers.UsersState = fromReducers.usersReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      status: StoreStatus.loading,
    });
  });

  it('should handle loadUsersSuccess action', () => {
    const users: User[] = [
      { name: 'Dana', email: 'c@c.c' },
      { name: 'Edison', email: 'd@d.d' },
    ];
    const { initialState } = fromReducers;
    const action: Action = loadUsersSuccess({ users });
    const state: fromReducers.UsersState = fromReducers.usersReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      users,
      status: StoreStatus.success,
    });
  });

  it('should handle loadUsersFailure action', () => {
    const error = 'Failed to load users';
    const { initialState } = fromReducers;
    const action: Action = loadUsersFailure({ error });
    const state: fromReducers.UsersState = fromReducers.usersReducer(
      initialState,
      action
    );
    expect(state).toEqual({
      ...initialState,
      error,
      status: StoreStatus.error,
    });
  });
});
