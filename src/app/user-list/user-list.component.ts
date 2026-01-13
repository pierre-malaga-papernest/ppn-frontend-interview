import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users;

  @Output() userSelected = new EventEmitter();

  onUserClick(user) {
    this.userSelected.emit(user.id);
  }

  getUserDisplayName(user) {
    return `${user.name} - ${user.email}`;
  }
}
