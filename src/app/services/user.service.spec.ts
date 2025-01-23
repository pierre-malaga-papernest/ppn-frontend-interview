import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from '@interfaces/user';
import { meMock } from '@mocks/me';
import { usersMock } from '@mocks/users';
import { UserService } from '@services/user.service';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: HttpClient, useValue: httpSpy },
      ],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users (getUsers)', () => {
    const mockUsers: User[] = usersMock;

    httpSpy.get.and.returnValue(of(mockUsers));

    const expected$ = cold('(a|)', { a: mockUsers });

    expect(service.getUsers()).toBeObservable(expected$);
    expect(httpSpy.get).toHaveBeenCalledWith('assets/data/users.json');
  });

  it('should fetch me (getMe)', () => {
    const mockMe: User = meMock;

    httpSpy.get.and.returnValue(of(mockMe));

    const expected$ = cold('(a|)', { a: mockMe });

    expect(service.getMe()).toBeObservable(expected$);
    expect(httpSpy.get).toHaveBeenCalledWith('assets/data/me.json');
  });
});
