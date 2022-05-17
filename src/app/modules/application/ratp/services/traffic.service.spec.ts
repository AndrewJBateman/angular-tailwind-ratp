import { TestBed } from '@angular/core/testing';

import { TrafficService } from './traffic.service';

describe('TrafficService', () => {
  let service: TrafficService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
