import { TestBed } from '@angular/core/testing';

import { ProfileAppService } from './profile-app.service';

describe('ProfileAppService', () => {
  let service: ProfileAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
