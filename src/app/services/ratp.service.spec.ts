import { TestBed } from '@angular/core/testing';

import { RatpService } from './ratp.service';

describe('RatpService', () => {
  let service: RatpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
