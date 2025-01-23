import { meMock } from "@mocks/me";
import { usersMock } from "@mocks/users";
import { UserActions } from "@store/user/user.actions";
import { meReducer, usersReducer } from "@store/user/user.reducer";

describe('Me Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = meReducer(undefined, action);
    expect(state).toEqual({});
  });

  it('should load me', () => {
    const action = UserActions.loadMe();
    const state = meReducer(meMock, action);
    expect(state.name).toEqual('Brooke Smith');
  });
});

describe('Users Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = usersReducer(undefined, action);
    expect(state).toEqual([]);
  });

  it('should load users', () => {
    const action = UserActions.loadUsers();
    const state = usersReducer(usersMock, action);
    expect(state.length).toBe(2);
    expect(state[0].id).toEqual(987);
  });
});
