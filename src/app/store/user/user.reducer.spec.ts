import { UserActions } from "@store/user/user.actions";
import { meReducer } from "@store/user/user.reducer";


describe('User Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = meReducer(undefined, action);
    expect(state).toEqual({
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
    });
  });

  it('should load user', () => {
    const action = UserActions.loadMe();
    const state = meReducer({
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
    }, action);
    expect(state.name).toEqual('Alice');
  });
});
