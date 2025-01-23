import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '@model/user';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of users', () => {
    const users: User[] = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];
    component.users = users;
    fixture.detectChanges();

    const userLiElements = fixture.nativeElement.querySelectorAll('li');

    expect(userLiElements.length).toBe(2);
    for (let i = 0; i < users.length; i++) {
      expect(userLiElements[i].textContent).toContain(
        `${users[i].name} - ${users[i].email}`
      );
    }
  });

  it('should handle an empty user list', () => {
    component.users = [];
    fixture.detectChanges();

    const userLiElements = fixture.nativeElement.querySelectorAll('li');
    expect(userLiElements.length).toBe(0);
  });
});
