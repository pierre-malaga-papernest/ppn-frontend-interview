import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "@interfaces/user";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="user">
      <h4>{{ user.name }}</h4>
      <p>{{ user.email }}</p>
      <p>{{ user.dob }}</p>
      <hr>
    </div>
    `
})
export class UserComponent {
  @Input() user!: User;
}