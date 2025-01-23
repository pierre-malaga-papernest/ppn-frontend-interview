import { Component, Input } from '@angular/core';
import { UserInfo } from '@model/user-info';

@Component({
  selector: 'app-user-info',
  template: `
    <div class="user-info">
      <span>Email: {{ userInfo.email }}</span>
      <span>Date of birth: {{ userInfo.dob }}</span>
      <b>Address:</b>
      <div class="address">
        <span>City: {{ userInfo.address.city }}</span>
        <span>Street: {{ userInfo.address.streetName }}</span>
        <span>Complement: {{ userInfo.address.complement }}</span>
        <span>Zip code: {{ userInfo.address.zipCode }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() userInfo!: UserInfo;
}
