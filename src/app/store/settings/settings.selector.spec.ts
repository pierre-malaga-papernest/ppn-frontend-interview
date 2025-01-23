import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { settingsMock } from '@mocks/settings';
import { selectSettings } from '@store/settings/settings.selectors';

describe('Settings Selectors', () => {
  let store: MockStore;
  const initialState = {
    settings: settingsMock
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.inject(MockStore);
  });

  it('should select settings', () => {
    store.select(selectSettings).subscribe((settings) => {
      expect(settings).toEqual(initialState.settings);
    });
  });
});