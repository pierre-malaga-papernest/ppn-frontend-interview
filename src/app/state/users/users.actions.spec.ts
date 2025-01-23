import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
} from './users.actions';
import { User } from '@model/user';

describe('Users Actions', () => {
  it('should create loadUsers action', () => {
    const action = loadUsers();

    expect({ ...action }).toEqual({ type: LOAD_USERS });
  });

  it('should create loadUsersSuccess action with users', () => {
    const users: User[] = [{ name: 'John Doe', email: 'john@doe.co' }];
    const action = loadUsersSuccess({ users });

    expect({ ...action }).toEqual({ type: LOAD_USERS_SUCCESS, users });
  });

  it('should create loadUsersFailure action with error', () => {
    const error = 'Failed to load users';
    const action = loadUsersFailure({ error });

    expect({ ...action }).toEqual({ type: LOAD_USERS_FAILURE, error });
  });
});
