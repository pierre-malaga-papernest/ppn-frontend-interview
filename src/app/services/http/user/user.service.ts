import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../../../model/user-info';
import { User } from '../../../model/user';
import { UsersService, UserInfoService } from './user.service.abstract';

@Injectable()
export class UserService implements UsersService, UserInfoService {
  constructor() {}

  getUserInfo(): Observable<UserInfo> {
    return of({} as UserInfo);
  }

  getUsers(): Observable<User[]> {
    return of([]);
  }
}
