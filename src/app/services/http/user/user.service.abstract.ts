import { Observable } from 'rxjs';
import { User } from '@model/user';
import { UserInfo } from '@model/user-info';

export abstract class UserInfoService {
  abstract getUserInfo(): Observable<UserInfo>;
}

export abstract class UsersService {
  abstract getUsers(): Observable<User[]>;
}
