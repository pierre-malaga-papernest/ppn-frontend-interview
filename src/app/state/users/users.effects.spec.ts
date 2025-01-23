import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { UserEffects } from './users.effects';
import { UsersService } from 'src/app/services/http/user/user.service.abstract';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
import { User } from 'src/app/model/user';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UsersService', ['getUsers']);

    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UsersService, useValue: spy },
      ],
    });

    effects = TestBed.inject(UserEffects);
    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
  });

  it('should return a loadUsersSuccess action with users on success', (done: DoneFn) => {
    const users: User[] = [{ name: 'John Doe', email: 'e@e.e' }];
    const action = loadUsers();
    const outcome = loadUsersSuccess({ users });

    actions$ = of({ type: action.type });
    usersServiceSpy.getUsers.and.returnValue(of(users));

    effects.loadUsers$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });

  it('should return a loadUsersFailure action with an error on failure', (done: DoneFn) => {
    const error = 'Error loading users';
    const action = loadUsers();
    const outcome = loadUsersFailure({ error });

    actions$ = of({ type: action.type });
    usersServiceSpy.getUsers.and.returnValue(throwError(() => error));

    effects.loadUsers$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });
});
