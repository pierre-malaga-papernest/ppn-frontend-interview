import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { UserService } from '@services/user.service';
import { UserActions, UserApiActions } from '@store/user/user.actions';
import { UserEffects } from '@store/user/user.effects';

class MockUserService {
  getUsers() {
    return of({ name: 'Alice' });
  }
}

describe('User Effects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useClasss: MockUserService },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should return a LOAD_USER_SUCCESS action', () => {
    const action = UserActions.loadMe();
    const completion = UserApiActions.loadMeSuccess({
      me: {
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
      }
    });

    actions$ = hot('-a', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadMe$).toBeObservable(expected);
  });
});
