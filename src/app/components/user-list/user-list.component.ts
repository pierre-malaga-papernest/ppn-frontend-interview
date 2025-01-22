import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="user-list app-container">
      <h3>Users:</h3>
      <ul>
        <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users!: User[];
}
