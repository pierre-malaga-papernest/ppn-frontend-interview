import { LOAD_USER, LoadUser } from "./actions";

describe('User Actions', () => {
  it('should create an action to load user', () => {
    const action = LoadUser();
    expect(action.type).toEqual(LOAD_USER);
  });
});
