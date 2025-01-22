import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserInfo } from 'src/app/model/user-info';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should return an Observable of an object when getUserInfo is called', () => {
    service.getUserInfo().subscribe(users => {
      expect(users).toEqual({} as UserInfo);
    });
  });

  it('should return an Observable of an empty array when getUsers is called', () => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual([]);
    });
  });
});
