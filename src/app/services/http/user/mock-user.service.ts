import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@model/user';
import { UserInfo } from '@model/user-info';
import { UsersService, UserInfoService } from './user.service.abstract';
import { mockUserInfo } from '@mocks/mock-user-info';

@Injectable()
export class MockUserService implements UsersService, UserInfoService {
  constructor() {}

  getUserInfo(): Observable<UserInfo> {
    const userInfo: UserInfo = mockUserInfo;
    return of(userInfo);
  }

  getUsers(): Observable<User[]> {
    const users: User[] = [
      { name: 'David Lockridge', email: 'david@lockridge.co' },
      { name: 'William Summers', email: 'william@summers.co' },
      { name: 'Dalton Smith', email: 'dalton@smith.co' },
    ];
    return of(users);
  }
}
