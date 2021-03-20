import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";

import { RatpService } from './ratp.service';
import { RatpResponse } from '../models/ratp';

describe('RatpService', () => {
  let service: RatpService;
  let ratpResponse: RatpResponse;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ RatpService ]
    });
    service = TestBed.inject(RatpService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
