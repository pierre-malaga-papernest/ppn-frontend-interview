import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserInfo } from 'src/app/model/user-info';

export abstract class UserInfoService {
  abstract getUserInfo(): Observable<UserInfo>;
}

export abstract class UsersService {
  abstract getUsers(): Observable<User[]>;
}
