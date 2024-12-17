import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return an observable of type User', (done) => {
      userService.getUser().subscribe((user) => {
        expect(user).toEqual(jasmine.any(Object));
        done(); 
      });
    });
  });

  describe('getUsersList', () => {
    it('should return an observable of an empty array', (done) => {
      userService.getUsersList().subscribe((usersList) => {
        expect(usersList).toEqual([]);
        done();
      });
    });
  });
});
