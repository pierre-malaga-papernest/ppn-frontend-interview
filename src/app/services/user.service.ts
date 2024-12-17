import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  constructor() { }

  getUser(): Observable<User> {
    return of();
  }
}
