import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../../interfaces/user";
import { NgForOf } from "@angular/common";

@Component({
    standalone: true,
    imports: [NgForOf],
    selector: 'app-users-list',
    template: `
    <div class="users-list">
        <ul><li *ngFor="let user of usersList">{{user.name}} - {{user.email}}</li></ul>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
export class UsersListComponent {
    @Input() usersList: User[] = [];   
}