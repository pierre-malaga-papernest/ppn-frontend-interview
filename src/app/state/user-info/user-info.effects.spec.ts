import { TestBed } from '@angular/core/testing';
import { UserInfo } from '@model/user-info';
import { provideMockActions } from '@ngrx/effects/testing';
import { UserInfoService } from '@services/http/user/user.service.abstract';
import { Observable, of, throwError } from 'rxjs';
import {
  loadUserInfo,
  loadUserInfoSuccess,
  loadUserInfoFailure,
} from './user-info.actions';
import { UserInfoEffects } from './user-info.effects';

describe('UserInfoEffects', () => {
  let actions$: Observable<any>;
  let effects: UserInfoEffects;
  let userInfoServiceSpy: jasmine.SpyObj<UserInfoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserInfoService', ['getUserInfo']);

    TestBed.configureTestingModule({
      providers: [
        UserInfoEffects,
        provideMockActions(() => actions$),
        { provide: UserInfoService, useValue: spy },
      ],
    });

    effects = TestBed.inject(UserInfoEffects);
    userInfoServiceSpy = TestBed.inject(
      UserInfoService
    ) as jasmine.SpyObj<UserInfoService>;
  });

  it('should return a loadUserInfoSuccess action with userInfo on success', (done: DoneFn) => {
    const userInfo: UserInfo = {
      id: 1,
      name: 'Nathan Drake',
      email: 'nathan@drake.co',
      dob: '1980-07-19',
      address: {
        streetName: '1234 Uncharted St',
        complement: 'Apt 101',
        number: 1234,
        city: 'Los Angeles',
        zipCode: '90001',
      },
    };
    const action = loadUserInfo();
    const outcome = loadUserInfoSuccess({ userInfo });

    actions$ = of({ type: action.type });
    userInfoServiceSpy.getUserInfo.and.returnValue(of(userInfo));

    effects.loadUserInfo$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });

  it('should return a loadUserInfoFailure action with an error on failure', (done: DoneFn) => {
    const error = 'Error loading user info';
    const action = loadUserInfo();
    const outcome = loadUserInfoFailure({ error });

    actions$ = of({ type: action.type });
    userInfoServiceSpy.getUserInfo.and.returnValue(throwError(() => error));

    effects.loadUserInfo$.subscribe(result => {
      expect(result).toEqual(outcome);
      done();
    });
  });
});
