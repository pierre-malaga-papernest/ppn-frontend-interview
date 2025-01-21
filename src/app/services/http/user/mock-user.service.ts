import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserInfo } from 'src/app/model/user-info';
import { UsersService, UserInfoService } from './user.service.abstract';

@Injectable()
export class MockUserService implements UsersService, UserInfoService {
  constructor() {}

  getUserInfo(): Observable<UserInfo> {
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
