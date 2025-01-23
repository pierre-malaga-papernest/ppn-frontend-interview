import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { UserService } from '@services/user.service';
import { UserActions, UserApiActions } from '@store/user/user.actions';
import { UserEffects } from '@store/user/user.effects';
import { meMock } from '@mocks/me';
import { HttpClientModule } from '@angular/common/http';
import { usersMock } from '@mocks/users';

class MockUserService {
  getUsers() {
    return of(usersMock);
  }

  getMe() {
    return of(meMock);
  }
}

describe('User Effects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useClass: MockUserService },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should return a LOAD_ME_SUCCESS action', () => {
    const action = UserActions.loadMe();
    const completion = UserApiActions.loadMeSuccess({
      me: meMock
    });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.loadMe$).toBeObservable(expected);
  });

  it('should return a LOAD_USERS_SUCCESS action', () => {
    const action = UserActions.loadUsers();
    const completion = UserApiActions.loadUsersSuccess({
      users: usersMock
    });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.loadUsers$).toBeObservable(expected);
  });
});
