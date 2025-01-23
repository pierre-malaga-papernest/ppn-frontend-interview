import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SettingsService } from './settings.service';
import { Settings } from '@model/settings';
import { Constants } from '@shared/constants';
import { mockSettings } from '@mocks/mock-settings';

describe('SettingsService', () => {
  let service: SettingsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingsService],
    });
    service = TestBed.inject(SettingsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch user settings', () => {
    const dummySettings: Settings = mockSettings;

    service.getUserSettings().subscribe(settings => {
      expect(settings).toEqual(dummySettings);
    });

    const req = httpTestingController.expectOne(service.USER_SETTINGS_API);
    expect(req.request.method).toBe('GET');
    req.flush(dummySettings);
  });

  it('should fetch language', () => {
    const dummyLanguage = Constants.DEFAULT_LANGUAGE;

    service.getLanguage().subscribe(language => {
      expect(language).toBe(dummyLanguage);
    });

    const req = httpTestingController.expectOne(service.USER_LANGUAGE_API);
    expect(req.request.method).toBe('GET');
    req.flush(dummyLanguage);
  });
});
