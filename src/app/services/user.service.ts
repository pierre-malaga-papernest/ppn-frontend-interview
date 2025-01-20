import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../interfaces/user-info';
import { User } from '../interfaces/user';

@Injectable()
export class UserService {
  constructor() {}

  getUserInfo(): Observable<UserInfo> {
    return of({} as UserInfo);
  }

  getUsers(): Observable<User[]> {
    return of([]);
  }
}
