import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectMe, selectUsers, selectUsersPageViewModel } from './user.selectors';
import { meMock } from '@mocks/me';
import { usersMock } from '@mocks/users';

describe('User Selectors', () => {
  let store: MockStore;
  const initialState = {
    me: meMock,
    users: usersMock
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.inject(MockStore);
  });

  it('should select me user', () => {
    store.select(selectMe).subscribe((me) => {
      expect(me).toEqual(initialState.me);
    });
  });

  it('should select the list of users', () => {
    store.select(selectUsers).subscribe((users) => {
      expect(users).toEqual(initialState.users);
    });
  });

  it('should select the users page view model', () => {
    store.select(selectUsersPageViewModel).subscribe((viewModel) => {
      expect(viewModel).toEqual({
        me: initialState.me,
        users: initialState.users
      });
    });
  });
});