import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  public readonly USER_API: string = 'assets/data/users.json';
  public readonly ME_API: string = 'assets/data/me.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API);
  }

  getMe(): Observable<User> {
    return this.http.get<User>(this.ME_API);
  }
}
