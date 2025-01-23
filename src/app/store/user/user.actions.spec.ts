import { User } from "@interfaces/user";
import { meMock } from "@mocks/me";
import { usersMock } from "@mocks/users";
import { UserActions, LOAD_ME, UserApiActions, LOAD_USERS, LOAD_ME_SUCCESS, LOAD_ME_FAILURE, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from "@store/user/user.actions";

describe('User Actions', () => {
  describe('UserActions', () => {
    it('should create the Load Me action', () => {
      const action = UserActions.loadMe();
      expect(action.type).toEqual(LOAD_ME);
    });

    it('should create the Load Users action', () => {
      const action = UserActions.loadUsers();
      expect(action.type).toEqual(LOAD_USERS);
    });
  });

  describe('UserApiActions', () => {
    it('should create the Load Me Success action', () => {
      const mockUser: User = meMock;
      const action = UserApiActions.loadMeSuccess({ me: mockUser });
      expect(action).toEqual({
        type: LOAD_ME_SUCCESS,
        me: mockUser,
      });
    });

    it('should create the Load Me Failure action', () => {
      const mockError = 'Failed to load me';
      const action = UserApiActions.loadMeFailure({ error: mockError });
      expect(action).toEqual({
        type: LOAD_ME_FAILURE,
        error: mockError,
      });
    });

    it('should create the Load Users Success action', () => {
      const action = UserApiActions.loadUsersSuccess({ users: usersMock });
      expect(action).toEqual({
        type: LOAD_USERS_SUCCESS,
        users: usersMock,
      });
    });

    it('should create the Load ME Failure action', () => {
      const mockError = 'Failed to load users';
      const action = UserApiActions.loadUsersFailure({ error: mockError });
      expect(action).toEqual({
        type: LOAD_USERS_FAILURE,
        error: mockError,
      });
    });
  });
});
