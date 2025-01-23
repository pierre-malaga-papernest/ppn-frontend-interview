import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppComponent } from '@app.component';
import { meMock } from '@mocks/me';
import { usersMock } from '@mocks/users';
import { Store } from '@ngrx/store';
import { AppState } from '@store/state';
import { of } from 'rxjs';
import { SettingsActions } from '@store/settings/settings.actions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
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
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load settings on button click', () => {
    const button = fixture.nativeElement.querySelector('#loadSettings');
    button.click();
    expect(store.dispatch).toHaveBeenCalledWith(SettingsActions.loadSettings());
  });
});
