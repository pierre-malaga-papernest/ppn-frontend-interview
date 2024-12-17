import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor() { }

  getUser(): Observable<User> {
    return of();
  }

  getUsersList(): Observable<User[]>{
    return of ([]);
  }
}
