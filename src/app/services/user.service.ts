import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/data/users.json');
  }

  getMe(): Observable<User> {
    return this.http.get<User>('assets/data/me.json');
  }
}
