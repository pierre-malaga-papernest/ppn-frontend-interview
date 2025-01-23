import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserInfo } from '@model/user-info';
import { UserInfoComponent } from './user-info.component';
import { mockUserInfo } from '@mocks/mock-user-info';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  const userInfo: UserInfo = mockUserInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
    });
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.userInfo = userInfo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user info correctly', () => {
    const emailElement = fixture.debugElement.query(
      By.css('.user-info span:nth-child(1)')
    ).nativeElement;
    const dobElement = fixture.debugElement.query(
      By.css('.user-info span:nth-child(2)')
    ).nativeElement;
    const cityElement = fixture.debugElement.query(
      By.css('.address span:nth-child(1)')
    ).nativeElement;
    const streetElement = fixture.debugElement.query(
      By.css('.address span:nth-child(2)')
    ).nativeElement;
    const complementElement = fixture.debugElement.query(
      By.css('.address span:nth-child(3)')
    ).nativeElement;
    const zipCodeElement = fixture.debugElement.query(
      By.css('.address span:nth-child(4)')
    ).nativeElement;

    expect(emailElement.textContent).toContain(`Email: ${userInfo.email}`);
    expect(dobElement.textContent).toContain(`Date of birth: ${userInfo.dob}`);
    expect(cityElement.textContent).toContain(`City: ${userInfo.address.city}`);
    expect(streetElement.textContent).toContain(
      `Street: ${userInfo.address.streetName}`
    );
    expect(complementElement.textContent).toContain(
      `Complement: ${userInfo.address.complement}`
    );
    expect(zipCodeElement.textContent).toContain(
      `Zip code: ${userInfo.address.zipCode}`
    );
  });
});
