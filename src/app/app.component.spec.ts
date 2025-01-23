import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppState } from './state/app.state';
import { loadUserInfo } from './state/user-info/user-info.actions';
import {
  loadUserSettings,
  loadLanguage,
} from './state/settings/settings.actions';
import { loadUsers } from './state/users/users.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<AppState>;
  let storeSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    storeSpy = spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadUsers on init', () => {
    expect(storeSpy).toHaveBeenCalledWith(loadUsers());
  });

  it('should load user on button click', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[0].click();

    expect(storeSpy).toHaveBeenCalledWith(loadUserInfo());
  });

  it('should load user settings and language on button click', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click();

    expect(storeSpy).toHaveBeenCalledWith(loadUserSettings());
    expect(storeSpy).toHaveBeenCalledWith(loadLanguage());
  });
});
