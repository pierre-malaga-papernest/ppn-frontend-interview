import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserInfo } from 'src/app/model/user-info';

export interface UserInfoService {
  getUserInfo(): Observable<UserInfo>;
}

export interface UsersService {
  getUsers(): Observable<User[]>;
}
