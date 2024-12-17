import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor() { }

  getUser(): Observable<User> {
    return of({} as User);
  }

  getUsersList(): Observable<User[]>{
    return of([]);
  }
}
