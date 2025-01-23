import { User } from "@interfaces/user";
import { UserActions, LOAD_USER, UserApiActions } from "@store/user/user.actions";

describe('User Actions', () => {
  describe('UserActions', () => {
    it('should create the Load User action', () => {
      const action = UserActions.loadMe();
      expect(action.type).toEqual(LOAD_USER);
    });
  });

  describe('UserApiActions', () => {
    it('should create the Load User Success action', () => {
      const mockUser: User = {
        id: 1,
        name: 'John',
        email: 'test',
        dob: 'test',
        address: {
          street_name: 'asd',
          complement: 'asd',
          number: 1,
          city: 'ads',
          zip_code: '2'
        }
      };
      const action = UserApiActions.loadMeSuccess({ me: mockUser });
      expect(action).toEqual({
        type: '[User API] Load Me Success',
        me: mockUser,
      });
    });

    it('should create the Load User Failure action', () => {
      const mockError = 'Failed to load user';
      const action = UserApiActions.loadMeFailure({ error: mockError });
      expect(action).toEqual({
        type: '[User API] Load Me Failure',
        error: mockError,
      });
    });
  });
});
