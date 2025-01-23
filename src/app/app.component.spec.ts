import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppState } from './store/state';
import { SettingsActions } from '@store/settings/settings.actions';
import { meMock } from '@mocks/me';
import { usersMock } from '@mocks/users';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy().and.returnValue(of({
              me: meMock,
              users: usersMock
            })),
            dispatch: jasmine.createSpy(),
          },
        },
      ],
    });
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load settings on button click', () => {
    const button = fixture.nativeElement.querySelector('#loadSettings');
    button.click();
    expect(store.dispatch).toHaveBeenCalledWith(SettingsActions.loadSettings());
  });
});
