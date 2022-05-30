import { TestBed } from '@angular/core/testing';

import { ClusterDataService } from './cluster-data.service';

describe('ClusterDataService', () => {
  let service: ClusterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClusterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
